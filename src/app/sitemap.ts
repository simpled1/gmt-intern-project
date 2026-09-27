import { MetadataRoute } from "next";
import { specialtiesData } from "@/data/specialties";
import { methodsData } from "@/data/methods";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://drmayareynolds.com";

  const staticRoutes = [
    "",
    "/about",
    "/office",
    "/specialties",
    "/methods",
    "/faqs",
    "/contact",
    "/privacy-policy",
    "/good-faith-estimate",
    "/disclaimer",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const specialtyRoutes = Object.keys(specialtiesData).map((slug) => ({
    url: `${baseUrl}/specialties/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const methodRoutes = Object.keys(methodsData).map((slug) => ({
    url: `${baseUrl}/methods/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...specialtyRoutes, ...methodRoutes];
}
