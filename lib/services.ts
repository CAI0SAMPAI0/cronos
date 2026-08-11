import {
  Activity,
  Building2,
  ClipboardCheck,
  DraftingCompass,
  FileSearch,
  Gauge,
  HardHat,
  Home,
  LayoutList,
  PencilRuler,
  Ruler,
  Scale,
  Settings,
  ShieldCheck,
  UserCheck,
  Users,
} from "lucide-react";

export const serviceCategories = [
  {
    id: "engenharia",
    label: "Engenharia",
    services: [
      {
        icon: PencilRuler,
        title: "Acompanhamento Técnico de Obra",
        desc: "Acompanhamento regular da obra com relatório de evolução e controle da execução.",
      },
      {
        icon: Ruler,
        title: "Regularização e Legalização",
        desc: "Regularização de edificações, desmembramentos e adequação junto aos órgãos competentes.",
      },
      {
        icon: ClipboardCheck,
        title: "Declaração de Regularidade e Avaliações",
        desc: "Elaboração de declarações técnicas, avaliação e vistoria de imóveis e equipamentos.",
      },
      {
        icon: FileSearch,
        title: "Análise e Comparação de Propostas",
        desc: "Análise crítica de projetos, propostas e planejamento para decisões técnicas seguras.",
      },
      {
        icon: DraftingCompass,
        title: "Gerenciamento de Obras",
        desc: "Planejamento, programação e organização de obras e manutenções, com controle de etapas.",
      },
      {
        icon: Building2,
        title: "Obra Arquitetônica e Civil",
        desc: "Atuação em projetos e execução de obras de arquitetura e engenharia civil.",
      },
    ],
  },
  {
    id: "sst",
    label: "Segurança do Trabalho",
    services: [
      {
        icon: ShieldCheck,
        title: "PCMSO e PGR",
        desc: "Programa de controle médico e programa de gerenciamento de riscos de sua organização.",
      },
      {
        icon: Scale,
        title: "Manutenções e Adequações NR",
        desc: "Implementação e adequação de medidas relacionadas às Normas Regulamentadoras.",
      },
      {
        icon: Activity,
        title: "Treinamentos Obrigatórios",
        desc: "Elaboração e realização de treinamentos e NRs para equipes e colaboradores.",
      },
      {
        icon: UserCheck,
        title: "Processos de Recrutamento e Seleção",
        desc: "Apoio e participação em processos seletivos para profissionais de segurança.",
      },
    ],
  },
  {
    id: "consultoria",
    label: "Consultoria",
    services: [
      {
        icon: HardHat,
        title: "Consultoria em Obra e Engenharia",
        desc: "Suporte técnico especializado para obras, projetos e desafios de engenharia.",
      },
      {
        icon: LayoutList,
        title: "Consultoria em Manutenção Predial",
        desc: "Estruturação de planos de manutenção e acompanhamento de serviços prediais.",
      },
      {
        icon: Settings,
        title: "Consultoria em Administração Condominial",
        desc: "Orientação técnica para a administração e gestão do seu condomínio.",
      },
      {
        icon: Gauge,
        title: "Planos e Controles",
        desc: "Definição de indicadores, metas e controles para melhorar a gestão.",
      },
    ],
  },
  {
    id: "maodeobra",
    label: "Mão de Obra",
    services: [
      {
        icon: Users,
        title: "Fornecimento de Mão de Obra",
        desc: "Seleção, fornecimento e organização de profissionais para as suas demandas.",
      },
      {
        icon: UserCheck,
        title: "Supervisão Técnica",
        desc: "Supervisão de segurança e acompanhamento das equipes nas atividades diárias.",
      },
      {
        icon: Home,
        title: "Reformas e Pequenos Serviços",
        desc: "Execução de reformas, adaptações e pequenos serviços com mão de obra qualificada.",
      },
    ],
  },
] as const;

export type ServiceCategory = (typeof serviceCategories)[number];