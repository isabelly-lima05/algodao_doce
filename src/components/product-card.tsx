"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ProductCardProps {
  product: {
    name: string;
    category: string;
    price: number;
    description: string;
    image: string;
  };
}

export function ProductCard({ product }: ProductCardProps) {
  const imgSrc = product.image || "/produtos/placeholder.png";
  const formattedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(product.price);

  return (
    // Adicionado "flex flex-col h-full" para que o card ocupe toda a altura da linha no grid
    <Card className="group flex flex-col h-full overflow-hidden border-stone-200 transition duration-300 hover:-translate-y-1 hover:shadow-2xl dark:border-stone-800">
      <div className="relative h-72 overflow-hidden bg-stone-100 transition duration-500 group-hover:scale-[1.02]">
        <Image
          src={imgSrc}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
          priority
        />
        <div className="absolute left-4 top-4">
          <Badge variant="secondary">{product.category}</Badge>
        </div>
      </div>

      {/* Adicionado "flex-1 flex flex-col" para expandir a área de texto e ocupar o espaço restante */}
      <CardHeader className="pt-5 flex-1 flex flex-col">
        <CardTitle>{product.name}</CardTitle>
        <CardDescription className="text-sm leading-6 text-stone-500 dark:text-stone-400 mt-2">
          {product.description}
        </CardDescription>
      </CardHeader>

      {/* Adicionado "mt-auto flex items-end justify-between" para fixar o rodapé na parte inferior de forma alinhada */}
      <CardFooter className="mt-auto flex items-end justify-between border-t border-stone-100 pt-4 dark:border-stone-800">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-stone-500 dark:text-stone-400">
            A partir de
          </p>
          <p className="text-lg font-semibold text-stone-900 dark:text-stone-100">
            {formattedPrice}
          </p>
        </div>
        <Button variant="secondary" size="sm">
          Comprar
        </Button>
      </CardFooter>
    </Card>
  );
}