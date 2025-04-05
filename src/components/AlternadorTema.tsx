'use client';

import { useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import useTemaStore from '../store/temaStore';

export default function AlternadorTema() {
  const { temEscuro, alternarTema, setTemEscuro } = useTemaStore();

  useEffect(() => {
    // Verificar preferência do sistema na primeira carga
    if (typeof window !== 'undefined' && window.matchMedia) {
      const prefereDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTemEscuro(prefereDarkMode);
    }
  }, [setTemEscuro]);

  useEffect(() => {
    // Aplicar classe dark ao html quando o tema escuro estiver ativo
    if (temEscuro) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [temEscuro]);

  return (
    <button
      onClick={alternarTema}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
      aria-label={temEscuro ? 'Mudar para tema claro' : 'Mudar para tema escuro'}
    >
      {temEscuro ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
    </button>
  );
}
