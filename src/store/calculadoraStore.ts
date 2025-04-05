import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const TAXA_EMPLACAMENTO = 435;
const VALOR_PLACA = 290;
const VALOR_HONORARIOS = 200;
const VALOR_TAXA_ALIENACAO = 140;

interface CalculoSalvo {
  id: string;
  data: string;
  valorNota: number;
  tipoVenda: 'direta' | 'estoque';
  taxaAlienacao: boolean;
  valorTotal: number;
  detalhamento: Detalhamento;
}

interface Detalhamento {
  taxaMensal: number;
  mesesRestantes: number;
  totalTaxaMensal: number;
  taxaEmplacamento: number;
  valorPlaca: number;
  valorHonorarios: number;
  valorTaxaAlienacao: number;
}

type CalculadoraStore = {
  valorNota: number;
  tipoVenda: 'direta' | 'estoque';
  taxaAlienacao: boolean;
  valorTaxaAlienacao: number;
  valorTotal: number;
  detalhamento: Detalhamento | null;
  historico: CalculoSalvo[];
  
  setValorNota: (valor: number) => void;
  setTipoVenda: (tipo: 'direta' | 'estoque') => void;
  setTaxaAlienacao: (incluir: boolean) => void;
  setValorTaxaAlienacao: () => void;
  calcularTotal: () => void;
  salvarCalculoAtual: () => void;
  limparHistorico: () => void;
}

const useCalculadoraStore = create<CalculadoraStore>()(
  persist(
    (set, get) => ({
      valorNota: 0,
      tipoVenda: 'direta',
      taxaAlienacao: false,
      valorTaxaAlienacao: 0,
      valorTotal: 0,
      detalhamento: null,
      historico: [],

      setValorNota: (valor) => set({ valorNota: valor }),
      setTipoVenda: (tipo) => set({ tipoVenda: tipo }),
      setTaxaAlienacao: (incluir) => set({ taxaAlienacao: incluir }),
      setValorTaxaAlienacao: () => set({ valorTaxaAlienacao: VALOR_TAXA_ALIENACAO }),

      calcularTotal: () => {
        const { valorNota, tipoVenda, taxaAlienacao } = get();
        
        // Cálculo da taxa anual (IPVA)
        // Para venda direta é 2% do valor da nota, para estoque é 1%
        const percentualTaxa = tipoVenda === 'direta' ? 0.02 : 0.01;
        const taxaAnual = valorNota * percentualTaxa;
        
        // Taxa mensal é o valor anual dividido por 12
        const taxaMensal = taxaAnual / 12;
        
        // Determina quantos meses restam no ano atual
        const dataAtual = new Date();
        const mesAtual = dataAtual.getMonth(); // 0-11 (Jan-Dez)
        const mesesRestantes = 12 - mesAtual;
        
        // Total da taxa mensal para os meses restantes
        const totalTaxaMensal = taxaMensal * mesesRestantes;
        
        // Valores fixos
        const taxaEmplacamento = TAXA_EMPLACAMENTO;
        const valorPlaca = VALOR_PLACA;
        const valorHonorarios = VALOR_HONORARIOS;
        const valorTaxaAlienacao = taxaAlienacao ? VALOR_TAXA_ALIENACAO : 0;
        
        // Cálculo do valor total
        const valorTotal = totalTaxaMensal + taxaEmplacamento + valorPlaca + valorHonorarios + valorTaxaAlienacao;
        
        // Detalhamento para exibição
        const detalhamento = {
          taxaMensal,
          mesesRestantes,
          totalTaxaMensal,
          taxaEmplacamento,
          valorPlaca,
          valorHonorarios,
          valorTaxaAlienacao
        };
        
        set({ valorTotal, detalhamento });
      },

      salvarCalculoAtual: () => {
        const { valorNota, tipoVenda, taxaAlienacao, valorTotal, detalhamento, historico } = get();
        
        if (!detalhamento) return;
        
        const novoCalculo: CalculoSalvo = {
          id: Date.now().toString(),
          data: new Date().toLocaleString('pt-BR'),
          valorNota,
          tipoVenda,
          taxaAlienacao,
          valorTotal,
          detalhamento
        };
        
        set({ historico: [novoCalculo, ...historico] });
      },

      limparHistorico: () => set({ historico: [] })
    }),
    {
      name: 'calculadora-storage' // Esta é a chave usada no localStorage
    }
  )
);

export default useCalculadoraStore;