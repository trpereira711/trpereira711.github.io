import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://trpsoftware.com.br/",
      lastModified: new Date("2026-10-23"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
