import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-50 border-t border-slate-100 py-6 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        
        {/* Direitos Autorais */}
        <p className="text-xs sm:text-sm text-slate-500">
          © {currentYear} <span className="font-semibold text-slate-700">Algodão Doce</span>. Todos os direitos reservados.
        </p>

        {/* Mensagem */}
        <p className="text-xs sm:text-sm text-slate-400 italic">
          Feito com carinho para você.
        </p>

      </div>
    </footer>
  );
}