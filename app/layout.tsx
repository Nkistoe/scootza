import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ScootZA | We Move So You Don't Have To",
  description: "South Africa's safety-first food and store delivery platform. Verified drivers, biometric protection, and real-time tracking. Serving Durban and beyond.",
  keywords: "food delivery, Durban, South Africa, scooter delivery, ScootZA, verified delivery",
  openGraph: {
    title: "ScootZA | Verified Food Delivery in Durban",
    description: "Safety-first delivery with biometric verification. Real-time tracking. Trusted local drivers.",
    type: "website",
    locale: "en_ZA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
