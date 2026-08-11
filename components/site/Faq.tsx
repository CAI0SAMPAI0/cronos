import { faqs } from "@/lib/faq";
import { Reveal } from "./Reveal";

export function Faq() {
  return (
    <section id="faq" className="py-28 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <Reveal direction="left" className="lg:col-span-1">
            <div>
              <div className="mb-8 flex items-center gap-3">
                <div className="h-px w-10 bg-primary" />
                <span className="font-display text-[10px] font-black uppercase tracking-[0.3em] text-primary">
                  FAQ
                </span>
              </div>
              <h2 className="mb-6 font-display text-[clamp(2.8rem,5vw,4rem)] leading-none font-black text-foreground">
                PERGUNTAS
                <br />
                FREQUENTES
              </h2>
              <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
                Dúvidas comuns sobre laudos, segurança contra incêndio, trabalhos em
                altura e nosso modelo de atendimento.
              </p>
            </div>
          </Reveal>

          <div className="space-y-3 lg:col-span-2">
            {faqs.map((item, index) => (
              <Reveal key={item.question} direction="up" delay={(index % 3) * 80}>
                <details className="faq-item group border border-border bg-card">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 p-5 font-display text-sm font-bold tracking-wide text-foreground transition-colors duration-150 hover:text-primary">
                    {item.question}
                    <span className="faq-icon flex h-6 w-6 shrink-0 items-center justify-center text-primary transition-transform duration-200">
                      <svg
                        viewBox="0 0 24 24"
                        width={16}
                        height={16}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </summary>
                  <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">
                    {item.answer}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}