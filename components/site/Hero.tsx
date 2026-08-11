import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { images } from "@/lib/images";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-screen items-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <Image
          src={images.hero}
          alt="Edificação moderna"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/88 to-background/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30 opacity-80" />
      </div>

      <div className="pointer-events-none absolute top-0 bottom-0 left-0 z-10 w-1 bg-primary" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-8 pt-28 pb-20 lg:grid-cols-5 lg:px-14">
        <div className="lg:col-span-3">
          <Reveal direction="fade">
            <div className="mb-8 flex items-center gap-3">
              <div className="h-px w-10 bg-primary" />
              <span className="font-display text-[10px] font-black uppercase tracking-[0.3em] text-primary">
                Engenharia · Arquitetura · Consultoria
              </span>
            </div>
          </Reveal>

          <Reveal direction="up" delay={100}>
            <h1 className="mb-8 font-display text-[clamp(4rem,10vw,7rem)] font-black leading-[0.88] text-foreground">
              CONSTRUA
              <br />
              <span className="text-primary">COM</span>
              <br />
              SEGURANÇA.
            </h1>
          </Reveal>

          <Reveal direction="up" delay={200}>
            <p className="mb-10 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Da consultoria ao acompanhamento da execução — a Cronos transforma
              necessidades em soluções tecnicamente sólidas para obras, reformas,
              condomínios e empresas.
            </p>
          </Reveal>

          <Reveal direction="up" delay={300}>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#contato"
                className="flex cursor-pointer items-center justify-center gap-2 bg-primary px-8 py-4 font-display text-sm font-black uppercase tracking-[0.12em] text-primary-foreground transition-colors duration-150 hover:bg-primary/85"
              >
                FALAR COM UM ESPECIALISTA
                <ArrowRight size={15} />
              </a>
              <a
                href="#servicos"
                className="flex cursor-pointer items-center justify-center gap-2 border border-foreground/20 px-8 py-4 font-display text-sm font-black uppercase tracking-[0.12em] text-foreground transition-colors duration-150 hover:border-primary hover:text-primary"
              >
                VER SERVIÇOS
              </a>
            </div>
          </Reveal>
        </div>

        <div className="hidden justify-end lg:col-span-2 lg:flex">
          <Reveal direction="right" delay={150}>
            <div className="relative">
              <div className="absolute -top-5 -left-5 h-full w-full border border-primary/25" />
              <div className="relative z-10 h-[380px] w-64">
                <Image
                  src={images.building}
                  alt="Obra em construção"
                  fill
                  sizes="256px"
                  className="object-cover"
                />
              </div>
              <Reveal direction="scale" delay={400}>
                <div className="absolute -right-5 -bottom-5 z-20 bg-primary px-5 py-4">
                  <div className="font-display text-4xl leading-none font-black text-primary-foreground">
                    15+
                  </div>
                  <div className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-primary-foreground/75">
                    Anos de Experiência
                  </div>
                </div>
              </Reveal>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}