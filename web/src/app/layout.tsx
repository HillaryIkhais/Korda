import type { Metadata } from "next";
import { DM_Sans, Instrument_Serif, Space_Mono } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({ 
  subsets: ["latin"], 
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"]
});

const spaceMono = Space_Mono({ 
  subsets: ["latin"], 
  variable: "--font-mono",
  weight: ["400", "700"]
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Korda — Reality Intelligence for Agent Systems",
  description: "Korda watches agent memory, catches semantic drift, and keeps orchestrators anchored to what is true.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${spaceMono.variable} ${instrumentSerif.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
