/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { GoogleOAuthProvider } from "@react-oauth/google";

const circularStd = localFont({
  src: "../../fonts/CircularStd.ttf",
  variable: "--font-circular-std",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "StudioHub",
  description: "StudioHub, the best place to share your projects and connect with other creators.",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${circularStd.className} bg-black text-foreground`}
      >
        <GoogleOAuthProvider
          clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string}
        >
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </GoogleOAuthProvider>
      </body>
    </html>
  );
}
