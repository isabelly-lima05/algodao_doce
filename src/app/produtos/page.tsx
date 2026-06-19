"use client";

import { useMemo, useState } from "react";
import { Search, ArrowUpDown, ChevronDown, TrendingUp, TrendingDown, Star } from "lucide-react";
import { ProductsCollection } from "@/components/products-collection";
import produtos from "../../../produtos.json";

type Product = {
  id?: string;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
  rating?: number;
  sales?: number;
};

const categoryDescriptions: Record<string, string> = {
  Inverno: "Peças quentinhas e com acabamento de qualidade para os dias frios.",
  Outono: "Tons terrosos e camadas leves para a temporada de transição.",
  "Verão": "Modelos leves e frescos para aproveitar o calor com estilo.",
  Primavera: "Estampas florais e tons suaves para um visual delicado.",
  Tematico: "Peças criativas para datas especiais e ocasiões divertidas.",
};

const sortOptions = [
  { value: "bestRating", label: "Melhor avaliação", icon: Star },
  { value: "priceLow", label: "Menor preço", icon: ArrowUpDown },
  { value: "priceHigh", label: "Maior preço", icon: ArrowUpDown },
  { value: "mostSold", label: "Mais vendidos", icon: TrendingUp },
  { value: "leastSold", label: "Menos vendidos", icon: TrendingDown },
];

export default function Produtos() {
  const [search, setSearch] = useState("");
  const [sortMode, setSortMode] = useState("bestRating");

  const productsWithDefaults = useMemo(() => {
    return produtos.map((product: Product, index: number) => ({
      ...product,
      rating: product.rating ?? Number((4.6 + ((index % 5) * 0.08)).toFixed(1)),
      sales: product.sales ?? 80 + ((index * 13) % 180),
    }));
  }, []);

  const filteredProducts = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();
    return productsWithDefaults.filter((product) => product.name.toLowerCase().includes(normalizedSearch));
  }, [productsWithDefaults, search]);

  const sortedProducts = useMemo(() => {
    return [...filteredProducts].sort((a, b) => {
      switch (sortMode) {
        case "priceLow":
          return a.price - b.price;
        case "priceHigh":
          return b.price - a.price;
        case "mostSold":
          return (b.sales ?? 0) - (a.sales ?? 0);
        case "leastSold":
          return (a.sales ?? 0) - (b.sales ?? 0);
        case "bestRating":
        default:
          return (b.rating ?? 0) - (a.rating ?? 0);
      }
    });
  }, [filteredProducts, sortMode]);

  const collections = useMemo(() => {
    const grouped = sortedProducts.reduce((acc: Record<string, any>, product) => {
      if (!acc[product.category]) {
        acc[product.category] = {
          title: product.category,
          description: categoryDescriptions[product.category] || "",
          products: [],
        };
      }
      acc[product.category].products.push(product);
      return acc;
    }, {} as Record<string, any>);

    return Object.values(grouped);
  }, [sortedProducts]);

  const selectedOption = sortOptions.find((option) => option.value === sortMode);

  return (
    <main className="min-h-screen bg-[#faf9f6] text-stone-900 dark:bg-[#0f0e0c] dark:text-stone-100">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="mb-12 space-y-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-rose-500">
            Novas coleções
          </p>
          <h1 className="text-4xl font-light tracking-tight sm:text-5xl">
            Produtos por estação e temas especiais
          </h1>
          <p className="mx-auto max-w-2xl text-sm leading-7 text-stone-500 dark:text-stone-400">
            Filtre por preço, classificação, mais vendidos, menos vendidos e busque pelo nome do produto.
          </p>
        </div>

        <div className="mb-10 rounded-3xl border border-stone-200 bg-white p-6 shadow-sm dark:border-stone-800 dark:bg-stone-950">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <label className="flex flex-1 items-center gap-3 rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm text-stone-700 transition focus-within:border-rose-400 dark:border-stone-800 dark:bg-stone-900 dark:text-stone-100">
              <Search className="h-4 w-4 text-stone-500 dark:text-stone-400" />
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Pesquisar por nome"
                className="flex-1 bg-transparent text-sm text-stone-900 outline-none placeholder:text-stone-400 dark:text-stone-100 dark:placeholder:text-stone-500"
              />
            </label>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="relative inline-flex min-w-[16rem] items-center gap-3 rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 shadow-sm transition hover:border-rose-300 dark:border-stone-800 dark:bg-stone-900">
                {selectedOption ? (
                  <selectedOption.icon className="h-4 w-4 text-rose-500" />
                ) : (
                  <ArrowUpDown className="h-4 w-4 text-rose-500" />
                )}
                <select
                  value={sortMode}
                  onChange={(event) => setSortMode(event.target.value)}
                  className="w-full appearance-none bg-transparent text-sm font-medium text-stone-900 outline-none placeholder:text-stone-500 dark:text-stone-100"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-4 h-4 w-4 text-stone-400 dark:text-stone-500" />
              </div>

              <div className="rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm text-stone-600 dark:border-stone-800 dark:bg-stone-900 dark:text-stone-400">
                {sortedProducts.length} produto{sortedProducts.length === 1 ? "" : "s"} encontrado{sortedProducts.length === 1 ? "" : "s"}
              </div>
            </div>
          </div>
        </div>

        {collections.length > 0 ? (
          collections.map((collection) => (
            <ProductsCollection key={collection.title} collection={collection} />
          ))
        ) : (
          <div className="rounded-3xl border border-stone-200 bg-white p-10 text-center text-stone-600 shadow-sm dark:border-stone-800 dark:bg-stone-950 dark:text-stone-300">
            Nenhum produto corresponde à sua pesquisa. Tente outro nome ou ajuste o filtro.
          </div>
        )}
      </div>
    </main>
  );
}
