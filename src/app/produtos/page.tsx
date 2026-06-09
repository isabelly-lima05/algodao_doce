import { ProductsCollection } from "@/components/products-collection";
import produtos from "../../../produtos.json";

const categoryDescriptions: Record<string, string> = {
  Inverno: "Peças quentinhas e com acabamento de qualidade para os dias frios.",
  Outono: "Tons terrosos e camadas leves para a temporada de transição.",
  "Verão": "Modelos leves e frescos para aproveitar o calor com estilo.",
  Primavera: "Estampas florais e tons suaves para um visual delicado.",
  Tematico: "Peças criativas para datas especiais e ocasiões divertidas.",
};

const grouped = produtos.reduce((acc: Record<string, any>, p: any) => {
  if (!acc[p.category]) {
    acc[p.category] = { title: p.category, description: categoryDescriptions[p.category] || "", products: [] };
  }
  acc[p.category].products.push({
    id: p.id,
    name: p.name,
    category: p.category,
    price: p.price,
    description: p.description,
    image: p.image,
  });
  return acc;
}, {} as Record<string, any>);

const collections = Object.values(grouped);

export default function Produtos() {
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
            Acompanhamos o crescimento do seu bebê em todas as estações do ano. Nossa curadoria reúne peças que unem a leveza do verão, o aconchego do inverno e o encanto de momentos especiais em coleções feitas para garantir conforto e liberdade de movimento.
          </p>
        </div>

        {collections.map((collection) => (
          <ProductsCollection key={collection.title} collection={collection} />
        ))}
      </div>
    </main>
  );
}