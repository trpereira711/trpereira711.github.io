import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const siteUrl = "https://trpsoftware.com.br";
const siteTitle = "Thiago Roberto Pereira | Desenvolvedor de Software";
const siteDescription =
  "Desenvolvedor de Software (Full Stack & Backend) com mais de 15 anos de experiência em sistemas web, APIs, modernização de aplicações e alta escala com Java, Spring Boot, Node.js, TypeScript, React e Angular.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  applicationName: "Thiago Roberto Pereira — Desenvolvedor de Software",
  referrer: "strict-origin-when-cross-origin",
  authors: [{ name: "Thiago Roberto Pereira", url: siteUrl }],
  creator: "Thiago Roberto Pereira",
  publisher: "Thiago Roberto Pereira",
  keywords: [
    "Thiago Roberto Pereira",
    "Desenvolvedor de Software",
    "Desenvolvedor Full Stack",
    "Desenvolvedor Backend",
    "Desenvolvedor Java",
    "Spring Boot",
    "Node.js",
    "TypeScript",
    "React",
    "Next.js",
    "Angular",
    "Vue.js",
    "Modernização de Sistemas Legados",
    "Microsserviços",
    "APIs e Integrações",
    "Kafka",
    "Brasília",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Thiago Roberto Pereira — Desenvolvedor de Software",
    title: siteTitle,
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: `${siteUrl}/`,
      name: "Thiago Roberto Pereira — Desenvolvedor de Software",
      alternateName: ["Thiago Roberto Pereira", "THIAGO.DEV"],
      inLanguage: "pt-BR",
      publisher: {
        "@id": `${siteUrl}/#thiago-pereira`,
      },
    },
    {
      "@type": ["WebPage", "ProfilePage"],
      "@id": `${siteUrl}/#webpage`,
      url: `${siteUrl}/`,
      name: siteTitle,
      description: siteDescription,
      inLanguage: "pt-BR",
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      about: {
        "@id": `${siteUrl}/#thiago-pereira`,
      },
      mainEntity: {
        "@id": `${siteUrl}/#thiago-pereira`,
      },
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#thiago-pereira`,
      name: "Thiago Roberto Pereira",
      url: `${siteUrl}/`,
      jobTitle: "Desenvolvedor de Software",
      description: siteDescription,
      mainEntityOfPage: {
        "@id": `${siteUrl}/#webpage`,
      },
      sameAs: [
        "https://www.linkedin.com/in/thiago-roberto-pereira-2b2a89106/",
        "https://github.com/trpereira711",
      ],
      knowsAbout: [
        "Desenvolvimento de Software",
        "Java",
        "Spring Boot",
        "Node.js",
        "TypeScript",
        "React",
        "Next.js",
        "Angular",
        "Vue.js",
        "Modernização de Sistemas Legados",
        "Microsserviços",
        "APIs REST e gRPC",
        "Apache Kafka",
        "PostgreSQL",
        "Docker",
        "AWS",
        "Testes Automatizados e CI/CD",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Serviços de Desenvolvimento de Software",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Desenvolvimento Backend Java & Node.js",
              description:
                "Construção de serviços, regras de negócio e persistência de dados com Java, Spring Boot, Node.js e bancos relacionais/NoSQL.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Modernização de Sistemas & Microsserviços",
              description:
                "Atualização gradual de sistemas legados, redução de acoplamento e transição para microsserviços ou monólitos modulares.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "APIs, Mensageria & Integrações",
              description:
                "Desenvolvimento de APIs REST/gRPC, comunicação assíncrona com Apache Kafka e integrações entre sistemas.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Aplicações Web & Frontend",
              description:
                "Implementação de aplicações web modernas com TypeScript, React, Next.js, Angular e Vue.js.",
            },
          },
        ],
      },
      workLocation: {
        "@type": "City",
        name: "Brasília",
        containedInPlace: {
          "@type": "AdministrativeArea",
          name: "Distrito Federal",
        },
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${montserrat.variable} font-sans dark antialiased h-full`}
    >
      <body className="min-h-full flex flex-col bg-black text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
