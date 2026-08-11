import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

const steps = [
  {
    number: "01",
    title: "Levantamento de Necessidades",
    desc: "Entendemos o escopo, os objetivos e as condições da sua demanda, com proximidade técnica.",
  },
  {
    number: "02",
    title: "Análise Técnica e Orçamento",
    desc: "Levantamentos, análises técnicas, comparação de propostas e orçamentos para decisões claras.",
  },
  {
    number: "03",
    title: "Planejamento e Projeto",
    desc: "Organização das etapas, definição de soluções e preparo da documentação necessária.",
  },
  {
    number: "04",
    title: "Acompanhamento da Execução",
    desc: "Supervisão técnica, coordenação de profissionais e fornecedores e controle do serviço.",
  },
];

export function HowItWorks() {
  return (
    <section id="processo" className="border-y border-border bg-secondary py-28 px-6">
      <div className="mx-auto max-w-7xl">
        <Reveal direction="fade">
          <div className="mb-3 flex items-center gap-3">
            <div className="h-px w-10 bg-primary" />
            <span className="font-display text-[10px] font-black uppercase tracking-[0.3em] text-primary">
              Como funciona
            </span>
          </div>
        </Reveal>

        <Reveal direction="left">
          <h2 className="mb-16 font-display text-[clamp(2.6rem,6vw,4.5rem)] leading-none font-black text-foreground">
            DO PLANEJAMENTO
            <br />
            À ENTREGA
          </h2>
        </Reveal>

        <ol className="grid grid-cols-1 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Reveal key={step.number} direction="up" delay={index * 120}>
              <li className="relative border-t-2 border-border pt-8 lg:border-t-0 lg:border-l-2 lg:pl-8 lg:pt-0">
                <div className="mb-5 font-display text-5xl leading-none font-black text-primary/40">
                  {step.number}
                </div>
                <h3 className="mb-3 font-display text-xl font-bold text-foreground">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {step.desc}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>

        <Reveal direction="up" delay={200}>
          <div className="mt-16 flex justify-center">
            <a
              href="#contato"
              className="flex cursor-pointer items-center gap-2 bg-primary px-8 py-4 font-display text-sm font-black uppercase tracking-[0.12em] text-primary-foreground transition-colors duration-150 hover:bg-primary/85"
            >
              SOLICITAR ORÇAMENTO <ArrowRight size={15} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}