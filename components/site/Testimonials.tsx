import { Quote } from "lucide-react";
import { Reveal } from "./Reveal";

const testimonials = [
  {
    quote:
      "Acompanhamento técnico em toda a reforma. Tudo documentado, organizado e dentro das normas.",
    author: "Nome do cliente",
    role: "Proprietário de imóvel",
  },
  {
    quote:
      "Excelente orientação no laudo e na regularização do condomínio. Claro do começo ao fim.",
    author: "Nome do cliente",
    role: "Síndico(a) de condomínio",
  },
  {
    quote:
      "Planejamento e supervisão fizeram toda a diferença na segurança e no controle da obra.",
    author: "Nome do cliente",
    role: "Gestor de obra",
  },
  {
    quote:
      "Equipe qualificada e pontual no fornecimento de mão de obra. Supervisão presente todos os dias.",
    author: "Nome do cliente",
    role: "Construtor / incorporador",
  },
  {
    quote:
      "A consultoria em segurança do trabalho trouxe mais tranquilidade para a nossa equipe e para a fiscalização.",
    author: "Nome do cliente",
    role: "Gerente de operações",
  },
  {
    quote:
      "Trabalho em altura executado com total respeito à NR-35 e com comunicação constante durante todo o serviço.",
    author: "Nome do cliente",
    role: "Administrador(a) predial",
  },
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="border-y border-border bg-secondary py-28 px-6">
      <div className="mx-auto max-w-7xl">
        <Reveal direction="fade">
          <div className="mb-3 flex items-center gap-3">
            <div className="h-px w-10 bg-primary" />
            <span className="font-display text-[10px] font-black uppercase tracking-[0.3em] text-primary">
              Depoimentos
            </span>
          </div>
        </Reveal>

        <Reveal direction="left">
          <h2 className="mb-16 font-display text-[clamp(2.6rem,6vw,4.5rem)] leading-none font-black text-foreground">
            QUEM JÁ
            <br />
            ACOMPANHAMOS
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <Reveal
              key={index}
              direction="up"
              delay={(index % 3) * 120}
              className="h-full"
            >
              <figure className="flex h-full flex-col border border-border bg-background p-8">
                <Quote size={24} className="mb-6 text-primary" fill="currentColor" />
                <blockquote className="mb-8 flex-1 text-sm leading-relaxed text-muted-foreground">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <figcaption className="border-t border-border pt-5">
                  <div className="font-display text-base font-bold text-foreground">
                    {item.author}
                  </div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">
                    {item.role}
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}