import { MessageCircle, Users2 } from "lucide-react";
import { whatsappLink } from "@/lib/site";
import { Reveal } from "./Reveal";

const laborItems = [
  "Seleção e contratação de profissionais",
  "Organização das equipes para cada demanda",
  "Acompanhamento das atividades no dia a dia",
  "Supervisão técnica e operacional",
  "Supervisão de Segurança do Trabalho",
];

export function LaborSupply() {
  return (
    <section id="maodeobra" className="bg-secondary py-28 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <Reveal direction="left">
            <div>
              <div className="mb-8 flex items-center gap-3">
                <div className="h-px w-10 bg-primary" />
                <span className="font-display text-[10px] font-black uppercase tracking-[0.3em] text-primary">
                  Mão de obra
                </span>
              </div>
              <h2 className="mb-8 font-display text-[clamp(2.8rem,6vw,4.5rem)] leading-none font-black text-foreground">
                FORNECIMENTO E
                <br />
                GESTÃO DE
                <br />
                MÃO DE OBRA
              </h2>
              <p className="mb-8 max-w-md text-base leading-relaxed text-muted-foreground">
                Fornecemos profissionais e equipes para apoio a obras, manutenção
                predial e serviços especializados — com seleção, organização e
                supervisão técnica, para você ter controle sobre qualidade,
                segurança, produtividade e organização dos serviços.
              </p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex cursor-pointer items-center gap-2 bg-primary px-6 py-3 font-display text-xs font-black uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary/85"
              >
                <MessageCircle size={14} />
                CONTRATAR EQUIPE
              </a>
            </div>
          </Reveal>

          <Reveal direction="right" delay={100}>
            <div className="border border-border bg-background p-8 lg:p-10">
              <div className="mb-8 flex items-center gap-3">
                <Users2 size={20} className="text-primary" />
                <span className="font-display text-sm font-black uppercase tracking-[0.2em] text-foreground">
                  O que está incluso
                </span>
              </div>
              <ul className="space-y-5">
                {laborItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span className="text-sm leading-snug text-muted-foreground">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 border-t border-border pt-6 text-sm leading-relaxed text-muted-foreground">
                Modelo flexível: desde profissionais para atividades específicas até
                equipes completas com supervisão de segurança integrada.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}