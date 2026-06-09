"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { cartCount } = useCart();

  const navLinks = [
    { href: "/", label: "Início" },
    { href: "/produtos", label: "Coleções" },
    { href: "/contato", label: "Atendimento" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-stone-100 bg-stone-50/80 backdrop-blur-md dark:border-stone-900 dark:bg-stone-950/80">
      {/* Faixa de anúncio discreta */}
      <div className="bg-[#fcf8f5] py-1.5 text-center text-[11px] font-medium tracking-[0.15em] text-stone-500 uppercase dark:bg-stone-900 dark:text-stone-400">
        Frete grátis em compras selecionadas
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo / Nome da Marca */}
          <Link href="/" className="flex items-center gap-3 transition-opacity hover:opacity-90">
            <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-stone-100 dark:bg-stone-900">
              <Image
                src="/logo/Logo.png"
                alt="Logo Algodão Doce"
                fill
                sizes="44px"
                className="object-contain p-1.5"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg font-medium tracking-wide text-stone-800 dark:text-stone-100">
                Algodão Doce
              </span>
              <span className="text-[10px] tracking-[0.18em] text-stone-400 uppercase">
                Boutique Infantil
              </span>
            </div>
          </Link>

          {/* Navegação Desktop */}
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xs font-medium uppercase tracking-[0.12em] transition-colors duration-200 ${
                    isActive
                      ? "text-rose-400"
                      : "text-stone-600 hover:text-rose-400 dark:text-stone-300 dark:hover:text-rose-300"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/carrinho"
              className="relative inline-flex items-center justify-center rounded-full border border-stone-200 bg-white p-2 text-stone-700 transition hover:border-rose-400 hover:text-rose-500 dark:border-stone-800 dark:bg-stone-950 dark:text-stone-200"
              aria-label="Abrir carrinho"
            >
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 ? (
                <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-rose-500 px-1.5 text-[10px] font-semibold text-white">
                  {cartCount}
                </span>
              ) : null}
            </Link>

            {/* Botão do Menu Mobile */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center rounded-full p-2 text-stone-500 hover:bg-stone-100 dark:hover:bg-stone-900"
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Abrir menu</span>
                {isOpen ? (
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Menu de Navegação - Mobile */}
      {isOpen && (
        <div className="border-t border-stone-100 bg-stone-50/95 backdrop-blur-md md:hidden dark:border-stone-900 dark:bg-stone-950/95" id="mobile-menu">
          <div className="space-y-1 px-4 py-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-stone-100 text-rose-400 dark:bg-stone-900"
                      : "text-stone-600 hover:bg-stone-50 hover:text-stone-900 dark:text-stone-300"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}