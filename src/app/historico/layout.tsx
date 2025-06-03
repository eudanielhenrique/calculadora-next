import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Histórico de Cálculos',
  description: 'Visualize e gerencie seu histórico de cálculos de emplacamento. Mantenha registro de todas as suas simulações anteriores.',
  robots: {
    index: false, // Histórico é privado, não deve ser indexado
    follow: true,
  },
};

interface HistoricoLayoutProps {
  children: ReactNode;
}

export default function HistoricoLayout({ children }: HistoricoLayoutProps) {
  return <>{children}</>;
}
