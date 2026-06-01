import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Active Care Rehab Physiotherapy",
    template: "%s | Active Care Rehab",
  },

  description:
    "Professional physiotherapy, sports massage, cupping therapy, rehabilitation, back pain treatment, and mobility improvement.",

  keywords: [
    "Physiotherapy",
    "Sports Massage",
    "Cupping Therapy",
    "Rehabilitation",
    "Back Pain",
    "Neck Pain",
    "Sports Injury",
    "Active Care Rehab",
  ],

  authors: [{ name: "Active Care Rehab" }],

  openGraph: {
    title: "Active Care Rehab Physiotherapy",
    description:
      "Professional physiotherapy, sports massage and rehabilitation services.",
    url: "https://activecarerehab.com",
    siteName: "Active Care Rehab",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Active Care Rehab",
      },
    ],
    locale: "en_GB",
    type: "website",
  },

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Active Care Rehab Physiotherapy",
    url: "https://yourdomain.com",
    logo: "https://yourdomain.com/logo.png",
    image: "https://yourdomain.com/logo.png",
    description:
      "Professional physiotherapy, sports massage and rehabilitation services.",
  };

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
        {children}
      </body>
    </html>
  );
}