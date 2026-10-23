# THIAGO.DEV — Site Pessoal & Portfólio

Repositório do site pessoal de **Thiago Roberto Pereira**, publicado em [trpsoftware.com.br](https://trpsoftware.com.br/).

## Sobre o projeto

Landing page moderna desenvolvida com foco em apresentar minha atuação como **Desenvolvedor de Software (Full Stack & Backend)**, principais tecnologias, processo de trabalho e canais de contato.

### Seções da página

1. **01 · Hero (`#inicio`)** — Apresentação direta, links principais (LinkedIn, GitHub, Contato) e faixa animada de tecnologias.
2. **02 · Sobre mim (`#sobre`)** — Resumo de trajetória (+15 anos de experiência), contadores e terminal interativo (`thiago@dev:~`) com informações sobre atuação, setores atendidos, fluxo com IA e stack.
3. **03 · Áreas de atuação & Tecnologias (`#especialidades`)** — Desenvolvimento Backend (Java & Node.js), Modernização de Sistemas & Microsserviços, APIs & Mensageria, Aplicações Web & Frontend, Qualidade/Testes & Fluxo IA e Performance/Cloud.
4. **04 · Como trabalho (`#como-trabalho`)** — Processo em 5 etapas (Contexto, Diagnóstico, Definição da solução, Desenvolvimento/Testes e Entrega).
5. **05 · Contato (`#contato`)** — Links diretos e formulário integrado ao Formspree.

## Stack do site

- **Next.js 16** (App Router com exportação estática `output: "export"`)
- **React 19** & **TypeScript**
- **Tailwind CSS 4**
- **Framer Motion** (animações de entrada por scroll)
- **Lucide React** (ícones)
- **SEO & Indexação:** JSON-LD (`ProfilePage`, `Person`, `OfferCatalog`), Open Graph gerado via `next/og`, `sitemap.xml`, `robots.txt` e `llms.txt`.

## Estrutura do projeto

```text
/
├── .github/workflows/deploy.yml  # CI/CD para deploy automático no GitHub Pages
├── public/                       # CNAME, .nojekyll e llms.txt
├── src/
│   ├── app/
│   │   ├── globals.css           # Estilos globais e tokens visuais
│   │   ├── icon.svg              # Favicon vetorial
│   │   ├── layout.tsx            # Metadados SEO, Open Graph e JSON-LD
│   │   ├── opengraph-image.tsx   # Geração da imagem de preview (1200x630)
│   │   ├── page.tsx              # Página principal e Hero section
│   │   ├── robots.ts             # Geração do robots.txt
│   │   └── sitemap.ts            # Geração do sitemap.xml
│   └── components/
│       ├── AboutSection.tsx      # Seção Sobre + Terminal interativo
│       ├── ContactSection.tsx    # Formulário de contato + Rodapé
│       ├── DomainSection.tsx     # Cards de atuação e tecnologias
│       ├── SectionEyebrow.tsx    # Cabeçalho numerado das seções
│       └── WorkflowSection.tsx   # Etapas do processo de trabalho
└── next.config.ts
```

## Como executar localmente

```bash
# Instalar dependências
npm install

# Rodar servidor de desenvolvimento (http://localhost:3000)
npm run dev

# Gerar build estático de produção (pasta ./out)
npm run build
```
