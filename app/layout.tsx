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
  "Cronos Engenharia e Arquitetura: planejamento, consultoria técnica e execução de obras, reformas, condomínios e indústrias no Rio de Janeiro. Especialistas em trabalho em altura, recuperação de fachadas, segurança do trabalho (SST) e regularização predial.";

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: `${title} | Obras, Reformas e SST - Rio de Janeiro`,
    template: `%s | ${title}`,
  },
  description,
  keywords: [
    "Cronos Engenharia",
    "Cronos Engenharia e Arquitetura",
    "Cronos Engenharia RJ",
    "Cronos Engenharia Rio de Janeiro",
    "Cronos Arquitetura",
    "engenharia civil rj",
    "arquitetura rj",
    "reformas prediais e comerciais",
    "projetos de arquitetura",
    "trabalho em altura",
    "recuperação de fachadas",
    "segurança do trabalho",
    "SST Rio de Janeiro",
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
    title: `${title} | Engenharia, Reformas e SST no RJ`,
    description,
    images: [
      {
        url: images.hero,
        width: 1400,
        height: 900,
        alt: "Cronos Engenharia e Arquitetura - Projetos e Obras",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | Engenharia, Reformas e SST no RJ`,
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
  "@type": ["ProfessionalService", "GeneralContractor"],
  "@id": `${site.domain}/#organization`,
  name: title,
  alternateName: [
    "Cronos Engenharia",
    "Cronos Engenharia RJ",
    "Cronos Engenharia & Arquitetura",
    "Cronos Online",
    "Cronos",
  ],
  url: site.domain,
  logo: `${site.domain}/cronos_logo.jpg`,
  image: `${site.domain}/images/hero.jpg`,
  email: site.email,
  telephone: site.whatsappDisplay,
  description,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Rio de Janeiro",
    addressRegion: "RJ",
    addressCountry: "BR",
  },
  areaServed: [
    {
      "@type": "City",
      name: "Rio de Janeiro",
    },
    {
      "@type": "State",
      name: "Rio de Janeiro",
    },
  ],
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