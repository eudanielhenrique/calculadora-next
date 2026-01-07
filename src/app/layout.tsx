import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StructuredData from "../components/StructuredData";
import GoogleAnalytics from "../components/GoogleAnalytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Calculadora de Emplacamento - Daniel H",
    template: "%s | Calculadora de Emplacamento"
  },
  description: "Calculadora gratuita para estimativas precisas de taxas de emplacamento de carros e motos. Calcule IPVA, taxa de emplacamento, documentação e muito mais de forma rápida e precisa.",
  keywords: [
    "calculadora emplacamento",
    "taxa emplacamento",
    "IPVA",
    "documentação veículo",
    "emplacamento carro",
    "emplacamento moto",
    "primeira placa",
    "taxa alienação",
    "calculadora IPVA",
    "Daniel H"
  ],
  authors: [{ name: "Daniel H", url: "https://github.com/eudanielhenrique" }],
  creator: "Daniel H",
  publisher: "Daniel H",
  metadataBase: new URL('https://calculadora-emplacamento.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://calculadora-emplacamento.vercel.app',
    title: 'Calculadora de Emplacamento - Carros e Motos',
    description: 'Calculadora gratuita para estimativas precisas de taxas de emplacamento de carros e motos. Calcule IPVA, taxa de emplacamento, documentação e muito mais.',
    siteName: 'Calculadora de Emplacamento',
    // Removendo imagens temporariamente até resolver o problema de deploy
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Calculadora de Emplacamento - Carros e Motos',
    description: 'Calculadora gratuita para estimativas precisas de taxas de emplacamento. Calcule IPVA, documentação e taxas.',
    creator: '@danielhenrique',
    // Removendo imagens temporariamente
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
    other: {
      ...(process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION && {
        'msvalidate.01': process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
      }),
      ...(process.env.NEXT_PUBLIC_YANDEX_VERIFICATION && {
        'yandex-verification': process.env.NEXT_PUBLIC_YANDEX_VERIFICATION
      }),
    },
  },
  icons: {
    icon: [
      { url: '/icon/3d-fluency-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon/3d-fluency-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon/3d-fluency-96.png', sizes: '96x96', type: 'image/png' },
    ],
    shortcut: '/icon/3d-fluency-32.png',
    apple: '/icon/3d-fluency-96.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100 min-h-screen flex flex-col text-gray-900`}
      >
        <GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ''} />
        <StructuredData
          type="website"
          title="Calculadora de Emplacamento"
          description="Calculadora gratuita para emplacamento de carros e motos"
          url="https://calculadora-emplacamento.vercel.app"
        />
        <header className="bg-white border-b border-gray-200">
          <div className="max-w-6xl mx-auto py-3 px-4 flex justify-between items-center">
            <div>
              <h1 className="text-lg font-semibold text-gray-800">Calculadora de Emplacamento</h1>
            </div>
          </div>
        </header>
        
        <div className="flex-grow">
          {children}
        </div>
        
        <footer className="py-4 text-center text-sm text-gray-600 mt-8 border-t border-gray-200 bg-white">
          <p>
            Desenvolvido por <a 
              href="https://github.com/eudanielhenrique" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 font-medium hover:underline transition-colors"
            >
              Daniel H
            </a>
          </p>
        </footer>
      </body>
    </html>
  );
}
