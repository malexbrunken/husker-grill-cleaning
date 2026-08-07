import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";
import "./globals.css";
import "@/styles/lander.css";
import "@/styles/chrome.css";
import "@/styles/see-our-work.css";
import "@/styles/pricing.css";
import "@/styles/multi-tenant.css";
import "@/styles/join-our-team.css";
import "@/styles/about.css";
import "@/styles/grill-repairs.css";
import "@/styles/matthew-brunken.css";
import "@/styles/organic-vs-deep.css";
import "@/styles/what-grill-cleaning-includes.css";
import "@/styles/schedule.css";
import "@/styles/omaha-services.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: "Lincoln & Omaha Grill Cleaning | Husker Grill Cleaning",
    template: "%s | Husker Grill Cleaning",
  },
  description: site.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.domain,
    siteName: site.name,
    title: "Lincoln & Omaha Grill Cleaning | Husker Grill Cleaning",
    description: site.description,
    images: [
      {
        url: "/images/hero.webp",
        width: 1200,
        height: 630,
        alt: "Husker Grill Cleaning — professional mobile grill cleaning in Omaha and Lincoln",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lincoln & Omaha Grill Cleaning | Husker Grill Cleaning",
    description: site.description,
    images: ["/images/hero.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/brand/logo-square.webp",
    apple: "/brand/logo-square.webp",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col site-body">
        <JsonLd />
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
