import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { buscarFilmePorId } from '../data/filmes';
import { Filme } from '../types/types';
import { Play, Plus, Star, Clock, Calendar, Film, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const DetalhesFilme: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [filme, setFilme] = useState<Filme | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (id) {
      const filmeEncontrado = buscarFilmePorId(parseInt(id, 10));
      if (filmeEncontrado) {
        setFilme(filmeEncontrado);
      }
      setLoading(false);
    }
  }, [id]);
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }
  
  if (!filme) {
    return (
      <div className="min-h-screen pt-32 container-custom text-center">
        <h1 className="text-2xl font-bold text-white mb-4">Filme não encontrado</h1>
        <p className="text-gray-400 mb-6">O filme que você está procurando não está disponível.</p>
        <button 
          onClick={() => navigate('/')}
          className="btn-primary"
        >
          Voltar para o início
        </button>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen pb-20">
      {/* Banner do filme */}
      <div className="relative h-[70vh]">
        <img 
          src={filme.backdrop} 
          alt={filme.titulo} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container-custom">
            <button 
              onClick={() => navigate(-1)}
              className="flex items-center text-white mb-6 hover:text-primary transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Voltar
            </button>
          </div>
        </div>
      </div>
      
      <div className="container-custom -mt-40 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Poster e botões */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img 
                src={filme.poster} 
                alt={filme.titulo} 
                className="w-full h-auto"
              />
            </div>
            
            <div className="mt-6 flex flex-col space-y-3">
              <button className="btn-primary flex items-center justify-center">
                <Play className="h-5 w-5 mr-2" />
                Assistir
              </button>
              
              <button className="btn-secondary flex items-center justify-center">
                <Plus className="h-5 w-5 mr-2" />
                Adicionar à minha lista
              </button>
            </div>
          </motion.div>
          
          {/* Informações do filme */}
          <motion.div 
            className="md:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              {filme.titulo}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-500 mr-1" />
                <span className="text-white font-medium">{filme.avaliacao.toFixed(1)}</span>
              </div>
              
              <div className="flex items-center text-gray-400">
                <Clock className="h-4 w-4 mr-1" />
                <span>{filme.duracao}</span>
              </div>
              
              <div className="flex items-center text-gray-400">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{filme.ano}</span>
              </div>
              
              <div className="flex items-center text-gray-400">
                <Film className="h-4 w-4 mr-1" />
                <span>{filme.classificacao}</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {filme.generos.map((genero, index) => (
                <span 
                  key={index} 
                  className="bg-[#333333] text-white px-3 py-1 rounded-full text-sm"
                >
                  {genero}
                </span>
              ))}
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-2">Sinopse</h2>
              <p className="text-gray-300 leading-relaxed">{filme.descricao}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h2 className="text-xl font-semibold text-white mb-2">Diretor</h2>
                <p className="text-gray-300">{filme.diretor}</p>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-white mb-2">Elenco</h2>
                <div className="text-gray-300">
                  {filme.elenco.map((ator, index) => (
                    <div key={index} className="mb-1">
                      {ator}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DetalhesFilme;