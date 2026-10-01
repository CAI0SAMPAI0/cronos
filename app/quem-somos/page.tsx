import type { Metadata } from "next";
import { site } from "@/lib/site";
import { RedirectClient } from "./RedirectClient";

export const metadata: Metadata = {
  title: "Quem Somos | Cronos Engenharia e Arquitetura",
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: site.domain,
  },
};

export default function QuemSomosRedirectPage() {
  return (
    <>
      <head>
        <meta httpEquiv="refresh" content="0; url=/#sobre" />
      </head>
      <RedirectClient />
    </>
  );
}
