import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Film, Search, Menu, X, Bell, User } from 'lucide-react';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/pesquisa?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-background shadow-lg' : 'bg-gradient-to-b from-background/90 to-transparent'
      }`}
    >
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <Film className="h-8 w-8 text-primary mr-2" />
            <span className="text-2xl font-bold text-white">Vibe<span className="text-primary">Filmes</span></span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link to="/" className="nav-link nav-link-active">Início</Link>
            <Link to="/categorias/filmes" className="nav-link">Filmes</Link>
            <Link to="/categorias/series" className="nav-link">Séries</Link>
            <Link to="/categorias/lancamentos" className="nav-link">Lançamentos</Link>
            <Link to="/categorias/favoritos" className="nav-link">Minha Lista</Link>
          </nav>

          {/* Search and User Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Buscar..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-[#333333] text-white rounded-full py-1 px-4 pl-10 focus:outline-none focus:ring-1 focus:ring-primary w-48"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            </form>
            <Bell className="h-6 w-6 text-gray-300 hover:text-white cursor-pointer" />
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center cursor-pointer">
              <User className="h-5 w-5 text-white" />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-2 border-t border-gray-700">
            <nav className="flex flex-col space-y-3 pb-3">
              <Link to="/" className="nav-link nav-link-active">Início</Link>
              <Link to="/categorias/filmes" className="nav-link">Filmes</Link>
              <Link to="/categorias/series" className="nav-link">Séries</Link>
              <Link to="/categorias/lancamentos" className="nav-link">Lançamentos</Link>
              <Link to="/categorias/favoritos" className="nav-link">Minha Lista</Link>
            </nav>
            <form onSubmit={handleSearch} className="relative mt-3">
              <input
                type="text"
                placeholder="Buscar..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-[#333333] text-white rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-1 focus:ring-primary w-full"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            </form>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;