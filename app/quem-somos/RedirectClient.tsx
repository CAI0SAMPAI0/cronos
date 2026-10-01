"use client";

import { useEffect } from "react";
import Link from "next/link";

export function RedirectClient() {
  useEffect(() => {
    window.location.replace("/#sobre");
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 text-center text-foreground">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
      <p className="mt-4 text-sm text-muted-foreground">
        Redirecionando para a Cronos Engenharia...
      </p>
      <Link
        href="/#sobre"
        className="mt-4 text-xs font-semibold text-primary underline"
      >
        Clique aqui caso não seja redirecionado automaticamente
      </Link>
    </div>
  );
}
