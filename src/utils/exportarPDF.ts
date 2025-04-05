import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import type { Detalhamento } from '../store/calculadoraStore';

// Adicionando o tipo para o jsPDF com autoTable
declare module 'jspdf' {
  interface jsPDF {
    autoTable: (options: { startY?: number; head: string[][]; body: (string | number)[][]; theme?: string; headStyles?: { fillColor: number[]; textColor: number[] } }) => jsPDF;
    lastAutoTable: { finalY: number };
  }
}

export function exportarCalculoPDF(
  valorNota: number,
  tipoVenda: 'direta' | 'estoque',
  taxaAlienacao: boolean,
  valorTotal: number,
  detalhamento: Detalhamento
) {
  const doc = new jsPDF();

  // Título
  doc.setFontSize(20);
  doc.setTextColor(0, 0, 200);
  doc.text('Calculadora de Emplacamento', 105, 20, { align: 'center' });
  
  // Subtítulo
  doc.setFontSize(12);
  doc.setTextColor(100, 100, 100);
  doc.text(`Gerado em: ${new Date().toLocaleString('pt-BR')}`, 105, 30, { align: 'center' });

  // Informações do cálculo
  doc.setFontSize(14);
  doc.setTextColor(0, 0, 0);
  doc.text('Informações do Cálculo', 20, 50);
  
  doc.setFontSize(12);
  doc.text(`Valor da Nota Fiscal: R$ ${valorNota.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`, 20, 60);
  doc.text(`Tipo de Venda: ${tipoVenda === 'direta' ? 'Venda Direta (2%)' : 'Venda Estoque (1%)'}`, 20, 70);
  doc.text(`Taxa de Alienação: ${taxaAlienacao ? 'Sim' : 'Não'}`, 20, 80);

  // Tabela com os detalhes
  const tableColumn = ['Item', 'Valor (R$)'];
  const tableRows = [
    ['Valor Mensal do IPVA', detalhamento.taxaMensal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })],
    ['Meses Restantes', detalhamento.mesesRestantes.toString()],
    ['Total do IPVA', detalhamento.totalTaxaMensal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })],
    ['Taxa de Emplacamento', detalhamento.taxaEmplacamento.toLocaleString('pt-BR', { minimumFractionDigits: 2 })],
    ['Valor da Placa', detalhamento.valorPlaca.toLocaleString('pt-BR', { minimumFractionDigits: 2 })],
    ['Honorários', detalhamento.valorHonorarios.toLocaleString('pt-BR', { minimumFractionDigits: 2 })]
  ];

  if (taxaAlienacao) {
    tableRows.push(['Taxa de Alienação', detalhamento.valorTaxaAlienacao.toLocaleString('pt-BR', { minimumFractionDigits: 2 })]);
  }

  doc.autoTable({
    startY: 90,
    head: [tableColumn],
    body: tableRows,
    theme: 'striped',
    headStyles: { fillColor: [0, 51, 153], textColor: [255, 255, 255] }
  });

  // Total
  const finalY = doc.lastAutoTable.finalY + 10;
  doc.setFontSize(16);
  doc.setTextColor(0, 51, 153);
  doc.text(`VALOR TOTAL: R$ ${valorTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`, 105, finalY, { align: 'center' });

  // Rodapé
  doc.setFontSize(10);
  doc.setTextColor(100, 100, 100);
  doc.text('Desenvolvido por Daniel H - github.com/eudanielhenrique', 105, 280, { align: 'center' });

  // Salvar o PDF
  doc.save('calculo_emplacamento.pdf');
}
