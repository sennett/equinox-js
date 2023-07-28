import { PayerId, InvoiceId } from "./identifiers.js"
import z from "zod"
import { Codec, Decider, LoadOption, StreamId } from "@equinox-js/core"
import { reduce } from "ramda"
import * as Config from "../config/equinox.js"

export const CATEGORY = "Invoice"
export const streamId = StreamId.gen(InvoiceId.toString)
type InvoiceRaised = { payer_id: PayerId; amount: number }
type Payment = { amount: number; reference: string }

export type Event =
  | { type: "InvoiceRaised"; data: InvoiceRaised }
  | { type: "PaymentReceived"; data: Payment }
  | { type: "InvoiceFinalized" }

export const RaisedSchema = z.object({
  payer_id: z.string().transform(PayerId.parse),
  amount: z.number(),
})
export const PaymentSchema = z.object({ reference: z.string(), amount: z.number() })

export const codec = Codec.zod<Event>({
  InvoiceRaised: RaisedSchema.parse,
  PaymentReceived: PaymentSchema.parse,
  InvoiceFinalized: () => undefined,
})

// Fold
export type InvoiceState = {
  amount: number
  payer_id: PayerId
  payments: Set<string>
  amount_paid: number
}

class InitialState {
  evolve(event: Event): State {
    if (event.type !== "InvoiceRaised") throw new Error("Unexpected " + event.type)
    return new RaisedState({
      amount: event.data.amount,
      payer_id: event.data.payer_id,
      amount_paid: 0,
      payments: new Set(),
    })
  }
}

class RaisedState {
  constructor(public state: InvoiceState) {}

  evolve(event: Event): State {
    switch (event.type) {
      case "InvoiceRaised":
        throw new Error("Unexpected " + event.type)
      case "PaymentReceived":
        new RaisedState({
          ...this.state,
          payments: new Set([...this.state.payments, event.data.reference]),
          amount_paid: this.state.amount_paid + event.data.amount,
        })
      case "InvoiceFinalized":
        return new FinalizedState(this.state)
    }
  }
}

class FinalizedState {
  constructor(public state: InvoiceState) {}

  evolve(event: Event): State {
    throw new Error("Unexpected " + event.type)
  }
}

export type State = InitialState | RaisedState | FinalizedState
export const initial: State = new InitialState()

export function evolve(state: State, event: Event): State {
  return state.evolve(event)
}

export const fold = reduce(evolve)

// Decisions

export const raiseInvoice =
  (data: InvoiceRaised) =>
  (state: State): Event[] => {
    if (state instanceof FinalizedState) throw new Error("Invoice is finalized")
    if (state instanceof RaisedState) throw new Error("Invoice is already raised")
    return [{ type: "InvoiceRaised", data }]
  }

export const recordPayment =
  (data: Payment) =>
  (state: State): Event[] => {
    if (state instanceof FinalizedState) throw new Error("Invoice is finalized")
    if (state instanceof InitialState) throw new Error("Invoice not found")
    if (state.state.payments.has(data.reference)) return []
    return [{ type: "PaymentReceived", data }]
  }

export const finalize = (state: State): Event[] => {
  if (state instanceof FinalizedState) return []
  if (state instanceof InitialState) throw new Error("Invoice not found")
  return [{ type: "InvoiceFinalized" }]
}

// Queries
export type Model = {
  amount: number
  payer_id: string
  finalized: boolean
}

export const summary = (state: State): Model | null => {
  if (state instanceof InitialState) return null
  return {
    amount: state.state.amount,
    payer_id: PayerId.toString(state.state.payer_id),
    finalized: state instanceof FinalizedState,
  }
}

export class Service {
  constructor(private readonly resolve: (invoiceId: InvoiceId) => Decider<Event, State>) {}

  raise(id: InvoiceId, data: InvoiceRaised) {
    const decider = this.resolve(id)
    return decider.transact(raiseInvoice(data), LoadOption.AssumeEmpty)
  }

  recordPayment(id: InvoiceId, data: Payment) {
    const decider = this.resolve(id)
    return decider.transact(recordPayment(data))
  }

  finalize(id: InvoiceId) {
    const decider = this.resolve(id)
    return decider.transact(finalize)
  }

  readInvoice(id: InvoiceId) {
    const decider = this.resolve(id)
    return decider.query(summary, LoadOption.AllowStale)
  }

  static resolveCategory(config: Config.Config) {
    switch (config.store) {
      case Config.Store.Memory:
        return Config.MemoryStore.create(CATEGORY, codec, fold, initial, config)
      case Config.Store.MessageDb:
        return Config.MessageDb.createUnoptimized(CATEGORY, codec, fold, initial, config)
    }
  }

  static create(config: Config.Config) {
    const category = Service.resolveCategory(config)
    const resolve = (id: InvoiceId) => Decider.resolve(category, streamId(id), null)
    return new Service(resolve)
  }
}
