'use client';

import { useState } from 'react';
import useCalculadoraStore from '../../store/calculadoraStore';
import { FaHistory, FaTrash, FaSearch, FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';

export default function Historico() {
  const { historico, limparHistorico } = useCalculadoraStore();
  const [termoBusca, setTermoBusca] = useState('');
  const [filtroTipo, setFiltroTipo] = useState<'todos' | 'direta' | 'estoque'>('todos');

  const historicoFiltrado = historico.filter(item => {
    const matchTermo = item.valorNota.toString().includes(termoBusca) || 
                      item.data.includes(termoBusca);
    const matchTipo = filtroTipo === 'todos' || item.tipoVenda === filtroTipo;
    return matchTermo && matchTipo;
  });

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <FaHistory className="text-3xl text-blue-600 mr-3" />
          <h1 className="text-2xl font-bold text-gray-800">Histórico de Cálculos</h1>
        </div>
        <Link href="/" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
          <FaArrowLeft className="mr-2" /> Voltar para calculadora
        </Link>
      </div>

      <div className="mb-6 bg-white p-4 rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="relative flex-grow">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Pesquisar no histórico..."
              value={termoBusca}
              onChange={(e) => setTermoBusca(e.target.value)}
              className="pl-10 pr-4 py-2 w-full border border-gray-300 bg-white text-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div className="flex items-center space-x-4">
            <select
              value={filtroTipo}
              onChange={(e) => setFiltroTipo(e.target.value as 'todos' | 'direta' | 'estoque')}
              className="px-4 py-2 border border-gray-300 bg-white text-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="todos">Todos os tipos</option>
              <option value="direta">Venda Direta</option>
              <option value="estoque">Venda Estoque</option>
            </select>
            
            <button
              onClick={() => {
                if (window.confirm('Tem certeza que deseja limpar todo o histórico?')) {
                  limparHistorico();
                }
              }}
              className="flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
            >
              <FaTrash className="mr-2" /> Limpar
            </button>
          </div>
        </div>
      </div>

      {historicoFiltrado.length > 0 ? (
        <div className="space-y-4">
          {historicoFiltrado.map((calculo) => (
            <div key={calculo.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex justify-between mb-4">
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">
                    R$ {calculo.valorNota.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </h2>
                  <p className="text-sm text-gray-600">
                    {calculo.tipoVenda === 'direta' ? 'Venda Direta (2%)' : 'Venda Estoque (1%)'}
                    {calculo.taxaAlienacao && ' • Com alienação'}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-blue-700">
                    R$ {calculo.valorTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </p>
                  <p className="text-xs text-gray-500">{calculo.data}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4">
                <div className="bg-gray-50 p-2 rounded">
                  <p className="text-xs text-gray-500">IPVA Mensal</p>
                  <p className="font-medium text-gray-800">
                    R$ {calculo.detalhamento.taxaMensal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </p>
                </div>
                <div className="bg-gray-50 p-2 rounded">
                  <p className="text-xs text-gray-500">Meses Restantes</p>
                  <p className="font-medium text-gray-800">{calculo.detalhamento.mesesRestantes}</p>
                </div>
                <div className="bg-gray-50 p-2 rounded">
                  <p className="text-xs text-gray-500">Total IPVA</p>
                  <p className="font-medium text-gray-800">
                    R$ {calculo.detalhamento.totalTaxaMensal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white p-8 rounded-lg shadow text-center">
          <p className="text-lg text-gray-600">Nenhum cálculo encontrado</p>
          <p className="text-sm text-gray-500 mt-2">
            {historico.length > 0 
              ? 'Tente ajustar seus filtros de busca' 
              : 'Faça um cálculo na calculadora para registrar no histórico'}
          </p>
        </div>
      )}
    </div>
  );
}
