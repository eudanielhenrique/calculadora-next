import Link from 'next/link';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 bg-white border-t border-gray-200 py-14 text-gray-600">
      <div className="flex flex-col items-center lg:flex-row max-w-6xl mx-auto text-sm gap-10 px-4">
        
        {/* Coluna Esquerda: Marca, Descrição e Redes */}
        <div className="flex flex-col gap-5 items-center lg:items-start w-full lg:w-auto">
          
          <div className="flex flex-col gap-1 items-center lg:items-start text-center lg:text-left max-w-md">
            <div className="flex gap-2 items-center mb-2">
              <img src="/icon/3d-fluency-32.png" alt="logo" className="w-8 h-8" />
              <span className="text-xl font-bold text-gray-800">Calculadora de Emplacamento</span>
            </div>
            <span>Calculadora gratuita para estimativas de taxas de emplacamento e IPVA.</span>
            <span className="text-xs text-gray-500 mt-2">
              Copyright © {currentYear} - Todos os direitos reservados
            </span>
          </div>

          <div className="flex flex-col items-center lg:items-start gap-3 mt-2">
            
            {/* Botão do Desenvolvedor */}
            <a 
              href="https://github.com/eudanielhenrique" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-90 transition-opacity"
            >
              <button className="flex items-center justify-center gap-3 border border-gray-200 rounded-md px-3 py-2 w-52 whitespace-nowrap bg-white text-gray-800 hover:bg-gray-50 transition-colors">
                <span className="font-medium text-sm">Feito por Daniel H</span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/me.webp" className="w-6 h-6 rounded-full object-cover" alt="Daniel H" />
              </button>
            </a>

            {/* Redes Sociais */}
            <div className="flex items-center gap-3 mt-1">
              <span className="text-sm">Me siga no</span>
              
              <a 
                target="_blank" 
                className="flex items-center justify-center bg-gray-50 rounded-full p-1 border border-gray-200 size-8 text-gray-700 hover:text-black hover:border-gray-400 transition-all" 
                aria-label="Github" 
                href="https://github.com/eudanielhenrique"
              >
                <FaGithub size={16} />
              </a>

              <a 
                target="_blank" 
                className="flex items-center justify-center bg-gray-50 rounded-full p-1 border border-gray-200 size-8 text-gray-700 hover:text-blue-500 hover:border-blue-300 transition-all" 
                aria-label="Twitter" 
                href="https://x.com/phdanielhenrque"
              >
                <FaTwitter size={14} />
              </a>

              <a 
                target="_blank" 
                className="flex items-center justify-center bg-gray-50 rounded-full p-1 border border-gray-200 size-8 text-gray-700 hover:text-blue-700 hover:border-blue-500 transition-all" 
                aria-label="LinkedIn" 
                href="https://www.linkedin.com/in/phdanielhenrique/"
              >
                <FaLinkedin size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Coluna Direita: Links de Navegação */}
        <div className="lg:ml-auto flex flex-col sm:flex-row gap-10 lg:gap-20 w-full lg:w-auto justify-center lg:justify-end text-center sm:text-left">
          
          <div className="flex flex-col gap-3">
            <span className="text-gray-400 uppercase font-semibold text-xs tracking-wider">Navegar</span>
            <Link href="/" className="hover:text-blue-600 transition-colors">Carros</Link>
            <Link href="/motos" className="hover:text-blue-600 transition-colors">Motos</Link>
            <Link href="/historico" className="hover:text-blue-600 transition-colors">Histórico</Link>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-gray-400 uppercase font-semibold text-xs tracking-wider">Legal</span>
            <span className="text-gray-400 cursor-not-allowed" title="Em breve">Termos de uso</span>
            <span className="text-gray-400 cursor-not-allowed" title="Em breve">Privacidade</span>
          </div>

        </div>
      </div>
    </footer>
  );
}
