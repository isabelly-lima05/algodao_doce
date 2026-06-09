"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const imagensBanner = [
  "/carrosel/1.png",
  "/carrosel/2.png",
  "/carrosel/3.png",
  "/carrosel/4.png",
  "/carrosel/5.png",
  "/carrosel/6.png",
  "/carrosel/7.png",
];

export function Carrosel() {
  // Instância estável do plugin Autoplay (3s)
  const autoplay = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  return (
    <section className="mx-auto max-w-6xl px-4">
      <Carousel
        opts={{ loop: true }}
        plugins={[autoplay.current]}
        onMouseEnter={() => autoplay.current?.stop()}
        onMouseLeave={() => autoplay.current?.play()}
        className="relative w-full overflow-hidden rounded-[2rem] border border-stone-100 bg-stone-50/40 p-1 dark:border-stone-900 dark:bg-stone-950/40"
      >
        <CarouselContent className="flex">
          {imagensBanner.map((src, index) => (
            <CarouselItem key={index}>
              <div className="relative flex h-[220px] w-full items-center justify-center overflow-hidden rounded-[1.75rem] bg-stone-50 sm:h-[380px] md:h-[460px] lg:h-[500px] dark:bg-stone-950">
                <Image
                  src={src}
                  alt={`Banner de coleção infantil ${index + 1}`}
                  fill
                  priority={index === 0}
                  className="object-contain transition-transform duration-500 hover:scale-[1.01]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 border-none bg-white/90 text-stone-700 backdrop-blur-md transition-all hover:bg-white dark:bg-stone-900/90 dark:text-stone-300" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 border-none bg-white/90 text-stone-700 backdrop-blur-md transition-all hover:bg-white dark:bg-stone-900/90 dark:text-stone-300" />
      </Carousel>
    </section>
  );
}