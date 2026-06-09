"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/CartContext"
import {
  CheckCircle2,
  MinusCircle,
  PlusCircle,
  ShoppingCart,
  Trash2,
} from "lucide-react"

export default function CarrinhoPage() {
  const {
    items,
    cartCount,
    totalPrice,
    incrementQuantity,
    decrementQuantity,
    removeProduct,
    clearCart,
  } = useCart()
  const [feedback, setFeedback] = useState("")

  const formattedTotal = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(totalPrice)

  const handleCheckout = () => {
    if (items.length === 0) return
    clearCart()
    setFeedback("Compra realizada com sucesso!")
    window.setTimeout(() => setFeedback(""), 3000)
  }

  return (
    <main className="min-h-screen bg-[#faf9f6] text-stone-900 dark:bg-[#0f0e0c] dark:text-stone-100">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-rose-500">
            Meu carrinho
          </p>
          <h1 className="mt-3 text-4xl font-light tracking-tight sm:text-5xl">
            Revise seu pedido antes de finalizar
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-stone-500 dark:text-stone-400">
            Aqui você pode ajustar quantidades, remover itens ou finalizar a compra com feedback imediato.
          </p>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute -right-16 top-10 hidden h-72 w-72 rounded-full bg-rose-200/60 blur-3xl dark:bg-rose-500/20 lg:block" />

          <div className="grid gap-8 xl:grid-cols-[1.4fr_420px]">
            <section className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-lg dark:border-stone-800 dark:bg-stone-950">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 sm:flex-nowrap sm:items-end border-b border-stone-200 dark:border-stone-800">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-stone-500 dark:text-stone-400">
                    Itens no carrinho
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold text-stone-900 dark:text-stone-100">
                    {cartCount} item{cartCount === 1 ? "" : "s"}
                  </h2>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    href="/produtos"
                    className="inline-flex items-center justify-center rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-semibold text-stone-700 transition hover:border-rose-400 hover:text-rose-500 dark:border-stone-800 dark:bg-stone-950 dark:text-stone-200"
                  >
                    Continuar comprando
                  </Link>
                  <button
                    type="button"
                    onClick={clearCart}
                    disabled={items.length === 0}
                    className="inline-flex items-center justify-center rounded-full border border-transparent bg-rose-50 px-4 py-2 text-sm font-semibold text-rose-700 transition hover:bg-rose-100 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-rose-500/10 dark:text-rose-200 dark:hover:bg-rose-500/20"
                  >
                    Limpar carrinho
                  </button>
                </div>
              </div>

              {items.length === 0 ? (
                <div className="mt-12 rounded-[1.75rem] border border-dashed border-stone-200 bg-stone-50 p-10 text-center text-sm text-stone-600 shadow-sm dark:border-stone-800 dark:bg-stone-900 dark:text-stone-300">
                  <ShoppingCart className="mx-auto mb-4 h-10 w-10 text-rose-500" />
                  <p className="font-semibold">Seu carrinho está vazio</p>
                  <p className="mt-2 text-sm text-stone-500 dark:text-stone-400">
                    Adicione produtos e volte aqui para finalizar a compra.
                  </p>
                </div>
              ) : (
                <div className="mt-8 space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-4 shadow-sm dark:border-stone-800 dark:bg-stone-900">
                      <div className="flex flex-wrap items-start gap-4">
                        <div className="relative h-24 w-24 overflow-hidden rounded-[1.5rem] bg-stone-200 dark:bg-stone-800">
                          <img src={item.imageSrc} alt={item.title} className="h-full w-full object-cover" />
                          <span className="absolute left-2 top-2 rounded-full bg-white/90 px-2 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-700 dark:bg-stone-950/90 dark:text-stone-200">
                            x{item.quantity}
                          </span>
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center justify-between gap-3">
                            <div>
                              <p className="font-semibold text-stone-900 dark:text-stone-100">{item.title}</p>
                              <p className="mt-1 text-sm text-stone-500 dark:text-stone-400">
                                {new Intl.NumberFormat("pt-BR", {
                                  style: "currency",
                                  currency: "BRL",
                                }).format(item.price)} cada
                              </p>
                            </div>
                            <p className="text-sm font-semibold text-stone-900 dark:text-stone-100">
                              {new Intl.NumberFormat("pt-BR", {
                                style: "currency",
                                currency: "BRL",
                              }).format(item.price * item.quantity)}
                            </p>
                          </div>

                          <div className="mt-4 flex flex-wrap items-center gap-2">
                            <button
                              type="button"
                              onClick={() => decrementQuantity(item.id)}
                              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-stone-200 bg-white text-stone-700 transition hover:border-rose-400 hover:text-rose-500 dark:border-stone-800 dark:bg-stone-950 dark:text-stone-200"
                            >
                              <MinusCircle className="h-4 w-4" />
                            </button>
                            <span className="min-w-[44px] text-center text-sm font-semibold text-stone-900 dark:text-stone-100">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() => incrementQuantity(item.id)}
                              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-stone-200 bg-white text-stone-700 transition hover:border-rose-400 hover:text-rose-500 dark:border-stone-800 dark:bg-stone-950 dark:text-stone-200"
                            >
                              <PlusCircle className="h-4 w-4" />
                            </button>
                            <button
                              type="button"
                              onClick={() => removeProduct(item.id)}
                              className="ml-auto inline-flex items-center gap-2 rounded-full border border-transparent bg-rose-50 px-3 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-rose-700 transition hover:bg-rose-100 dark:bg-rose-500/10 dark:text-rose-200 dark:hover:bg-rose-500/20"
                            >
                              <Trash2 className="h-4 w-4" />
                              Remover
                            </button>
                          </div>

                          <div className="mt-3 flex flex-wrap gap-3 text-[11px] uppercase tracking-[0.24em] text-stone-500 dark:text-stone-400">
                            <span className="rounded-full bg-stone-100 px-2 py-1 dark:bg-stone-900">Ajustar quantidade</span>
                            <span className="rounded-full bg-stone-100 px-2 py-1 dark:bg-stone-900">Remover item</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>

            <aside className="self-start rounded-[2rem] border border-stone-200 bg-white p-8 shadow-lg dark:border-stone-800 dark:bg-stone-950">
              <div className="rounded-[1.75rem] bg-stone-100 p-6 text-center dark:bg-stone-900">
                <span className="text-sm uppercase tracking-[0.24em] text-stone-500 dark:text-stone-400">
                  Resumo do pedido
                </span>
                <div className="mt-4 flex items-center justify-center gap-2 text-3xl font-semibold text-stone-900 dark:text-stone-100">
                  <ShoppingCart className="h-6 w-6 text-rose-500" />
                  <span>{cartCount} item{cartCount === 1 ? "" : "s"}</span>
                </div>
                <p className="mt-2 text-sm text-stone-500 dark:text-stone-400">Reveja as quantidades antes de finalizar.</p>
              </div>

              <div className="mt-6 space-y-4">
                <div className="rounded-[1.75rem] bg-rose-50 p-5 text-sm text-rose-700 dark:bg-rose-500/10 dark:text-rose-200">
                  <p className="font-semibold">Total</p>
                  <p className="mt-2 text-xl font-semibold text-stone-900 dark:text-stone-100">{formattedTotal}</p>
                </div>

                <Button
                  type="button"
                  className="w-full rounded-[1.5rem] bg-rose-500 text-white hover:bg-rose-600 focus-visible:ring-rose-500"
                  onClick={handleCheckout}
                  disabled={items.length === 0}
                >
                  <CheckCircle2 className="mr-2 h-4 w-4" />
                  Finalizar compra
                </Button>

                {feedback ? (
                  <div className="rounded-[1.75rem] bg-emerald-100 px-4 py-3 text-sm text-emerald-800 shadow-sm dark:bg-emerald-950 dark:text-emerald-200">
                    {feedback}
                  </div>
                ) : null}
              </div>
            </aside>
          </div>
        </div>
      </div>
    </main>
  )
}
