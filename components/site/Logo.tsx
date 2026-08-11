import Image from "next/image";
import { site } from "@/lib/site";
import cronosLogo from "@/public/cronos_logo.jpg";

type LogoProps = {
  withTagline?: boolean;
};

export function Logo({ withTagline = true }: LogoProps) {
  return (
    <a href="#inicio" className="flex items-center">
      <Image
        src={cronosLogo}
        alt={site.fullName}
        width={cronosLogo.width}
        height={cronosLogo.height}
        className="h-8 w-auto object-contain"
      />
      {withTagline && (
        <span className="ml-3 hidden text-[9px] uppercase tracking-[0.2em] text-muted-foreground sm:inline">
          {site.tagline}
        </span>
      )}
    </a>
  );
}