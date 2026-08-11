"use client";

import { ArrowUpRight, Instagram, Mail, MessageCircle } from "lucide-react";
import { site, whatsappLink } from "@/lib/site";
import { Reveal } from "./Reveal";

export function Cta() {
  return (
    <section id="contato" className="py-28 bg-primary">
      <Reveal direction="scale" className="mx-auto max-w-7xl px-8 text-center">
        <span className="mb-4 block font-display text-[10px] font-black uppercase tracking-[0.3em] text-primary-foreground/50">
          Próximo passo
        </span>
        <h2 className="mb-6 font-display text-[clamp(3rem,8vw,6rem)] leading-none font-black text-primary-foreground">
          VAMOS CONVERSAR
          <br />
          SOBRE SEU PROJETO?
        </h2>
        <p className="mx-auto mb-12 max-w-lg text-lg leading-relaxed text-primary-foreground/75">
          A {site.name} analisa cada demanda individualmente. Entre em contato para
          uma avaliação técnica sem compromisso.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${site.email}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 border-2 border-primary-foreground px-8 py-4 font-display text-sm font-black uppercase tracking-wider text-primary-foreground transition-colors hover:bg-primary-foreground/10"
          >
            <Mail size={15} />
            E-MAIL
            <ArrowUpRight size={15} />
          </a>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 border-2 border-primary-foreground px-8 py-4 font-display text-sm font-black uppercase tracking-wider text-primary-foreground transition-colors hover:bg-primary-foreground/10"
          >
            <MessageCircle size={15} />
            WHATSAPP
            <ArrowUpRight size={15} />
          </a>
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 border-2 border-primary-foreground px-8 py-4 font-display text-sm font-black uppercase tracking-wider text-primary-foreground transition-colors hover:bg-primary-foreground/10"
          >
            <Instagram size={15} />
            INSTAGRAM
            <ArrowUpRight size={15} />
          </a>
        </div>
      </Reveal>
    </section>
  );
}