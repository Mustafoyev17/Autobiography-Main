
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  isDark: boolean;
  setIsDark: (value: boolean) => void;
}

const Header = ({ isDark, setIsDark }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 w-full z-50 glass-effect border-b border-white/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold neon-text">
            Everest
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`transition-colors ${isActive('/') ? 'text-neon-blue' : 'hover:text-neon-blue'}`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`transition-colors ${isActive('/about') ? 'text-neon-blue' : 'hover:text-neon-blue'}`}
            >
              About
            </Link>
            <Link 
              to="/skills" 
              className={`transition-colors ${isActive('/skills') ? 'text-neon-blue' : 'hover:text-neon-blue'}`}
            >
              Skills
            </Link>
            <Link 
              to="/projects" 
              className={`transition-colors ${isActive('/projects') ? 'text-neon-blue' : 'hover:text-neon-blue'}`}
            >
              Projects
            </Link>
            <Link 
              to="/youtube" 
              className={`transition-colors ${isActive('/youtube') ? 'text-neon-blue' : 'hover:text-neon-blue'}`}
            >
              YouTube
            </Link>
            <Link 
              to="/contact" 
              className={`transition-colors ${isActive('/contact') ? 'text-neon-blue' : 'hover:text-neon-blue'}`}
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">

<Button
  variant="ghost"
  size="sm"
  onClick={() => setIsDark(!isDark)}
  className="hover:bg-white/10"
>
  {isDark ? (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
  ) : (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" />
  </svg>
  )}
</Button>

            
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              ☰
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-2">
            <Link 
              to="/" 
              onClick={() => setIsMenuOpen(false)}
              className={`block w-full text-left py-2 transition-colors ${isActive('/') ? 'text-neon-blue' : 'hover:text-neon-blue'}`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              onClick={() => setIsMenuOpen(false)}
              className={`block w-full text-left py-2 transition-colors ${isActive('/about') ? 'text-neon-blue' : 'hover:text-neon-blue'}`}
            >
              About
            </Link>
            <Link 
              to="/skills" 
              onClick={() => setIsMenuOpen(false)}
              className={`block w-full text-left py-2 transition-colors ${isActive('/skills') ? 'text-neon-blue' : 'hover:text-neon-blue'}`}
            >
              Skills
            </Link>
            <Link 
              to="/projects" 
              onClick={() => setIsMenuOpen(false)}
              className={`block w-full text-left py-2 transition-colors ${isActive('/projects') ? 'text-neon-blue' : 'hover:text-neon-blue'}`}
            >
              Projects
            </Link>
            <Link 
              to="/youtube" 
              onClick={() => setIsMenuOpen(false)}
              className={`block w-full text-left py-2 transition-colors ${isActive('/youtube') ? 'text-neon-blue' : 'hover:text-neon-blue'}`}
            >
              YouTube
            </Link>
            <Link 
              to="/contact" 
              onClick={() => setIsMenuOpen(false)}
              className={`block w-full text-left py-2 transition-colors ${isActive('/contact') ? 'text-neon-blue' : 'hover:text-neon-blue'}`}
            >
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
