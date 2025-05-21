import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { buscarFilmes } from '../data/filmes';
import { Filme } from '../types/types';
import FilmeCard from '../components/FilmeCard';
import { Search } from 'lucide-react';
import { motion } from 'framer-motion';

const Pesquisa: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [termo, setTermo] = useState(searchParams.get('q') || '');
  const [resultados, setResultados] = useState<Filme[]>([]);
  const [buscando, setBuscando] = useState(false);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (termo.trim()) {
      setSearchParams({ q: termo });
      const encontrados = buscarFilmes(termo);
      setResultados(encontrados);
      setBuscando(false);
    }
  };
  
  useEffect(() => {
    const query = searchParams.get('q');
    if (query) {
      setTermo(query);
      setBuscando(true);
      
      // Simular um pequeno tempo de carregamento para demonstrar a UX
      const timer = setTimeout(() => {
        const encontrados = buscarFilmes(query);
        setResultados(encontrados);
        setBuscando(false);
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, [searchParams]);
  
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container-custom">
        <motion.h1 
          className="text-3xl font-bold text-white mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Pesquisa
        </motion.h1>
        
        <motion.form 
          onSubmit={handleSearch}
          className="mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="relative">
            <input
              type="text"
              value={termo}
              onChange={(e) => setTermo(e.target.value)}
              placeholder="Busque por filmes, séries, gêneros..."
              className="w-full bg-[#333333] text-white rounded-full py-3 px-6 pl-12 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <button 
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary hover:bg-primary/80 text-white rounded-full px-6 py-1.5 transition-colors"
            >
              Buscar
            </button>
          </div>
        </motion.form>
        
        {buscando ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : (
          <>
            {searchParams.get('q') && (
              <motion.div 
                className="mb-6 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <p className="text-gray-400">
                  {resultados.length === 0 
                    ? `Nenhum resultado encontrado para "${searchParams.get('q')}"` 
                    : `${resultados.length} resultados encontrados para "${searchParams.get('q')}"`}
                </p>
              </motion.div>
            )}
            
            {resultados.length > 0 && (
              <motion.div 
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {resultados.map((filme) => (
                  <FilmeCard key={filme.id} filme={filme} />
                ))}
              </motion.div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Pesquisa;