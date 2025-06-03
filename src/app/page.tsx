import { Metadata } from 'next';
import Calculadora from './Calculadora';
import StructuredData from '../components/StructuredData';

export const metadata: Metadata = {
  title: 'Calculadora de Emplacamento de Carros',
  description: 'Calculadora gratuita e precisa para emplacamento de carros. Calcule IPVA, taxa de emplacamento, documentação e custos totais. Interface simples e resultados instantâneos.',
  keywords: [
    'calculadora emplacamento carros',
    'IPVA carro',
    'taxa emplacamento carro',
    'documentação carro',
    'primeira placa carro',
    'transferência veículo',
    'calculadora automotiva'
  ],
  openGraph: {
    title: 'Calculadora de Emplacamento de Carros - Grátis e Precisa',
    description: 'Calcule todas as taxas de emplacamento do seu carro: IPVA, documentação, transferência e muito mais.',
    url: '/',
    images: [
      {
        url: '/carros-preview.png',
        width: 1200,
        height: 630,
        alt: 'Calculadora de Emplacamento para Carros',
      },
    ],
  },
  twitter: {
    title: 'Calculadora de Emplacamento de Carros',
    description: 'Calcule IPVA e taxas de emplacamento do seu carro de forma gratuita e precisa.',
  },
  alternates: {
    canonical: '/',
  },
};

export default function HomePage() {
  return (
    <>
      <StructuredData 
        type="car-calculator" 
        title="Calculadora de Emplacamento de Carros"
        description="Calculadora gratuita para emplacamento de carros com IPVA, taxas e documentação"
        url="https://calculadora-emplacamento.vercel.app/"
      />
      <main>
        <Calculadora />
      </main>
    </>
  );
}
