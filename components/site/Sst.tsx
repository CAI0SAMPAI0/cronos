import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

const sstItems = [
  {
    title: "Avaliação de Riscos",
    desc: "Identificação e controle de riscos ocupacionais em obras e ambientes industriais.",
  },
  {
    title: "Inspeções de Segurança",
    desc: "Auditorias técnicas para conformidade com Normas Regulamentadoras.",
  },
  {
    title: "Supervisão Técnica",
    desc: "Acompanhamento periódico com orientação e suporte operacional às equipes.",
  },
  {
    title: "PGR e PCMSO",
    desc: "Elaboração de documentos de SST exigidos pela legislação vigente.",
  },
  {
    title: "Espaços Confinados (NR-33)",
    desc: "Planejamento e acompanhamento técnico de operações em espaços confinados.",
  },
  {
    title: "Fornecimento de Mão de Obra",
    desc: "Equipes técnicas com supervisão de segurança integrada à demanda.",
  },
];

export function Sst() {
  return (
    <section id="sst" className="border-y border-border bg-card py-28">
      <div className="mx-auto max-w-7xl px-8">
        <div className="mb-8 flex items-center gap-3">
          <div className="h-px w-10 bg-primary" />
          <span className="font-display text-[10px] font-black uppercase tracking-[0.3em] text-primary">
            SST
          </span>
        </div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
          <Reveal direction="left" className="lg:col-span-1">
            <div>
              <h2 className="font-display text-[clamp(3rem,5vw,4rem)] leading-none font-black text-foreground">
                SAÚDE E
                <br />
                SEGURANÇA
                <br />
                DO
                <br />
                TRABALHO
              </h2>
              <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted-foreground">
                Consultoria e acompanhamento em SST para empresas e obras — identificação
                e controle de riscos ocupacionais com atendimento às Normas
                Regulamentadoras, reunindo{" "}
                <strong className="text-foreground">parceiros especializados</strong>{" "}
                quando a demanda exige outras competências.
              </p>
              <a
                href="#contato"
                className="mt-8 inline-flex cursor-pointer items-center gap-2 bg-primary px-6 py-3 font-display text-xs font-black uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary/85"
              >
                CONSULTAR <ArrowRight size={13} />
              </a>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-2">
            {sstItems.map((item, index) => (
              <Reveal key={item.title} direction="up" delay={(index % 2) * 100}>
                <div className="border-l-2 border-primary/25 py-1 pl-5 transition-colors duration-200 hover:border-primary">
                  <h4 className="mb-2 font-display text-sm font-bold text-foreground">
                    {item.title}
                  </h4>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}