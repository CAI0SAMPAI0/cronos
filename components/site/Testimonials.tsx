import { Quote } from "lucide-react";
import { Reveal } from "./Reveal";

interface TestimonialItem {
  paragraphs: string[];
  author: string;
  role: string;
  badge: string;
  colSpanLg: string;
}

const testimonials: TestimonialItem[] = [
  {
    paragraphs: [
      "Durante a obra de recuperação da fachada do Edifício Bernini, pudemos contar com o acompanhamento técnico da Cronos, que nos deu o suporte necessário durante todo o processo. Os relatórios mensais e os esclarecimentos técnicos sempre que solicitados foram muito importantes para a administração e para o acompanhamento dos serviços.",
    ],
    author: "Condomínio Edifício Bernini",
    role: "Administração Condominial",
    badge: "Recuperação de Fachada",
    colSpanLg: "lg:col-span-2",
  },
  {
    paragraphs: [
      "Trabalhar com o Marco foi muito tranquilo desde o início. Ele conduziu a elaboração do Laudo de Autovistoria do condomínio com muita atenção e, depois, nos ajudou no acompanhamento e na contratação dos profissionais para realizar as obras necessárias.",
      "Sempre esteve disponível para esclarecer nossas dúvidas, orientar a administração e nos ajudar a tomar as melhores decisões. Foi muito importante contar com alguém de confiança para conduzir esse processo.",
    ],
    author: "Valéria",
    role: "Condomínio La Maison de Gauguin",
    badge: "Autovistoria Predial & Obras",
    colSpanLg: "lg:col-span-2",
  },
  {
    paragraphs: [
      "Contratei o Marco para a elaboração do Laudo de Conformidade do meu apartamento e, a partir daí, ele também me orientou sobre as adequações necessárias e conduziu o acompanhamento da reforma. Como o objetivo era preparar o imóvel para uma futura locação, foi muito importante ter alguém de confiança cuidando de todo o processo, desde as orientações iniciais até o acompanhamento da execução.",
      "A consultoria do Marco me deu segurança para tomar as decisões e conduzir a reforma de forma organizada e sem precisar me envolver diretamente com cada detalhe da obra.",
    ],
    author: "Fernando Valente Ricardo",
    role: "Proprietário de Imóvel Residencial",
    badge: "Laudo & Reforma de Apartamento",
    colSpanLg: "lg:col-span-2",
  },
  {
    paragraphs: [
      "Minha experiência com o Marco tem sido muito positiva. Ele atua como assistente técnico da Ignifire em projetos relacionados à área de segurança contra incêndio e nos serviços de ignifugação, sempre demonstrando conhecimento técnico, responsabilidade e comprometimento.",
      "O Marco nos auxilia desde a análise das necessidades do projeto até o acompanhamento e orientação dos serviços, contribuindo para que os trabalhos sejam realizados de forma organizada e de acordo com as exigências técnicas e dos órgãos competentes.",
      "É um profissional acessível, cuidadoso e que transmite segurança para a equipe e para os clientes. Sua atuação tem sido muito importante para a qualidade e a condução dos serviços da Ignifire, e por isso recomendamos seu trabalho para empresas que procuram um profissional sério e tecnicamente preparado.",
    ],
    author: "Lucia",
    role: "Ignifire — Segurança contra Incêndio & Ignifugação",
    badge: "Segurança Contra Incêndio & Ignifugação",
    colSpanLg: "lg:col-span-3",
  },
  {
    paragraphs: [
      "Trabalhar em parceria com o Marco, por meio da Cronos Engenharia e Arquitetura, tem sido uma experiência muito positiva. Contamos com seu apoio no acompanhamento de obras, sempre buscando soluções técnicas e práticas para cada situação.",
      "A Cronos nos auxilia com projetos, relatórios, laudos e também com a documentação relacionada à Saúde e Segurança do Trabalho, trazendo mais organização e segurança para a execução dos serviços.",
      "O Marco é um profissional muito prestativo, acessível e parceiro. Sempre que precisamos tratar de algum assunto relacionado à construção, podemos contar com ele para buscar uma solução e nos orientar tecnicamente. É uma parceria que valorizamos e que tem contribuído bastante para o nosso trabalho.",
    ],
    author: "Eduardo Mazzoni",
    role: "Mazzoni Soluções em Altura",
    badge: "Soluções em Altura & SST",
    colSpanLg: "lg:col-span-3",
  },
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="border-y border-border bg-secondary py-28 px-6">
      <div className="mx-auto max-w-7xl">
        <Reveal direction="fade">
          <div className="mb-3 flex items-center gap-3">
            <div className="h-px w-10 bg-primary" />
            <span className="font-display text-[10px] font-black uppercase tracking-[0.3em] text-primary">
              Depoimentos e Parcerias
            </span>
          </div>
        </Reveal>

        <Reveal direction="left">
          <h2 className="mb-16 font-display text-[clamp(2.6rem,6vw,4.5rem)] leading-none font-black text-foreground">
            QUEM CONFIA
            <br />
            NO NOSSO TRABALHO
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-6">
          {testimonials.map((item, index) => (
            <Reveal
              key={item.author + index}
              direction="up"
              delay={(index % 3) * 100}
              className={`h-full ${item.colSpanLg}`}
            >
              <figure className="flex h-full flex-col justify-between border border-border bg-background p-8 transition-colors duration-200 hover:border-primary/40">
                <div>
                  <div className="mb-6 flex items-center justify-between gap-4">
                    <Quote size={24} className="text-primary" fill="currentColor" />
                    <span className="rounded-xs border border-primary/20 bg-primary/5 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-primary">
                      {item.badge}
                    </span>
                  </div>
                  <blockquote className="mb-8 space-y-3 text-sm leading-relaxed text-muted-foreground">
                    {item.paragraphs.map((p, pIndex) => (
                      <p key={pIndex}>&ldquo;{p}&rdquo;</p>
                    ))}
                  </blockquote>
                </div>
                <figcaption className="border-t border-border pt-5">
                  <div className="font-display text-base font-bold text-foreground">
                    {item.author}
                  </div>
                  <div className="mt-0.5 text-xs uppercase tracking-wider text-muted-foreground">
                    {item.role}
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}