import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Calculadora de Emplacamento - Daniel H",
  description: "Calculadora para estimativas de taxas de emplacamento e documentação",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100 min-h-screen flex flex-col`}
      >
        <div className="flex-grow">
          {children}
        </div>
        <footer className="py-4 text-center text-sm text-gray-600 mt-8 border-t border-gray-200 bg-white">
          <p>
            Desenvolvido por <a 
              href="https://github.com/eudanielhenrique" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 font-medium hover:underline transition-colors"
            >
              Daniel H
            </a>
          </p>
        </footer>
      </body>
    </html>
  );
}
