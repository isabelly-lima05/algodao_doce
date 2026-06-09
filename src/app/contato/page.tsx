"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

const CONTACT_EMAIL = "isabelly.lima.senai@gmail.com"
const PHONE_NUMBER = "(41) 99876-5432"

export default function Contato() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [overlayVisible, setOverlayVisible] = useState(false)
  const timeoutRef = useRef<number | null>(null)

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    setOverlayVisible(true)
    setName("")
    setEmail("")
    setSubject("")
    setMessage("")

    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current)
    }

    timeoutRef.current = window.setTimeout(() => {
      setOverlayVisible(false)
      timeoutRef.current = null
    }, 5000)
  }

  return (
    <main className="min-h-screen bg-[#faf9f6] text-stone-900 dark:bg-[#0f0e0c] dark:text-stone-100">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-rose-500">
            Fale com a gente
          </p>
          <h1 className="mt-3 text-4xl font-light tracking-tight sm:text-5xl">
            Entre em contato com a Algodão Doce
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-stone-500 dark:text-stone-400">
            Use o formulário abaixo para enviar sua mensagem diretamente para o email da nossa equipe.
          </p>
        </div>

        <div className="grid gap-8 xl:grid-cols-[1.6fr_1fr]">
          <div className="rounded-3xl bg-white p-8 shadow-lg dark:bg-stone-950 dark:border dark:border-stone-800">
            <h2 className="text-2xl font-semibold tracking-tight text-stone-900 dark:text-stone-100">
              Envie sua mensagem
            </h2>
            <p className="mt-2 text-sm leading-6 text-stone-500 dark:text-stone-400">
              Preencha os campos e clique em enviar. Em seguida, você verá uma confirmação de sucesso.
            </p>

            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <label className="block">
                <span className="text-sm font-medium text-stone-700 dark:text-stone-200">Nome</span>
                <input
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  required
                  placeholder="Seu nome"
                  className="mt-2 w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm text-stone-900 outline-none transition focus:border-rose-500 focus:ring-2 focus:ring-rose-100 dark:border-stone-800 dark:bg-stone-900 dark:text-stone-100"
                />
              </label>

              <label className="block">
                <span className="text-sm font-medium text-stone-700 dark:text-stone-200">Email</span>
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                  placeholder="seu@email.com"
                  className="mt-2 w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm text-stone-900 outline-none transition focus:border-rose-500 focus:ring-2 focus:ring-rose-100 dark:border-stone-800 dark:bg-stone-900 dark:text-stone-100"
                />
              </label>

              <label className="block">
                <span className="text-sm font-medium text-stone-700 dark:text-stone-200">Assunto</span>
                <input
                  type="text"
                  value={subject}
                  onChange={(event) => setSubject(event.target.value)}
                  placeholder="Motivo do contato"
                  className="mt-2 w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm text-stone-900 outline-none transition focus:border-rose-500 focus:ring-2 focus:ring-rose-100 dark:border-stone-800 dark:bg-stone-900 dark:text-stone-100"
                />
              </label>

              <label className="block">
                <span className="text-sm font-medium text-stone-700 dark:text-stone-200">Mensagem</span>
                <textarea
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  required
                  rows={6}
                  placeholder="Escreva aqui o que você deseja falar conosco"
                  className="mt-2 w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm text-stone-900 outline-none transition focus:border-rose-500 focus:ring-2 focus:ring-rose-100 dark:border-stone-800 dark:bg-stone-900 dark:text-stone-100"
                />
              </label>

              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-2xl bg-rose-500 px-6 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-white transition hover:bg-rose-600"
              >
                Enviar mensagem
              </button>

              {overlayVisible ? (
                <p className="text-sm text-rose-500">Sua mensagem foi enviada com sucesso. Esta confirmação ficará visível por 5 segundos.</p>
              ) : null}
            </form>
          </div>

          <aside className="space-y-6 rounded-3xl bg-white p-8 shadow-lg dark:bg-stone-950 dark:border dark:border-stone-800">
            <div className="rounded-3xl bg-stone-100 p-8 text-center dark:bg-stone-900">
              <div className="relative mx-auto flex h-28 w-28 items-center justify-center bg-stone-100 dark:bg-stone-900">
                <Image
                  src="/logo/Logo.png"
                  alt="Logo Algodão Doce"
                  fill
                  sizes="112px"
                  className="object-contain p-3"
                  priority
                />
              </div>
              <div className="mt-5">
                <span className="font-serif text-lg font-medium tracking-wide text-stone-800 dark:text-stone-100">
                  Algodão Doce
                </span>
              </div>
            </div>

            <div className="rounded-3xl border border-stone-200 bg-stone-50 p-6 dark:border-stone-800 dark:bg-stone-900">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-rose-500">Contato</p>
              <p className="mt-4 text-sm leading-6 text-stone-600 dark:text-stone-300">
                Estamos prontos para responder suas dúvidas, pedidos e sugestões. Envie sua mensagem e retornaremos o contato em breve.
              </p>
              <div className="mt-6 space-y-3 text-sm text-stone-700 dark:text-stone-300">
                <div>
                  <p className="font-semibold">Telefone</p>
                  <p>{PHONE_NUMBER}</p>
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <p>{CONTACT_EMAIL}</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {overlayVisible ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4 py-8">
          <div className="w-full max-w-md rounded-3xl bg-white p-8 text-center shadow-2xl dark:bg-stone-950 dark:text-stone-100">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-rose-500">Mensagem enviada</p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-stone-900 dark:text-stone-100">
              Obrigado! Sua mensagem foi enviada com sucesso.
            </h2>
          </div>
        </div>
      ) : null}
    </main>
  )
}
