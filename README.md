# CRONOS

Site institucional da **Cronos Engenharia e Arquitetura** — arquitetura, planejamento
e consultoria técnica para obras, reformas, condomínios e empresas.

## Tecnologias

- [Next.js](https://nextjs.org) (App Router) com **export estático** (`output: "export"`)
- [Tailwind CSS](https://tailwindcss.com) v4
- [lucide-react](https://lucide.dev) para ícones
- Deploy compatível com hospedagem compartilhada (Hostinger, etc.)

## Comandos

```bash
npm install      # instala as dependências
npm run dev      # servidor de desenvolvimento
npm run build    # gera o site estático na pasta out/
```

## Publicação (Hostinger)

1. Rode `npm run build` — o site estático é gerado em `out/`.
2. Envie o conteúdo de `out/` para a pasta pública (ex.: `public_html`).
3. No painel do domínio, aponte o registro *A* para o IP da hospedagem
   (o domínio permanece o mesmo; apenas o DNS passa a apontar para o novo site).

## Ajustar dados de contato

Todo o conteúdo de contato (WhatsApp, e-mail, telefone) fica centralizado em
`lib/site.ts`. O número do WhatsApp usado em todos os links e no botão flutuante
é gerado a partir de `site.whatsappNumber`.

## Trocar imagens e logo

- Imagens: URLs em `lib/images.ts` (atualmente hotlinks do Unsplash).
- Logo/favicon: substitua `public/cronos_logo.jpg` e adicione sua logo em `public/`,
  atualizando os usos em `components/site/Logo.tsx` e `WhatsAppFloating.tsx`.