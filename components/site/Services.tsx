"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { serviceCategories } from "@/lib/services";
import { whatsappLink } from "@/lib/site";
import { Reveal } from "./Reveal";

export function Services() {
  const [activeId, setActiveId] = useState<
    (typeof serviceCategories)[number]["id"]
  >(serviceCategories[0].id);
  const activeCategory =
    serviceCategories.find((category) => category.id === activeId) ??
    serviceCategories[0];

  return (
    <section id="servicos" className="py-28 px-6">
      <div className="mx-auto max-w-7xl">
        <Reveal direction="fade">
          <div className="mb-3 flex items-center gap-3">
            <div className="h-px w-10 bg-primary" />
            <span className="font-display text-[10px] font-black uppercase tracking-[0.3em] text-primary">
              O que fazemos
            </span>
          </div>
        </Reveal>

        <div className="mb-4 grid grid-cols-1 gap-6 md:grid-cols-2">
          <Reveal direction="left">
            <h2 className="font-display text-[clamp(3rem,7vw,5rem)] leading-none font-black text-foreground">
              NOSSOS
              <br />
              SERVIÇOS
            </h2>
          </Reveal>
          <Reveal direction="right" delay={120}>
            <p className="max-w-sm self-end pb-1 text-base leading-relaxed text-muted-foreground">
              Atuamos em todas as etapas — do planejamento inicial ao acompanhamento
              da execução — com foco em segurança, eficiência e conformidade técnica.
            </p>
          </Reveal>
        </div>

        <div className="mb-12 h-px w-full bg-border" />

        <Reveal direction="up">
          <div
            role="tablist"
            aria-label="Categorias de serviços"
            className="mb-10 flex flex-wrap gap-x-8 gap-y-2 border-b border-border"
          >
            {serviceCategories.map((category) => {
              const isActive = category.id === activeId;
              return (
                <button
                  key={category.id}
                  type="button"
                  role="tab"
                  id={`tab-${category.id}`}
                  aria-selected={isActive}
                  aria-controls={`panel-${category.id}`}
                  onClick={() => setActiveId(category.id)}
                  className={`-mb-px cursor-pointer border-b-2 pb-4 font-display text-xs font-black uppercase tracking-[0.15em] transition-colors duration-150 ${
                    isActive
                      ? "border-primary text-primary"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {category.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        <div
          key={activeCategory.id}
          role="tabpanel"
          id={`panel-${activeCategory.id}`}
          aria-labelledby={`tab-${activeCategory.id}`}
          className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2 lg:grid-cols-3"
        >
          {activeCategory.services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} direction="up" delay={(index % 3) * 80}>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col bg-background p-7 transition-colors duration-200 hover:bg-card"
                >
                  <div className="mb-6 flex items-start justify-between">
                    <Icon size={20} className="text-primary" strokeWidth={1.75} />
                    <span className="font-mono text-[10px] tabular-nums text-muted-foreground/35">
                      {String(
                        serviceCategories
                          .slice(0, serviceCategories.indexOf(activeCategory))
                          .reduce((acc, cat) => acc + cat.services.length, 0) +
                          index +
                          1
                      ).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mb-3 font-display text-base leading-snug font-bold text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {service.desc}
                  </p>
                  <div className="mt-5 flex items-center gap-1.5 font-display text-[10px] font-black uppercase tracking-widest text-primary opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    SAIBA MAIS <ArrowUpRight size={11} />
                  </div>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}