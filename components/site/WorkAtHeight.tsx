import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { images } from "@/lib/images";
import { Reveal } from "./Reveal";

const heightServices = [
  "Prospecção e inspeção de fachadas",
  "Teste de percussão e avaliação de revestimentos",
  "Recuperação e manutenção de fachadas",
  "Instalação de olhais e dispositivos de ancoragem",
  "Linhas de vida e proteção contra quedas",
  "Coordenação de trabalhos em altura",
  "Acesso por técnicas de corda",
  "Planejamento e acompanhamento técnico",
  "Supervisão de segurança em altura",
  "Elaboração de plano de emergência e resgate",
  "Avaliação e liberação de ancoragem estrutural",
  "Inspeção e manutenção de sistema de guarda-corpos",
  "Vistoria de coberturas, telhados e calhas",
];

export function WorkAtHeight() {
  return (
    <section id="altura" className="overflow-hidden py-28 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-start gap-20 lg:grid-cols-2">
          <Reveal direction="left">
            <div>
              <div className="mb-8 flex items-center gap-3">
                <div className="h-px w-10 bg-primary" />
                <span className="font-display text-[10px] font-black uppercase tracking-[0.3em] text-primary">
                  Especialidade
                </span>
              </div>
              <h2 className="mb-8 font-display text-[clamp(2.8rem,6vw,4.5rem)] leading-none font-black text-foreground">
                TRABALHO
                <br />
                EM ALTURA E
                <br />
                RECUPERAÇÃO
                <br />
                DE FACHADAS
              </h2>
              <p className="mb-10 max-w-md text-base leading-relaxed text-muted-foreground">
                Planejamento, inspeção e acompanhamento técnico de serviços em altura
                — incluindo recuperação de fachadas e implantação de sistemas de
                proteção contra quedas e ancoragem.
              </p>

              <div className="grid grid-cols-1 gap-x-8 sm:grid-cols-2">
                {heightServices.map((item) => (
                  <Reveal key={item} direction="up" delay={item.length * 3}>
                    <div className="flex items-start gap-3 border-t border-border py-3">
                      <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span className="text-sm leading-snug text-muted-foreground">
                        {item}
                      </span>
                    </div>
                  </Reveal>
                ))}
              </div>

              <Reveal direction="up" delay={200}>
                <div className="mt-10 flex items-center gap-4 border border-primary/30 bg-card p-5">
                  <CheckCircle size={18} className="shrink-0 text-primary" />
                  <p className="text-sm leading-snug text-muted-foreground">
                    Todos os serviços em altura seguem rigorosamente a{" "}
                    <strong className="text-foreground">NR-35</strong> e demais normas
                    regulamentadoras aplicáveis.
                  </p>
                </div>
              </Reveal>
            </div>
          </Reveal>

          <Reveal direction="right" delay={100}>
            <div className="relative mt-10 lg:mt-20">
              <div className="absolute -top-6 -left-6 h-full w-full border border-primary/20" />
              <div className="relative z-10 h-140 w-full">
                <Image
                  src={images.facade}
                  alt="Profissional em trabalho de fachada em altura"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover object-top"
                />
              </div>
              <div className="absolute right-0 bottom-0 left-0 z-20 p-6">
                <div className="border border-border bg-background/92 p-5 backdrop-blur-sm">
                  <div className="relative mb-4 h-28">
                    <Image
                      src={images.facade2}
                      alt="Fachada de edificação"
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="mb-1 font-display text-xl font-black text-primary">
                    INSPEÇÃO E RECUPERAÇÃO DE FACHADAS
                  </div>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    Identificação de desplacamentos, fissuras, trincas e falhas de
                    revestimento com plano de intervenção.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}