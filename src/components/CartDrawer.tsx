"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle2,
  MinusCircle,
  PlusCircle,
  ShoppingCart,
  Trash2,
  X,
} from "lucide-react";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const {
    items,
    cartCount,
    totalPrice,
    incrementQuantity,
    decrementQuantity,
    removeProduct,
    clearCart,
  } = useCart();
  const [feedback, setFeedback] = useState("");

  const formattedTotal = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(totalPrice);

  const handleCheckout = () => {
    if (items.length === 0) return;
    clearCart();
    setFeedback("Compra realizada com sucesso!");
    setTimeout(() => setFeedback(""), 3000);
  };

  return (
    <div
      className={`fixed inset-0 z-[60] transition-all duration-300 ${
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      <aside className={`fixed top-20 right-4 z-[70] h-[calc(100%-5rem)] w-[calc(100%-2rem)] max-w-[440px] overflow-hidden rounded-[2rem] border border-stone-200 bg-white/95 shadow-2xl transition-all duration-300 dark:border-stone-800 dark:bg-stone-950/95 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="sticky top-0 z-20 mb-4 rounded-[2rem] border border-stone-200 bg-stone-50 px-5 py-4 shadow-sm dark:border-stone-800 dark:bg-stone-900">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-lg font-semibold text-stone-900 dark:text-stone-100">
              <span className="flex h-11 w-11 items-center justify-center rounded-3xl bg-rose-100 text-rose-500 dark:bg-rose-500/10">
                <ShoppingCart className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-stone-500 dark:text-stone-400">Meu carrinho</p>
                <p className="text-sm font-medium text-stone-700 dark:text-stone-300">{cartCount} item{cartCount === 1 ? "" : "s"}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-stone-100 text-stone-600 transition hover:bg-stone-200 dark:bg-stone-900 dark:text-stone-300 dark:hover:bg-stone-800"
              aria-label="Fechar carrinho"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="rounded-[1.5rem] bg-rose-50 p-4 text-sm text-rose-700 dark:bg-rose-500/10 dark:text-rose-200">
              <p className="font-semibold uppercase tracking-[0.16em]">Ações do carrinho</p>
              <p className="mt-2 text-sm leading-6 text-stone-600 dark:text-stone-400">Use + / - para ajustar quantidade e Remover para excluir o item.</p>
            </div>
            <div className="rounded-[1.5rem] bg-stone-50 p-4 text-sm text-stone-700 dark:bg-stone-900 dark:text-stone-300">
              <p className="font-semibold uppercase tracking-[0.16em]">Finalizar compra</p>
              <p className="mt-2 text-sm leading-6 text-stone-600 dark:text-stone-400">Clique em Finalizar compra para concluir e receber o feedback de sucesso.</p>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <div className="rounded-[1.75rem] border border-rose-100 bg-rose-50 p-4 text-sm text-rose-700 dark:border-rose-500/30 dark:bg-rose-500/10 dark:text-rose-200">
            <p className="font-semibold uppercase tracking-[0.16em]">Ações rápidas</p>
            <p className="mt-2 text-sm leading-6 text-stone-600 dark:text-stone-300">Use os botões + / - para ajustar a quantidade e o botão Remover para excluir o produto.</p>
          </div>
          <div className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-4 text-sm text-stone-700 dark:border-stone-800 dark:bg-stone-900 dark:text-stone-300">
            <p className="font-semibold uppercase tracking-[0.16em]">Finalizar compra</p>
            <p className="mt-2 text-sm leading-6 text-stone-600 dark:text-stone-400">Quando terminar, clique em Finalizar compra para ver o feedback de sucesso.</p>
          </div>
        </div>

        {items.length === 0 ? (
          <div className="rounded-[2rem] border border-dashed border-stone-200 bg-stone-50 px-6 py-10 text-center text-sm text-stone-600 shadow-sm dark:border-stone-800 dark:bg-stone-900 dark:text-stone-300">
            Seu carrinho está vazio.
            <p className="mt-2 text-sm text-stone-500 dark:text-stone-400">Escolha um item e toque no botão de adicionar para começar.</p>
            <Link href="/produtos" onClick={onClose} className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-rose-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-rose-600">
              Continuar comprando
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.id} className="rounded-[2rem] border border-stone-200 bg-stone-100/90 p-4 shadow-sm transition hover:-translate-y-0.5 dark:border-stone-800 dark:bg-stone-900/90">
                <div className="flex items-start gap-4">
                  <div className="relative h-20 w-20 overflow-hidden rounded-[1.75rem] bg-stone-200 dark:bg-stone-800">
                    <img src={item.imageSrc} alt={item.title} className="h-full w-full object-cover" />
                    <span className="absolute left-2 top-2 rounded-full bg-white/90 px-2 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-700 dark:bg-stone-950/90 dark:text-stone-200">
                      x{item.quantity}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="font-semibold text-stone-900 dark:text-stone-100">{item.title}</p>
                        <p className="mt-1 text-sm text-stone-500 dark:text-stone-400">
                          {new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(item.price)} cada
                        </p>
                      </div>
                      <p className="text-sm font-semibold text-stone-900 dark:text-stone-100">
                        {new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(item.price * item.quantity)}
                      </p>
                    </div>
                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      <button
                        type="button"
                        onClick={() => decrementQuantity(item.id)}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-stone-200 bg-white text-stone-700 transition hover:border-rose-400 hover:text-rose-500 dark:border-stone-800 dark:bg-stone-950 dark:text-stone-200"
                        aria-label={`Remover uma unidade de ${item.title}`}
                      >
                        <MinusCircle className="h-4 w-4" />
                      </button>
                      <span className="min-w-[36px] text-center text-sm font-semibold text-stone-900 dark:text-stone-100">{item.quantity}</span>
                      <button
                        type="button"
                        onClick={() => incrementQuantity(item.id)}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-stone-200 bg-white text-stone-700 transition hover:border-rose-400 hover:text-rose-500 dark:border-stone-800 dark:bg-stone-950 dark:text-stone-200"
                        aria-label={`Adicionar uma unidade de ${item.title}`}
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
                    <div className="mt-2 flex flex-wrap gap-3 text-[11px] uppercase tracking-[0.24em] text-stone-500 dark:text-stone-400">
                      <span className="rounded-full bg-stone-100 px-2 py-1 dark:bg-stone-900">Ajustar quantidade</span>
                      <span className="rounded-full bg-stone-100 px-2 py-1 dark:bg-stone-900">Remover item</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-6 space-y-4 rounded-[2rem] border border-stone-200 bg-white/90 px-5 py-4 shadow-sm dark:border-stone-800 dark:bg-stone-950/90">
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-[1.5rem] bg-rose-50 p-4 text-sm text-stone-700 dark:bg-rose-500/10 dark:text-stone-200">
              <p className="font-semibold">Ações do carrinho</p>
              <p className="mt-2 text-sm text-stone-500 dark:text-stone-400">Use + e - para alterar quantidade.</p>
            </div>
            <div className="rounded-[1.5rem] bg-stone-50 p-4 text-sm text-stone-700 dark:bg-stone-900 dark:text-stone-300">
              <p className="font-semibold">Remover item</p>
              <p className="mt-2 text-sm text-stone-500 dark:text-stone-400">Clique em "Remover" para excluir o item do carrinho.</p>
            </div>
          </div>
          <div className="rounded-[1.5rem] bg-gradient-to-r from-rose-50 via-white to-rose-50 px-5 py-4 shadow-sm dark:from-rose-950 dark:via-stone-950 dark:to-rose-950">
            <div className="flex items-center justify-between text-sm text-stone-600 dark:text-stone-400">
              <span>Total de itens</span>
              <span className="font-semibold text-stone-900 dark:text-stone-100">{cartCount}</span>
            </div>
            <div className="mt-2 flex items-center justify-between text-xl font-semibold text-stone-900 dark:text-stone-100">
              <span>Subtotal</span>
              <span>{formattedTotal}</span>
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-3">
          <Button
            type="button"
            className="w-full rounded-[1.5rem] bg-rose-500 text-white hover:bg-rose-600 focus-visible:ring-rose-500"
            onClick={handleCheckout}
            disabled={items.length === 0}
          >
            <CheckCircle2 className="h-4 w-4" />
            Finalizar compra
          </Button>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex w-full items-center justify-center gap-2 rounded-[1.5rem] border border-stone-200 bg-white px-4 py-3 text-sm font-semibold text-stone-700 transition hover:border-rose-400 hover:text-rose-500 dark:border-stone-800 dark:bg-stone-950 dark:text-stone-200"
          >
            Continuar comprando
            <ArrowRight className="h-4 w-4" />
          </button>
          {items.length > 0 ? (
            <button
              type="button"
              onClick={clearCart}
              className="inline-flex w-full items-center justify-center gap-2 rounded-[1.5rem] border border-rose-200 bg-rose-50 px-4 py-3 text-sm font-semibold text-rose-700 transition hover:bg-rose-100 dark:border-rose-500/30 dark:bg-rose-500/10 dark:text-rose-200 dark:hover:bg-rose-500/20"
            >
              Limpar carrinho
            </button>
          ) : null}
          {feedback ? (
            <div className="rounded-[1.75rem] bg-emerald-100 px-4 py-3 text-sm text-emerald-800 shadow-sm dark:bg-emerald-950 dark:text-emerald-200">
              {feedback}
            </div>
          ) : null}
        </div>
      </aside>
    </div>
  );
}
