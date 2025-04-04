import { Metadata } from 'next';
import Calculadora from './Calculadora';

export const metadata: Metadata = {
  title: 'Calculadora de Emplacamento - Daniel H',
  description: 'Calculadora para estimativas de taxas de emplacamento e documentação',
};

export default function HomePage() {
  return (
    <main>
      <Calculadora />
    </main>
  );
}
