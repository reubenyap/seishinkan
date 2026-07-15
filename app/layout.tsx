import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

const title = "Seishinkan Aikido Dojo | Kuching";
const description =
  "Seishinkan Aikido is a welcoming Aikikai dojo in Kuching, affiliated with Akademi Aikido under Jun Yamada Shihan, 8th Dan.";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;

  return {
    title,
    description,
    icons: {
      icon: "/images/seishinkan-logo.png",
      shortcut: "/images/seishinkan-logo.png",
      apple: "/images/seishinkan-logo.png",
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: origin,
      images: [{ url: `${origin}/og.png`, width: 1728, height: 909, alt: "Seishinkan Aikido — Practise with purpose. Grow together." }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${origin}/og.png`],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
