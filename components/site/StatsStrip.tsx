import { Reveal } from "./Reveal";

const stats = [
  { value: "15+", label: "Anos de Experiência" },
  { value: "400+", label: "Projetos Realizados" },
  { value: "100%", label: "Conformidade Técnica" },
  { value: "NR-35", label: "Certificação em Altura" },
];

export function StatsStrip() {
  return (
    <section className="border-y border-border bg-secondary">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-border px-8 py-10 md:grid-cols-4">
        {stats.map((stat, index) => (
          <Reveal
            key={stat.label}
            direction={index % 2 === 0 ? "up" : "scale"}
            delay={index * 120}
          >
            <div className="px-8 text-center first:pl-0 last:pr-0 md:text-left">
              <div className="mb-1 font-display text-5xl leading-none font-black text-primary">
                {stat.value}
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {stat.label}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}