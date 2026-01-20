import type { Metadata } from "next";
import { Rye, Inter } from "next/font/google";
import "./globals.css";

const rye = Rye({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-rye",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Taquería Michoacán",
  description: "Taquería y Carnitas Michoacán - Austin, TX",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rye.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
