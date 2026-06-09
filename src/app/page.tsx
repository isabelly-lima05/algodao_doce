import { Carrosel } from "@/components/carrosel";
import CardProduto from "@/components/CardProduto";
import produtos from "../../produtos.json";

const produtosDestaque = produtos
  .filter((p) => p.destaque)
  .slice(0, 4)
  .map((p) => ({
    id: p.id,
    title: p.name,
    description: p.description,
    price: p.price,
    imageSrc: p.image,
    destaque: !!p.destaque,
  }));

export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf9f6] text-stone-900 dark:bg-[#0f0e0c] dark:text-stone-100">
      <div className="mx-auto max-w-7xl px-4 py-16">
        {/* Seção de Introdução Editorial */}
        <div className="mb-12 space-y-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-rose-500">
            Algodão Doce
          </p>
          <h1 className="text-4xl font-light tracking-tight sm:text-5xl">
            Suavidade em cada detalhe
          </h1>
          <p className="mx-auto max-w-2xl text-sm leading-7 text-stone-500 dark:text-stone-400">
            Roupas cuidadosamente desenhadas em tecidos naturais para acolher os primeiros dias e descobertas do seu bebê.
          </p>
        </div>

        {/* Carrossel */}
        <div className="relative">
          <Carrosel />
        </div>

        {/* Cards de Produto */}
        <section className="mt-16">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-rose-500">
                Lançamentos
              </p>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {produtosDestaque.map((produto) => (
              <CardProduto key={produto.id} {...produto} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
