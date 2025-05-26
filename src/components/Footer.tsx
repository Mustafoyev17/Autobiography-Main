
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-t from-background to-background/50 border-t border-white/10 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold neon-text mb-4">Everest</h3>
            <p className="text-gray-400 leading-relaxed">
              17-year-old Backend Developer & Entrepreneur from Uzbekistan, 
              passionate about building the future through code and innovation.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-neon-blue">Quick Links</h4>
            <div className="space-y-2">
              <a href="about" className="block text-gray-400 hover:text-neon-blue transition-colors">About</a>
              <a href="skills" className="block text-gray-400 hover:text-neon-blue transition-colors">Skills</a>
              <a href="projects" className="block text-gray-400 hover:text-neon-blue transition-colors">Projects</a>
              <a href="contact" className="block text-gray-400 hover:text-neon-blue transition-colors">Contact</a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-neon-purple">Connect</h4>
            <div className="space-y-2">
              <a href="https://github.com/Mustafoyev17" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-neon-purple transition-colors">
                GitHub
              </a>
              <a href="https://www.youtube.com/@Everest_12x" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-neon-purple transition-colors">
                YouTube
              </a>
              <a href="https://t.me/mustafoyev_05_27" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-neon-purple transition-colors">
                Telegram
              </a>
              <a href="https://www.instagram.com/mustafoyev_27.05/" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-neon-purple transition-colors">
                Instagram
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            © {currentYear} Jo'rabek Mustafoyev (Everest). All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="https://everest-rest.onrender.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon-green transition-colors">
              Everest Evolution
            </a>
            <span className="text-gray-600">|</span>
            <span className="text-gray-400">
              Future Company
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
