import React from 'react';
import HeroSection from '../components/HeroSection';
import CategoriaRow from '../components/CategoriaRow';
import { filmesDestaque, todosCategorias } from '../data/filmes';
import { motion } from 'framer-motion';

const HomePage: React.FC = () => {
  // Selecionando um filme aleatório para o destaque
  const filmeDestaque = filmesDestaque[Math.floor(Math.random() * filmesDestaque.length)];
  
  // Animação para as seções
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  
  return (
    <div className="min-h-screen pb-10">
      <HeroSection filme={filmeDestaque} />
      
      <motion.div
        className="mt-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {todosCategorias.map((categoria, index) => (
          <motion.div key={categoria.id} variants={itemVariants}>
            <CategoriaRow 
              titulo={categoria.titulo} 
              filmes={categoria.filmes} 
              categoria={categoria.id} 
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default HomePage;