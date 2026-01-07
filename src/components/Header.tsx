import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto py-3 px-4 flex justify-between items-center">
        {/* Logo e Título */}
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <img src="/icon/3d-fluency-32.png" alt="Logo" className="w-8 h-8" />
          <h1 className="text-xl font-bold text-gray-800">Calculadora de Emplacamento</h1>
        </Link>
        

      </div>
    </header>
  );
}
