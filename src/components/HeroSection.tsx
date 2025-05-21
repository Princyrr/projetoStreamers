import React from 'react';
import { Play, Info } from 'lucide-react';
import { motion } from 'framer-motion';
import { Filme } from '../types/types';
import { Link } from 'react-router-dom';

interface HeroSectionProps {
  filme: Filme;
}

const HeroSection: React.FC<HeroSectionProps> = ({ filme }) => {
  return (
    <div className="relative h-[85vh] max-h-[700px] w-full">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={filme.backdrop}
          alt={filme.titulo}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 h-full flex flex-col justify-end pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          {filme.logo ? (
            <img 
              src={filme.logo} 
              alt={filme.titulo} 
              className="w-[70%] max-w-md mb-6"
            />
          ) : (
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              {filme.titulo}
            </h1>
          )}
          
          <p className="text-base md:text-lg text-gray-200 mb-6 line-clamp-3">
            {filme.descricao}
          </p>
          
          <div className="flex space-x-4">
            <Link 
              to={`/filme/${filme.id}`} 
              className="flex items-center bg-white hover:bg-gray-300 text-black font-medium rounded px-6 py-2 transition-colors"
            >
              <Play className="mr-2 h-5 w-5" />
              Assistir
            </Link>
            <Link 
              to={`/filme/${filme.id}?info=true`} 
              className="flex items-center bg-gray-600/80 hover:bg-gray-700 text-white font-medium rounded px-6 py-2 transition-colors"
            >
              <Info className="mr-2 h-5 w-5" />
              Mais Informações
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;