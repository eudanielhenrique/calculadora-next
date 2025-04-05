'use client';

import { useEffect, useState } from 'react';
import useCalculadoraStore from '../store/calculadoraStore';
import Link from 'next/link';
import { FaCalculator, FaMoneyBillWave, FaCarAlt, FaFileInvoiceDollar, FaCheckCircle, FaSave, FaHistory } from 'react-icons/fa';

const Calculadora = () => {
  const {
    valorNota,
    tipoVenda,
    taxaAlienacao,
    valorTaxaAlienacao,
    valorTotal,
    detalhamento,
    setValorNota,
    setTipoVenda,
    setTaxaAlienacao,
    setValorTaxaAlienacao,
    calcularTotal,
    salvarCalculoAtual
  } = useCalculadoraStore();
  
  const [mensagemSucesso, setMensagemSucesso] = useState<string | null>(null);

  useEffect(() => {
    if (valorNota > 0) {
      calcularTotal();
    }
  }, [valorNota, tipoVenda, taxaAlienacao, valorTaxaAlienacao, calcularTotal]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (valorNota > 0) {
      salvarCalculoAtual();
      setMensagemSucesso('Cálculo salvo com sucesso!');
      
      // Remove a mensagem após 3 segundos
      setTimeout(() => {
        setMensagemSucesso(null);
      }, 3000);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-8 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-xl transition-all duration-300 hover:shadow-2xl my-8">
      <div className="flex items-center justify-between mb-6 border-b pb-4 border-gray-200">
        <div className="flex items-center">
          <FaCalculator className="text-3xl text-blue-600 mr-3" />
          <h2 className="text-2xl font-bold text-gray-800 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Calculadora de Taxas
          </h2>
        </div>
        <Link 
          href="/historico"
          className="flex items-center text-blue-600 hover:text-blue-800 transition-colors text-sm"
        >
          <FaHistory className="mr-1" /> Ver histórico
        </Link>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-7">
        <div className="space-y-5">
          <div className="transition-all duration-200 hover:scale-[1.01]">
            <label htmlFor="valorNota" className="flex items-center text-sm font-semibold text-gray-700 mb-2">
              <FaMoneyBillWave className="mr-2 text-green-600" />
              Valor da Nota Fiscal
            </label>
            <div className="relative">
              <input
                type="text"
                id="valorNota"
                value={valorNota ? valorNota.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : ''}
                onChange={(e) => {
                  const value = e.target.value.replace(/[^0-9]/g, '');
                  const numberValue = value ? parseFloat(value) / 100 : 0;
                  setValorNota(numberValue);
                }}
                className="w-full pl-14 pr-4 py-3 bg-white border border-gray-300 rounded-lg shadow-sm text-lg font-medium text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="0,00"
                required
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-4">
                <span className="text-gray-700 font-medium">R$</span>
              </div>
            </div>
          </div>

          <div className="transition-all duration-200 hover:scale-[1.01]">
            <label className="flex items-center text-sm font-semibold text-gray-700 mb-3">
              <FaCarAlt className="mr-2 text-blue-600" />
              Tipo de Venda
            </label>
            <div className="grid grid-cols-2 gap-4">
              <label className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all duration-200 ${tipoVenda === 'direta' ? 'bg-blue-50 border-blue-400 shadow-md' : 'hover:bg-gray-50'}`}>
                <input
                  type="radio"
                  value="direta"
                  checked={tipoVenda === 'direta'}
                  onChange={(e) => setTipoVenda(e.target.value as 'direta' | 'estoque')}
                  className="h-5 w-5 text-blue-600"
                />
                <span className="ml-3 text-gray-700 font-medium">Venda Direta <span className="text-blue-700">(2%)</span></span>
              </label>
              <label className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all duration-200 ${tipoVenda === 'estoque' ? 'bg-blue-50 border-blue-400 shadow-md' : 'hover:bg-gray-50'}`}>
                <input
                  type="radio"
                  value="estoque"
                  checked={tipoVenda === 'estoque'}
                  onChange={(e) => setTipoVenda(e.target.value as 'direta' | 'estoque')}
                  className="h-5 w-5 text-blue-600"
                />
                <span className="ml-3 text-gray-700 font-medium">Venda Estoque <span className="text-blue-700">(1%)</span></span>
              </label>
            </div>
          </div>

          <div className={`p-4 border rounded-lg hover:bg-gray-50 cursor-pointer transition-all duration-200 ${taxaAlienacao ? 'bg-blue-50 border-blue-400 shadow-md' : ''}`}>
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={taxaAlienacao}
                onChange={(e) => {
                  setTaxaAlienacao(e.target.checked);
                  if (e.target.checked) {
                    setValorTaxaAlienacao();
                  }
                }}
                className="h-5 w-5 text-blue-600 rounded"
              />
              <span className="ml-3 text-gray-700 font-medium">Incluir Taxa de Alienação <span className="text-blue-700">(R$ 140,00)</span></span>
            </label>
          </div>
        </div>

        <div className="border rounded-lg p-5 bg-gradient-to-r from-gray-50 to-white shadow-sm">
          <h2 className="flex items-center text-sm font-semibold text-gray-700 mb-3">
            <FaFileInvoiceDollar className="mr-2 text-indigo-600" />
            Valores Fixos Incluídos
          </h2>
          <ul className="text-sm text-gray-700 space-y-2 pl-7">
            <li className="flex items-center">
              <div className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></div>
              Taxa de primeiro emplacamento: <span className="font-medium ml-1">R$ 435,00</span>
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></div>
              Placa: <span className="font-medium ml-1">R$ 290,00</span>
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></div>
              Honorários: <span className="font-medium ml-1">R$ 200,00</span>
            </li>
          </ul>
        </div>

        <div className="border rounded-lg p-5 bg-gradient-to-r from-blue-50 to-white shadow-md space-y-4">
          <div>
            <h3 className="flex items-center text-sm font-semibold text-gray-700 mb-3">
              <FaCheckCircle className="mr-2 text-green-600" />
              Detalhamento do Cálculo
            </h3>
            {detalhamento && (
              <div className="space-y-3 mt-3">
                <p className="text-sm font-medium text-gray-800 bg-blue-100 inline-block py-1 px-3 rounded-full">
                  {tipoVenda === 'direta' ? 'Venda Direta (2%)' : 'Venda Estoque (1%)'}
                </p>
                <div className="grid grid-cols-2 gap-3 mt-2">
                  <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-100">
                    <p className="text-xs text-gray-500 mb-1">Valor mensal</p>
                    <p className="text-sm font-semibold text-gray-800">
                      R$ {detalhamento.taxaMensal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </p>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-100">
                    <p className="text-xs text-gray-500 mb-1">Meses restantes</p>
                    <p className="text-sm font-semibold text-gray-800">
                      {detalhamento.mesesRestantes}
                    </p>
                  </div>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-100">
                  <p className="text-xs text-gray-500 mb-1">Total do IPVA</p>
                  <p className="text-sm font-semibold text-gray-800">
                    R$ {detalhamento.totalTaxaMensal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </p>
                </div>

                <div className="border-t border-gray-200 my-3 pt-3">
                  <h4 className="text-xs uppercase text-gray-500 mb-3 font-semibold">Taxas adicionais</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-100">
                      <p className="text-xs text-gray-500 mb-1">Taxa de emplacamento</p>
                      <p className="text-sm font-semibold text-gray-800">
                        R$ {detalhamento.taxaEmplacamento.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                      </p>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-100">
                      <p className="text-xs text-gray-500 mb-1">Valor da placa</p>
                      <p className="text-sm font-semibold text-gray-800">
                        R$ {detalhamento.valorPlaca.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                      </p>
                    </div>
                  </div>
                  <div className="mt-3 grid grid-cols-2 gap-3">
                    <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-100">
                      <p className="text-xs text-gray-500 mb-1">Honorários</p>
                      <p className="text-sm font-semibold text-gray-800">
                        R$ {detalhamento.valorHonorarios.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                      </p>
                    </div>
                    {taxaAlienacao && (
                      <div className="bg-white p-3 rounded-lg shadow-sm border border-blue-100">
                        <p className="text-xs text-gray-500 mb-1">Taxa de alienação</p>
                        <p className="text-sm font-semibold text-gray-800">
                          R$ {detalhamento.valorTaxaAlienacao.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="border-t border-gray-200 pt-5">
            <div className="flex justify-between items-center bg-gradient-to-r from-blue-600 to-indigo-600 p-4 rounded-lg text-white shadow-lg">
              <h2 className="text-base font-medium">Valor Total:</h2>
              <p className="text-2xl font-bold">
                R$ {valorTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </p>
            </div>
          </div>
        </div>

        {mensagemSucesso && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg flex items-center justify-center animate-fade-in-out">
            <FaCheckCircle className="mr-2" />
            {mensagemSucesso}
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-4 px-6 rounded-lg hover:from-blue-700 hover:to-indigo-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 transform hover:scale-[1.01] flex items-center justify-center font-semibold text-lg"
        >
          <FaSave className="mr-2" /> Salvar Cálculo
        </button>
      </form>
    </div>
  );
};

export default Calculadora;