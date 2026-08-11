import type { Metadata, Viewport } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import { images } from "@/lib/images";
import { faqs } from "@/lib/faq";
import { serviceCategories } from "@/lib/services";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-barlow",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

const title = "Cronos Engenharia e Arquitetura";
const description =
  "Arquitetura, planejamento e consultoria técnica para obras, reformas, condomínios e empresas. Trabalho em altura, recuperação de fachadas, SST e regularização predial com segurança e conformidade.";

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: `${title} | Obras, Reformas e Segurança do Trabalho`,
    template: `%s | ${title}`,
  },
  description,
  keywords: [
    "engenharia",
    "arquitetura",
    "reformas",
    "projetos de arquitetura",
    "trabalho em altura",
    "recuperação de fachadas",
    "segurança do trabalho",
    "laudo de autovistoria predial",
    "segurança contra incêndio",
    "AVCB",
    "consultoria de obras",
    "Rio de Janeiro",
  ],
  authors: [{ name: title }],
  creator: title,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: title,
    title,
    description,
    images: [
      {
        url: images.hero,
        width: 1400,
        height: 900,
        alt: "Edificação moderna",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [images.hero],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/cronos_logo.jpg",
    shortcut: "/cronos_logo.jpg",
    apple: "/cronos_logo.jpg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#080B14",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: title,
  url: site.domain,
  email: site.email,
  telephone: site.whatsappDisplay,
  description,
  areaServed: "Rio de Janeiro e região",
  priceRange: "$$",
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const servicesLd = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: "Serviços da Cronos Engenharia e Arquitetura",
  itemListElement: serviceCategories.map((category) => ({
    "@type": "OfferCatalog",
    name: category.label,
    itemListElement: category.services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.desc,
        provider: { "@type": "LocalBusiness", name: title },
        areaServed: "Rio de Janeiro e região",
      },
    })),
  })),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${barlow.variable} ${barlowCondensed.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}