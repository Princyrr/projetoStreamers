import React from 'react';
import { Link } from 'react-router-dom';
import { Film, Instagram, Twitter, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0F0F0F] text-gray-300 pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link to="/" className="flex items-center mb-4">
              <Film className="h-6 w-6 text-primary mr-2" />
              <span className="text-xl font-bold text-white">Vibe<span className="text-primary">Filmes</span></span>
            </Link>
            <p className="text-sm text-gray-400">
              A melhor plataforma de streaming com os últimos lançamentos e clássicos do cinema.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-medium mb-4 text-lg">Navegação</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Início</Link></li>
              <li><Link to="/categorias/filmes" className="text-gray-400 hover:text-white transition-colors">Filmes</Link></li>
              <li><Link to="/categorias/series" className="text-gray-400 hover:text-white transition-colors">Séries</Link></li>
              <li><Link to="/categorias/lancamentos" className="text-gray-400 hover:text-white transition-colors">Lançamentos</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-medium mb-4 text-lg">Categorias</h3>
            <ul className="space-y-2">
              <li><Link to="/categorias/acao" className="text-gray-400 hover:text-white transition-colors">Ação</Link></li>
              <li><Link to="/categorias/comedia" className="text-gray-400 hover:text-white transition-colors">Comédia</Link></li>
              <li><Link to="/categorias/drama" className="text-gray-400 hover:text-white transition-colors">Drama</Link></li>
              <li><Link to="/categorias/terror" className="text-gray-400 hover:text-white transition-colors">Terror</Link></li>
              <li><Link to="/categorias/romance" className="text-gray-400 hover:text-white transition-colors">Romance</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-medium mb-4 text-lg">Suporte</h3>
            <ul className="space-y-2">
              <li><Link to="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/contato" className="text-gray-400 hover:text-white transition-colors">Contato</Link></li>
              <li><Link to="/termos" className="text-gray-400 hover:text-white transition-colors">Termos de Uso</Link></li>
              <li><Link to="/privacidade" className="text-gray-400 hover:text-white transition-colors">Política de Privacidade</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 mt-6 text-sm text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} VibeFilmes.  Feito por Priscila Ramonnna  - Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;