import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"

interface CardProdutoProps {
  id: string | number
  title: string
  description: string
  price: number
  imageSrc: string
  destaque?: boolean
}

export default function CardProduto({
  title,
  description,
  price,
  imageSrc,
  destaque,
}: CardProdutoProps) {
  const imgSrc = imageSrc || "/produtos/placeholder.png"
  const formattedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price)

  return (
    <Card className="group flex flex-col h-full overflow-hidden border-stone-200 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-lg dark:border-stone-800 dark:shadow-stone-900/20">
      <div className="relative h-80 overflow-hidden bg-stone-100 transition duration-500 group-hover:scale-[1.03]">
        <Image
          src={imgSrc}
          alt={title}
          fill
          className="object-cover transition duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
        <div className="absolute left-4 top-4">
          {destaque ? (
            <Badge variant="secondary" className="shadow-md">Promoção</Badge>
          ) : (
            <Badge variant="secondary" className="shadow-md">Promoção</Badge>
          )}
        </div>
      </div>

      <CardHeader className="flex-1 flex flex-col gap-3 pb-3">
        <CardTitle className="text-base font-semibold tracking-tight leading-snug">{title}</CardTitle>
        <CardDescription className="text-xs leading-5 text-stone-500 dark:text-stone-400">
          {description}
        </CardDescription>
      </CardHeader>

      <CardFooter className="flex items-end justify-between border-t border-stone-100 pt-3 dark:border-stone-800">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-stone-500 dark:text-stone-400 font-medium">
            A partir de
          </p>
          <p className="text-base font-bold text-stone-900 dark:text-stone-100 mt-0.5">
            {formattedPrice}
          </p>
        </div>
        <Button variant="secondary" size="sm" className="transition duration-300 hover:scale-105">
          Comprar
        </Button>
      </CardFooter>
    </Card>
  )
}
