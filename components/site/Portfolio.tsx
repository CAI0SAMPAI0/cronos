import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { images } from "@/lib/images";
import { Reveal } from "./Reveal";

const projects = [
  { src: images.building, title: "Reforma e Acabamento", tag: "Reforma" },
  { src: images.interior, title: "Interiores e Projetos", tag: "Arquitetura" },
  { src: images.facade, title: "Trabalho em Altura", tag: "Fachada" },
  { src: images.facade2, title: "Recuperação de Fachada", tag: "Manutenção" },
  { src: images.buildingSite, title: "Acompanhamento de Obra", tag: "Gerenciamento" },
  { src: images.hero, title: "Consultoria Predial", tag: "Consultoria" },
];

export function Portfolio() {
  return (
    <section id="obras" className="py-28 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-3 flex items-center gap-3">
          <div className="h-px w-10 bg-primary" />
          <span className="font-display text-[10px] font-black uppercase tracking-[0.3em] text-primary">
            Obras e projetos
          </span>
        </div>

        <div className="mb-12 grid grid-cols-1 items-end gap-6 md:grid-cols-2">
          <Reveal direction="left">
            <h2 className="font-display text-[clamp(2.8rem,6vw,4.5rem)] leading-none font-black text-foreground">
              OUVIDO A PÉ DE
              <br />
              OBRA, DO PROJETO
              <br />
              À EXECUÇÃO
            </h2>
          </Reveal>
          <Reveal direction="right" delay={120}>
            <p className="max-w-sm self-end pb-1 text-base leading-relaxed text-muted-foreground">
              Da inspeção técnica ao acompanhamento da execução — exemplos de
              frente em que atuamos com planejamento e controle.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.title} direction="up" delay={(index % 3) * 80}>
              <div className="group relative h-64 overflow-hidden">
                <Image
                  src={project.src}
                  alt={project.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent" />
                <div className="absolute top-4 left-4 bg-primary px-2.5 py-1 font-display text-[10px] font-black uppercase tracking-widest text-primary-foreground">
                  {project.tag}
                </div>
                <div className="absolute right-4 bottom-4 left-4 flex items-center justify-between">
                  <h3 className="font-display text-lg leading-tight font-bold text-foreground">
                    {project.title}
                  </h3>
                  <ArrowUpRight size={16} className="text-primary" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}