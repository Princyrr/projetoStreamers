import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import DetalhesFilme from './pages/DetalhesFilme';
import Categorias from './pages/Categorias';
import Pesquisa from './pages/Pesquisa';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/filme/:id" element={<DetalhesFilme />} />
          <Route path="/categorias/:categoria" element={<Categorias />} />
          <Route path="/pesquisa" element={<Pesquisa />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;