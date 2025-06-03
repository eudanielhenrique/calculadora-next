import { Metadata } from 'next';
import CalculadoraMotos from './CalculadoraMotos';
import StructuredData from '../../components/StructuredData';

export const metadata: Metadata = {
  title: 'Calculadora de Emplacamento de Motos',
  description: 'Calculadora especializada para emplacamento de motocicletas. Calcule IPVA, taxa de emplacamento e documentação de motos com venda de estoque (1% de taxa). Interface otimizada para motociclistas.',
  keywords: [
    'calculadora emplacamento motos',
    'IPVA moto',
    'taxa emplacamento motocicleta',
    'documentação moto',
    'primeira placa moto',
    'transferência motocicleta',
    'venda estoque moto'
  ],
  openGraph: {
    title: 'Calculadora de Emplacamento de Motos - Especializada',
    description: 'Calculadora específica para motos com venda de estoque. Calcule IPVA, taxas e documentação de motocicletas.',
    url: '/motos',
    // Removendo imagens temporariamente até resolver problema de deploy
  },
  twitter: {
    title: 'Calculadora de Emplacamento de Motos',
    description: 'Calcule IPVA e taxas de emplacamento da sua moto com facilidade. Venda de estoque incluída.',
  },
  alternates: {
    canonical: '/motos',
  },
};

export default function MotosPage() {
  return (
    <>
      <StructuredData 
        type="moto-calculator" 
        title="Calculadora de Emplacamento de Motos"
        description="Calculadora especializada para emplacamento de motocicletas com venda de estoque"
        url="https://calculadora-emplacamento.vercel.app/motos"
      />
      <CalculadoraMotos />
    </>
  );
}
