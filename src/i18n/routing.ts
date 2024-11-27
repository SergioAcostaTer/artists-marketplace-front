import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

// const isDev = process.env.isDev === "true";

export const routing = defineRouting({
  locales: ["en", "es", "fr", "de"],
  defaultLocale: "en",
  // domains: [
  //   {
  //     domain: isDev ? "en.localhost" : "en.studiohub.es",
  //     defaultLocale: "en",
  //   },
  //   {
  //     domain: isDev ? "es.localhost" : "es.studiohub.es",
  //     defaultLocale: "es",
  //   },
  //   {
  //     domain: isDev ? "fr.localhost" : "fr.studiohub.es",
  //     defaultLocale: "fr",
  //   },
  //   {
  //     domain: isDev ? "de.localhost" : "de.studiohub.es",
  //     defaultLocale: "de",
  //   },
  // ],
});

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
