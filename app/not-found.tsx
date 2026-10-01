"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen w-screen flex-col items-center justify-center bg-background px-6 py-12 text-center text-foreground">
      {/* Detalhe de linha de marca no topo */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

      {/* Imagem Not Found com acabamento elegante */}
      <div className="relative mb-6 overflow-hidden rounded-2xl border border-border shadow-2xl">
        <Image
          src="/not-found.jpg"
          alt="404 - Página não encontrada"
          width={280}
          height={280}
          priority
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Conteúdo */}
      <div className="mb-3 flex items-center justify-center gap-3">
        <div className="h-px w-8 bg-primary" />
        <span className="font-display text-xs font-black uppercase tracking-[0.25em] text-primary">
          Erro 404
        </span>
        <div className="h-px w-8 bg-primary" />
      </div>

      <h1 className="mb-3 font-display text-4xl font-black uppercase tracking-tight text-foreground sm:text-5xl">
        Página não encontrada
      </h1>

      <p className="mb-8 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
        A página que você está procurando não existe, foi alterada ou movida para outro endereço.
      </p>

      {/* Botões de Ação */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Link
          href="/"
          className="flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-display text-xs font-black uppercase tracking-[0.15em] text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-200 hover:bg-primary/85 hover:scale-105 active:scale-95"
        >
          <Home size={15} />
          Ir para a Página Inicial
        </Link>

        <button
          type="button"
          onClick={() => window.history.back()}
          className="flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-border bg-secondary/80 px-6 py-3 font-display text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground transition-all duration-200 hover:border-primary/40 hover:text-foreground hover:scale-105 active:scale-95"
        >
          <ArrowLeft size={15} />
          Página Anterior
        </button>
      </div>
    </div>
  );
}