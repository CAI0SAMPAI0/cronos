import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.fullName,
    short_name: site.name,
    description: "Arquitetura, planejamento e consultoria técnica para obras e reformas.",
    start_url: "/",
    display: "standalone",
    background_color: "#080B14",
    theme_color: "#080B14",
    icons: [
      {
        src: "/cronos_logo.jpg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}