import React from 'react';
import FilmeCard from './FilmeCard';
import { Filme } from '../types/types';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CategoriaRowProps {
  titulo: string;
  filmes: Filme[];
  categoria: string;
}

const CategoriaRow: React.FC<CategoriaRowProps> = ({ titulo, filmes, categoria }) => {
  return (
    <section className="categoria-row">
      <div className="container-custom">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-xl md:text-2xl font-medium text-white">{titulo}</h2>
          <Link 
            to={`/categorias/${categoria}`} 
            className="flex items-center text-sm text-gray-400 hover:text-white transition-colors"
          >
            Ver todos <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
        
        <div className="scroll-container">
          {filmes.map((filme) => (
            <FilmeCard key={filme.id} filme={filme} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriaRow;