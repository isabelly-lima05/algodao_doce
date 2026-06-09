"use client"

import { useRef, useState } from "react"
import { ProductCard } from "@/components/product-card"

type Product = {
  id?: string
  name: string
  category: string
  price: number
  description: string
  image: string
}

interface ProductsCollectionProps {
  collection: {
    title: string
    description: string
    products: Product[]
  }
}

export function ProductsCollection({ collection }: ProductsCollectionProps) {
  const [expanded, setExpanded] = useState(false)
  const sectionRef = useRef<HTMLElement | null>(null)
  const visibleCount = collection.products.length <= 5 ? collection.products.length : 4
  const visibleProducts = expanded ? collection.products : collection.products.slice(0, visibleCount)
  const extraCount = collection.products.length - visibleCount

  const handleToggle = () => {
    setExpanded((current) => {
      const nextExpanded = !current
      if (current) {
        sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
      }
      return nextExpanded
    })
  }

  return (
    <section ref={sectionRef} className="mb-14">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-500 dark:text-stone-400">
            Coleção de {collection.title}
          </p>
        </div>
        <p className="max-w-xl text-sm leading-6 text-stone-500 dark:text-stone-400">
          {collection.description}
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {visibleProducts.map((product) => (
          <ProductCard key={product.id ?? product.name} product={product} />
        ))}
      </div>

      {collection.products.length > visibleCount ? (
        <div className="mt-6 flex justify-end">
          <button
            type="button"
            className="text-rose-500 text-sm font-semibold uppercase tracking-[0.24em] transition-colors hover:text-rose-600"
            onClick={handleToggle}
            aria-expanded={expanded}
            aria-label={expanded ? "Ver menos produtos" : "Ver mais produtos"}
          >
            {expanded ? "Ver Menos" : "Ver Mais"}
          </button>
        </div>
      ) : null}
    </section>
  )
}
