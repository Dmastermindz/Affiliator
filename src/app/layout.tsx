import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { PrivyClientProvider } from '@/components/providers/privy-provider';

import { cn } from "@/lib/utils";

const fontSans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fontHeading = localFont({
  variable: "--font-heading",
  src: "./geist.ttf",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Affiliator",
  description: "A OnChain Affilaite Program",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen font-sans antialiased",
          fontSans.variable,
          fontHeading.variable
        )}
      >
        <PrivyClientProvider>{children}</PrivyClientProvider>
      </body>
    </html>
  );
}
