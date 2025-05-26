
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 via-transparent to-neon-purple/10"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-blue/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in">
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple p-1 animate-glow">
            <div className="w-full h-full rounded-full bg-background flex items-center justify-center text-4xl font-bold">
              E
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm <span className="neon-text">Jo'rabek Mustafoyev</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-gray-400 mb-4">
            Also known as <span className="text-neon-blue">Everest</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            17-year-old Backend Developer & Entrepreneur from Uzbekistan
          </p>
          
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Passionate about building fullstack applications, creating YouTube content, 
            and founder of Everest Evolution - transforming ideas into digital reality.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://everest-rest.onrender.com/"><Button 
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-neon-blue to-neon-purple hover:shadow-lg hover:shadow-neon-blue/25 transition-all duration-300"
              size="lg"
            >
              View My Work
            </Button></a>
            <a href="https://github.com/Mustafoyev17/everest-restaurant"><Button 
              onClick={() => scrollToSection('contact')}
              variant="outline" 
              className="border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-black transition-all duration-300"
              size="lg"
            >
              Get In Touch
            </Button></a>
          </div>
          
          <div className="mt-12 flex justify-center space-x-6">
            <a 
              href="https://github.com/Mustafoyev17" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-neon-blue transition-colors text-2xl"
            >
              GitHub
            </a>
            <a 
              href="https://www.youtube.com/@Everest_12x" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-neon-blue transition-colors text-2xl"
            >
              YouTube
            </a>
            <a 
              href="https://t.me/mustafoyev_05_27" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-neon-blue transition-colors text-2xl"
            >
              Telegram
            </a>
            <a 
              href="https://www.instagram.com/mustafoyev_27.05/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-neon-blue transition-colors text-2xl"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
