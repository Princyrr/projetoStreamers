import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Plus } from 'lucide-react';
import { motion } from 'framer-motion';
import { Filme } from '../types/types';

interface FilmeCardProps {
  filme: Filme;
  destaque?: boolean;
}

const FilmeCard: React.FC<FilmeCardProps> = ({ filme, destaque = false }) => {
  return (
    <motion.div 
      className={`filme-card group ${destaque ? 'w-full' : 'w-[200px] flex-shrink-0 snap-start'}`}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      <Link to={`/filme/${filme.id}`} className="block relative">
        <div className="relative overflow-hidden">
          <img 
            src={filme.poster} 
            alt={filme.titulo} 
            className={`w-full object-cover ${destaque ? 'h-[400px] md:h-[500px]' : 'h-[300px]'}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
            <div className="flex space-x-2 mb-2">
              <button className="bg-white rounded-full p-2 hover:bg-gray-200 transition-colors">
                <Play size={16} className="text-black" />
              </button>
              <button className="bg-[#333333]/80 rounded-full p-2 hover:bg-[#444444] transition-colors">
                <Plus size={16} className="text-white" />
              </button>
            </div>
            <h3 className="text-white font-medium text-sm md:text-base">{filme.titulo}</h3>
            <div className="flex items-center space-x-2 mt-1">
              <span className="text-green-500 text-xs">{filme.avaliacao * 10}% relevante</span>
              <span className="text-xs text-gray-400">{filme.ano}</span>
              {filme.classificacao && (
                <span className="border border-gray-500 text-gray-400 text-xs px-1">{filme.classificacao}</span>
              )}
            </div>
            <div className="text-xs text-gray-300 mt-1 line-clamp-2">{filme.generos.join(' • ')}</div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default FilmeCard;