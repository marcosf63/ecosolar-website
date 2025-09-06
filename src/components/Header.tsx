'use client';

import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-orange-400 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">E</span>
            </div>
            <span className="text-xl font-bold text-gray-800">EcoSolar</span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8">
            <li><a href="#home" className="text-gray-700 hover:text-purple-600 transition-colors">Início</a></li>
            <li><a href="#calculator" className="text-gray-700 hover:text-purple-600 transition-colors">Calcular</a></li>
            <li><a href="#how-works" className="text-gray-700 hover:text-purple-600 transition-colors">Como funciona</a></li>
            <li><a href="#benefits" className="text-gray-700 hover:text-purple-600 transition-colors">Vantagens</a></li>
            <li><a href="#plants" className="text-gray-700 hover:text-purple-600 transition-colors">Usinas</a></li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col space-y-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="block w-6 h-0.5 bg-gray-700"></span>
            <span className="block w-6 h-0.5 bg-gray-700"></span>
            <span className="block w-6 h-0.5 bg-gray-700"></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <ul className="space-y-3">
              <li><a href="#home" className="block text-gray-700 hover:text-purple-600 transition-colors">Início</a></li>
              <li><a href="#calculator" className="block text-gray-700 hover:text-purple-600 transition-colors">Calcular</a></li>
              <li><a href="#how-works" className="block text-gray-700 hover:text-purple-600 transition-colors">Como funciona</a></li>
              <li><a href="#benefits" className="block text-gray-700 hover:text-purple-600 transition-colors">Vantagens</a></li>
              <li><a href="#plants" className="block text-gray-700 hover:text-purple-600 transition-colors">Usinas</a></li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;