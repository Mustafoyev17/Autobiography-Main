
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="neon-text">Me</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Learn more about my journey, passion, and vision
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-in-left">
            <Card className="glass-effect neon-border">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-neon-blue">My Story</h3>
                <p className="text-gray-300 leading-relaxed">
                  At just 17 years old, I've already embarked on an incredible journey in the world of technology. 
                  Based in Uzbekistan, I'm passionate about backend development and have founded my own company, 
                  Everest Evolution, which specializes in selling construction tools online.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-effect neon-border">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-neon-purple">What Drives Me</h3>
                <p className="text-gray-300 leading-relaxed">
                  I believe in the power of technology to transform lives. Whether it's building fullstack 
                  applications with Node.js and React, creating content on YouTube, or exploring AI and 
                  microservices, I'm always pushing the boundaries of what's possible.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-effect neon-border">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-neon-green">Beyond Code</h3>
                <p className="text-gray-300 leading-relaxed">
                  When I'm not coding, you can find me creating YouTube content, exploring trading strategies, 
                  or working on innovative projects like camera gesture control apps. I'm fascinated by AI 
                  and love building tools that make people's lives easier.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <div className="relative inline-block">
              <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-neon-blue via-neon-purple to-neon-pink p-1 animate-glow">
                <div className="w-full h-full rounded-2xl bg-background flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">👨‍💻</div>
                    <h3 className="text-2xl font-bold neon-text">Jo'rabek Mustafoyev</h3>
                    <p className="text-neon-blue">aka Everest</p>
                    <p className="text-gray-400 mt-2">Backend Developer</p>
                    <p className="text-gray-400">Entrepreneur</p>
                    <p className="text-gray-400">Content Creator</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <div className="glass-effect neon-border rounded-lg p-4">
                <h4 className="font-bold text-neon-blue mb-2">Location</h4>
                <p className="text-gray-300">🇺🇿 Uzbekistan</p>
              </div>
              <div className="glass-effect neon-border rounded-lg p-4">
                <h4 className="font-bold text-neon-purple mb-2">Age</h4>
                <p className="text-gray-300">17 years old</p>
              </div>
              <div className="glass-effect neon-border rounded-lg p-4">
                <h4 className="font-bold text-neon-green mb-2">Focus</h4>
                <p className="text-gray-300">Backend Development & AI</p>
              </div>
            </div>
          </div>
        </div>

        {/* Motivational Quote */}
        <div className="mt-20 text-center">
          <Card className="glass-effect neon-border max-w-4xl mx-auto">
            <CardContent className="p-8">
              <blockquote className="text-2xl md:text-3xl font-light italic text-gray-300 mb-4">
                "The best way to predict the future is to create it."
              </blockquote>
              <p className="text-neon-blue font-semibold">- My Philosophy</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
