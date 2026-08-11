import { Reveal } from "./Reveal";

const values = [
  {
    label: "Clareza para decidir",
    desc: "Análises claras e orientações técnicas para que o cliente tome as melhores decisões.",
  },
  {
    label: "Controle para acompanhar",
    desc: "Supervisão ativa das etapas, coordenando profissionais e fornecedores com rigor.",
  },
  {
    label: "Segurança para executar",
    desc: "Conformidade com normas técnicas e legais em cada etapa do projeto ou obra.",
  },
];

export function About() {
  return (
    <section className="border-y border-border bg-secondary py-28">
      <div className="mx-auto max-w-7xl px-8">
        <div className="grid grid-cols-1 items-start gap-20 lg:grid-cols-2">
          <Reveal direction="left">
            <div>
              <div className="mb-8 flex items-center gap-3">
                <div className="h-px w-10 bg-primary" />
                <span className="font-display text-[10px] font-black uppercase tracking-[0.3em] text-primary">
                  Nossa abordagem
                </span>
              </div>
              <blockquote className="mb-10 font-display text-[clamp(1.8rem,4vw,3rem)] leading-tight font-black text-foreground">
                &quot;UMA OBRA BEM CONDUZIDA COMEÇA ANTES DA PRIMEIRA FERRAMENTA
                ENTRAR EM AÇÃO.&quot;
              </blockquote>
              <div className="mb-10 h-px w-full bg-border" />
              <p className="mb-5 text-base leading-relaxed text-muted-foreground">
                Por isso, nosso trabalho busca{" "}
                <strong className="font-semibold text-foreground">antecipar problemas</strong>,
                organizar as etapas, avaliar soluções, comparar propostas e orientar o
                cliente nas decisões técnicas e financeiras.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                Quando necessário, contamos com uma{" "}
                <strong className="font-semibold text-foreground">
                  rede de profissionais e empresas especializadas
                </strong>
                , reunindo diferentes competências sem perder o controle técnico e a
                coordenação do serviço.
              </p>
            </div>
          </Reveal>

          <div className="flex flex-col gap-4">
            {values.map((item, index) => (
              <Reveal key={item.label} direction="right" delay={index * 120}>
                <div className="flex gap-4 border border-border bg-background p-6 transition-colors duration-200 hover:border-primary/40">
                  <div className="w-1 shrink-0 bg-primary" />
                  <div>
                    <h4 className="mb-2 font-display text-lg font-bold text-foreground">
                      {item.label}
                    </h4>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}