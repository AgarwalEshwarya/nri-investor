import type { Metadata } from "next";
import "../styles/globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nri-investor.com"),
  title: {
    default: "NRI Investor",
    template: "%s · NRI Investor",
  },
  description: "Practical, example-led money frameworks for NRIs across UK & India.",
  openGraph: {
    title: "NRI Investor",
    description: "Practical, example-led money frameworks for NRIs across UK & India.",
    url: "https://www.nri-investor.com",
    siteName: "NRI Investor",
    images: [
      { url: "/og-image.png", width: 1200, height: 630, alt: "NRI Investor" },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NRI Investor",
    description: "Practical, example-led money frameworks for NRIs across UK & India.",
    images: ["/og-image.png"],
  },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
