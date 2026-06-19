"use client";

import { useEffect, useState } from "react";

const stats = [
  { label: "Clientes felizes", value: 9800, suffix: "+" },
  { label: "Produtos disponíveis", value: 145, suffix: "+" },
  { label: "Avaliação média", value: 5.0, suffix: "" },
  { label: "Países atendidos", value: 12, suffix: "+" },
];

export default function Sobre() {
  const [counts, setCounts] = useState(() => stats.map((item) => (item.label === "Avaliação média" ? 0 : 0)));
  const [rating, setRating] = useState(0);

  useEffect(() => {
    const targetCounts = stats.map((item) => item.value);
    const intervals: number[] = [];

    stats.forEach((item, index) => {
      if (item.label === "Avaliação média") {
        const step = 0.1;
        const intervalId = window.setInterval(() => {
          setRating((previous) => {
            const next = Number((previous + step).toFixed(1));
            if (next >= item.value) {
              window.clearInterval(intervalId);
              return item.value;
            }
            return next;
          });
        }, 60);
        intervals.push(intervalId);
      } else {
        const increment = Math.ceil(item.value / 80);
        const intervalId = window.setInterval(() => {
          setCounts((previous) => {
            const nextValue = previous[index] + increment;
            if (nextValue >= targetCounts[index]) {
              const updated = [...previous];
              updated[index] = targetCounts[index];
              window.clearInterval(intervalId);
              return updated;
            }
            const updated = [...previous];
            updated[index] = nextValue;
            return updated;
          });
        }, 35);
        intervals.push(intervalId);
      }
    });

    return () => intervals.forEach((id) => window.clearInterval(id));
  }, []);

  return (
    <main className="min-h-screen bg-[#faf9f6] text-stone-900 dark:bg-[#0f0e0c] dark:text-stone-100">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="mb-12 space-y-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-rose-500">
            Sobre a Algodão Doce
          </p>
          <h1 className="text-4xl font-light tracking-tight sm:text-5xl">
            Um toque de carinho que acompanha cada nova família
          </h1>
          <p className="mx-auto max-w-2xl text-sm leading-7 text-stone-500 dark:text-stone-400">
            Fundada para vestir bebês com suavidade, nossa marca une design atemporal, tecidos naturais e uma jornada de cuidado que começou com a visão de Isabelly Ferreira de Lima.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.9fr]">
          <section className="space-y-10 rounded-3xl bg-white p-8 shadow-lg dark:bg-stone-950 dark:border dark:border-stone-800">
            <div className="space-y-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-rose-500">
                  Nossa história
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 dark:text-stone-100">
                  A jornada da fundadora
                </h2>
                <p className="mt-4 text-sm leading-7 text-stone-600 dark:text-stone-300">
                  Isabelly Ferreira de Lima começou a Algodão Doce com o sonho de criar roupas que abraçassem o bebê com suavidade e durassem como memórias carinhosas. Hoje, oferecemos conforto e estilo em cada coleção.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-stone-200 bg-stone-50 p-6 dark:border-stone-800 dark:bg-stone-900">
                  <p className="text-sm uppercase tracking-[0.2em] text-rose-500">Fundadora</p>
                  <p className="mt-4 text-xl font-semibold text-stone-900 dark:text-stone-100">
                    Isabelly Ferreira de Lima
                  </p>
                  <p className="mt-2 text-sm leading-6 text-stone-600 dark:text-stone-400">
                    Empreendedora dedicada que transformou inspiração em uma marca de roupas infantis para famílias que buscam qualidade e delicadeza.
                  </p>
                </div>
                <div className="rounded-3xl border border-stone-200 bg-stone-50 p-6 dark:border-stone-800 dark:bg-stone-900">
                  <p className="text-sm uppercase tracking-[0.2em] text-rose-500">Valores</p>
                  <ul className="mt-4 space-y-2 text-sm leading-6 text-stone-600 dark:text-stone-400">
                    <li>• Conforto e qualidade</li>
                    <li>• Materiais naturais</li>
                    <li>• Atenção aos detalhes</li>
                    <li>• Atendimento humano</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-stone-50 p-8 dark:bg-stone-900">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-rose-500">
                Trajetória em linha do tempo
              </p>
              <div className="mt-8 space-y-6">
                <div className="flex gap-4">
                  <div className="mt-1 h-3 w-3 rounded-full bg-rose-500" />
                  <div>
                    <p className="font-semibold text-stone-900 dark:text-stone-100">2018</p>
                    <p className="text-sm leading-6 text-stone-600 dark:text-stone-400">
                      A primeira coleção foi criada a partir do desejo de vestir bebês com peças suaves e funcionais.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 h-3 w-3 rounded-full bg-rose-500" />
                  <div>
                    <p className="font-semibold text-stone-900 dark:text-stone-100">2020</p>
                    <p className="text-sm leading-6 text-stone-600 dark:text-stone-400">
                      A marca cresceu e lançou coleções para todas as estações do ano, com foco em tecidos naturais e acabamento impecável.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 h-3 w-3 rounded-full bg-rose-500" />
                  <div>
                    <p className="font-semibold text-stone-900 dark:text-stone-100">2022</p>
                    <p className="text-sm leading-6 text-stone-600 dark:text-stone-400">
                      O e-commerce foi lançado para levar a Algodão Doce a famílias em diferentes regiões do país.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 h-3 w-3 rounded-full bg-rose-500" />
                  <div>
                    <p className="font-semibold text-stone-900 dark:text-stone-100">2024</p>
                    <p className="text-sm leading-6 text-stone-600 dark:text-stone-400">
                      A loja passou a atender clientes em vários países, mantendo o cuidado artesanal em cada peça.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-3xl bg-white p-8 shadow-lg dark:bg-stone-950 dark:border dark:border-stone-800">
            <div className="space-y-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-rose-500">
                  Por que escolher a Algodão Doce
                </p>
                <p className="mt-4 text-sm leading-7 text-stone-600 dark:text-stone-400">
                  Unimos tradição, design e propósito para criar uma experiência de compra acolhedora. Cada peça é pensada para oferecer suavidade e durabilidade desde os primeiros dias.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-stone-200 bg-stone-50 p-6 dark:border-stone-800 dark:bg-stone-900">
                  <p className="text-sm uppercase tracking-[0.18em] text-stone-500">Missão</p>
                  <p className="mt-3 text-sm leading-6 text-stone-600 dark:text-stone-400">
                    Criar roupas de bebê que unem conforto, estilo e um atendimento caloroso para toda a família.
                  </p>
                </div>
                <div className="rounded-3xl border border-stone-200 bg-stone-50 p-6 dark:border-stone-800 dark:bg-stone-900">
                  <p className="text-sm uppercase tracking-[0.18em] text-stone-500">Visão</p>
                  <p className="mt-3 text-sm leading-6 text-stone-600 dark:text-stone-400">
                    Ser referência em moda infantil responsável, com coleções que acompanham o crescimento dos bebês.
                  </p>
                </div>
                <div className="rounded-3xl border border-stone-200 bg-stone-50 p-6 dark:border-stone-800 dark:bg-stone-900">
                  <p className="text-sm uppercase tracking-[0.18em] text-stone-500">Cuidado</p>
                  <p className="mt-3 text-sm leading-6 text-stone-600 dark:text-stone-400">
                    Nosso processo é pensado para garantir produtos delicados, seguros e com acabamento caprichado.
                  </p>
                </div>
                <div className="rounded-3xl border border-stone-200 bg-stone-50 p-6 dark:border-stone-800 dark:bg-stone-900">
                  <p className="text-sm uppercase tracking-[0.18em] text-stone-500">Sustentabilidade</p>
                  <p className="mt-3 text-sm leading-6 text-stone-600 dark:text-stone-400">
                    Trabalhamos com materiais selecionados para reduzir o impacto ambiental e valorizar o bem-estar.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 rounded-3xl bg-stone-100 p-8 dark:bg-stone-900">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-rose-500">
                Nossos resultados
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {stats.map((item, index) => (
                  <div key={item.label} className="rounded-3xl border border-stone-200 bg-white p-6 text-center shadow-sm dark:border-stone-800 dark:bg-stone-950">
                    <p className="text-3xl font-semibold text-stone-900 dark:text-stone-100">
                      {item.label === "Avaliação média" ? rating.toFixed(1) : counts[index].toLocaleString()}
                      {item.suffix}
                    </p>
                    <p className="mt-3 text-sm uppercase tracking-[0.18em] text-stone-500">
                      {item.label}
                    </p>
                    {item.label === "Avaliação média" ? (
                      <p className="mt-2 text-amber-500">★★★★★</p>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
