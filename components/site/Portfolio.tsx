import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { images } from "@/lib/images";
import { Reveal } from "./Reveal";

interface Project {
  src: string;
  title: string;
  subtitle: string;
  tag: string;
}

const projects: Project[] = [
  {
    src: images.senado,
    title: "Centro Empresarial Senado (EDISEN)",
    subtitle: "Petrobras · Rio de Janeiro",
    tag: "Corporativo",
  },
  {
    src: images.nissan,
    title: "Nissan Motors do Brasil",
    subtitle: "Complexo Industrial de Resende · RJ",
    tag: "Industrial",
  },
  {
    src: images.michelin,
    title: "Michelin Campo Grande",
    subtitle: "Complexo Fabril · Rio de Janeiro",
    tag: "Industrial",
  },
  {
    src: images.facade2,
    title: "Recuperação de Fachadas",
    subtitle: "Condomínio Edifício Bernini e outros",
    tag: "Fachada",
  },
  {
    src: images.senadoAtrio,
    title: "Estruturas de Grande Porte",
    subtitle: "Acompanhamento Técnico Especializado",
    tag: "Engenharia",
  },
  {
    src: images.interior,
    title: "Laudos, Vistorias & Reformas",
    subtitle: "Consultoria Residencial e Corporativa",
    tag: "Consultoria",
  },
];

export function Portfolio() {
  return (
    <section id="obras" className="py-28 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-3 flex items-center gap-3">
          <div className="h-px w-10 bg-primary" />
          <span className="font-display text-[10px] font-black uppercase tracking-[0.3em] text-primary">
            Histórico de Obras e Projetos
          </span>
        </div>

        <div className="mb-12 grid grid-cols-1 items-end gap-6 md:grid-cols-2">
          <Reveal direction="left">
            <h2 className="font-display text-[clamp(2.8rem,6vw,4.5rem)] leading-none font-black text-foreground">
              GRANDES
              <br />
              OBRAS, RIGOR
              <br />
              TÉCNICO & GESTÃO
            </h2>
          </Reveal>
          <Reveal direction="right" delay={120}>
            <p className="max-w-sm self-end pb-1 text-base leading-relaxed text-muted-foreground">
              Experiência consolidada em grandes complexos corporativos e industriais,
              além de condomínios, laudos periciais e reformas prediais com controle total.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.title} direction="up" delay={(index % 3) * 80}>
              <div className="group relative h-72 overflow-hidden border border-border/80 bg-card">
                <Image
                  src={project.src}
                  alt={project.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/25 to-transparent" />
                <div className="absolute top-4 left-4 bg-primary px-2.5 py-1 font-display text-[10px] font-black uppercase tracking-widest text-primary-foreground">
                  {project.tag}
                </div>
                <div className="absolute right-4 bottom-4 left-4 flex items-end justify-between">
                  <div className="pr-3">
                    <h3 className="font-display text-lg leading-tight font-bold text-foreground">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-xs text-muted-foreground font-medium">
                      {project.subtitle}
                    </p>
                  </div>
                  <ArrowUpRight size={18} className="shrink-0 text-primary transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}