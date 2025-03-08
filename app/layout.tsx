import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Provider from "./components/SessionProvider";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Sarna Dharma",
  description: "A NGO in West Bengal fighting for the the rights of the ST community.Preserving culturial heritage and promoting education. We are believing on the ideal of the great leader Birsa Munda and Dr.B.R.Ambedkar. We are raising the voice against the historial injustices against the ST community of West Bengal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Provider>
        <Header/>
        {children}
        <Footer />
        </Provider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
