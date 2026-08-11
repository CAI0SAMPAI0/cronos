"use client";

import { Instagram, Mail, MapPin, MessageCircle } from "lucide-react";
import { Logo } from "./Logo";
import { Reveal } from "./Reveal";
import { site, whatsappLink } from "@/lib/site";
import { GmailButton } from "./GmailButton";

const footerServices = [
  "Projetos de Arquitetura",
  "Acompanhamento de Obra",
  "Laudos e Inspeções",
  "Recuperação de Fachadas",
  "Saúde e Segurança do Trabalho",
  "Fornecimento de Mão de Obra",
  "Consultoria de Manutenção Predial",
];

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Obras", href: "#obras" },
  { label: "Altura", href: "#altura" },
  { label: "SST", href: "#sst" },
  { label: "Processo", href: "#processo" },
  { label: "FAQ", href: "#faq" },
] as const;

export function Footer() {
  const handleOpenGmail = () => {
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${site.email}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <footer className="border-t border-border bg-background px-6 pt-16 pb-8">
      <div className="mx-auto mb-12 grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-3">
        <Reveal direction="up">
          <div>
            <div className="mb-5">
              <Logo />
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Arquitetura, planejamento e consultoria técnica para construir com
              mais segurança e eficiência.
            </p>
          </div>
        </Reveal>

        <Reveal direction="up" delay={100}>
          <div>
            <h4 className="mb-5 font-display text-[10px] font-black uppercase tracking-[0.25em] text-foreground">
              Serviços
            </h4>
            <ul className="space-y-2.5">
              {footerServices.map((service) => (
                <li key={service}>
                  <a
                    href="#servicos"
                    className="cursor-pointer text-sm text-muted-foreground transition-colors duration-150 hover:text-primary"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal direction="up" delay={200}>
          <div>
            <h4 className="mb-5 font-display text-[10px] font-black uppercase tracking-[0.25em] text-foreground">
              Contato
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <MessageCircle size={13} className="shrink-0 text-primary" />
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground transition-colors duration-150 hover:text-primary"
                >
                  {site.whatsappDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={13} className="shrink-0 text-primary" />
                <GmailButton
                  type="button"
                  onClick={handleOpenGmail}
                  className="cursor-pointer text-left text-sm text-muted-foreground transition-colors duration-150 hover:text-primary"
                >
                  {site.email}
                </GmailButton>
              </li>
              <li className="flex items-center gap-3">
                <Instagram size={13} className="shrink-0 text-primary" />
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground transition-colors duration-150 hover:text-primary"
                >
                  @{site.instagramHandle}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={13} className="mt-0.5 shrink-0 text-primary" />
                <span className="text-sm leading-relaxed text-muted-foreground">
                  Seg – Sex: 9h às 17h
                  <br />
                  Sábados: 9h às 12h
                </span>
              </li>
            </ul>
          </div>
        </Reveal>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 border-t border-border pt-6 sm:flex-row">
        <p className="text-xs text-muted-foreground">
          © 2025 {site.fullName}. Todos os direitos reservados.
        </p>
        <div className="flex gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="cursor-pointer text-xs text-muted-foreground transition-colors duration-150 hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}