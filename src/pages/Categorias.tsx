import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { todosCategorias } from '../data/filmes';
import { Filme } from '../types/types';
import FilmeCard from '../components/FilmeCard';
import { motion } from 'framer-motion';

const Categorias: React.FC = () => {
  const { categoria } = useParams<{ categoria: string }>();
  const [filmes, setFilmes] = useState<Filme[]>([]);
  const [titulo, setTitulo] = useState('');
  
  useEffect(() => {
    if (categoria) {
      const categoriaEncontrada = todosCategorias.find(cat => cat.id === categoria);
      
      if (categoriaEncontrada) {
        setFilmes(categoriaEncontrada.filmes);
        setTitulo(categoriaEncontrada.titulo);
      } else {
        setFilmes([]);
        setTitulo('Categoria não encontrada');
      }
    }
  }, [categoria]);
  
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container-custom">
        <motion.h1 
          className="text-3xl font-bold text-white mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {titulo}
        </motion.h1>
        
        {filmes.length > 0 ? (
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {filmes.map((filme) => (
              <FilmeCard key={filme.id} filme={filme} />
            ))}
          </motion.div>
        ) : (
          <motion.div 
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xl text-gray-400">Nenhum filme encontrado nesta categoria.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Categorias;