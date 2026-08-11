"use client";

import { ComponentProps } from "react";
import { site } from "@/lib/site";

export function GmailButton({ className, children, ...props }: ComponentProps<"button">) {
  return (
    <button
      type="button"
      onClick={() =>
        window.open(
          `https://mail.google.com/mail/?view=cm&fs=1&to=${site.email}`,
          "_blank",
          "noopener,noreferrer"
        )
      }
      className={className ?? "cursor-pointer text-left text-sm text-muted-foreground transition-colors duration-150 hover:text-primary"}
      {...props}
    >
      {children ?? site.email}
    </button>
  );
}