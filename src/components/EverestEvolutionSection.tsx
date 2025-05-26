
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const EverestEvolutionSection = () => {
  return (
    <section id="everest-evolution" className="py-20 bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="neon-text">Everest Evolution</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            My entrepreneurial journey in transforming the construction tools industry
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="glass-effect neon-border">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-neon-blue to-neon-purple rounded-lg flex items-center justify-center text-2xl font-bold">
                    EE
                  </div>
                  <div>
                    <CardTitle className="text-2xl neon-text">Everest Evolution</CardTitle>
                    <p className="text-gray-400">Construction Tools E-commerce</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  Founded Everest Evolution as a digital-first approach to selling construction tools online. 
                  We're revolutionizing how contractors and builders access quality tools through our 
                  innovative e-commerce platform.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 glass-effect rounded-lg">
                    <div className="text-2xl font-bold text-neon-blue mb-1">500+</div>
                    <div className="text-gray-400 text-sm">Products</div>
                  </div>
                  <div className="text-center p-4 glass-effect rounded-lg">
                    <div className="text-2xl font-bold text-neon-purple mb-1">200+</div>
                    <div className="text-gray-400 text-sm">Happy Customers</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect neon-border">
              <CardHeader>
                <CardTitle className="text-xl text-neon-green">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 leading-relaxed">
                  To bridge the gap between traditional construction supply chains and modern digital commerce, 
                  making quality tools accessible to everyone while building lasting relationships with our customers.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-effect neon-border">
              <CardHeader>
                <CardTitle className="text-xl text-neon-pink">Tech Stack</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {['Node.js', 'React', 'MongoDB', 'Express', 'Stripe', 'AWS'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-neon-blue/20 text-neon-blue rounded-full text-sm border border-neon-blue/50">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <div className="text-center">
              <div className="w-64 h-64 mx-auto bg-gradient-to-br from-neon-blue via-neon-purple to-neon-green rounded-2xl p-1 animate-glow">
                <div className="w-full h-full rounded-2xl bg-background flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🏗️</div>
                    <h3 className="text-2xl font-bold neon-text">Construction</h3>
                    <h3 className="text-2xl font-bold neon-text">Tools</h3>
                    <p className="text-gray-400 mt-2">Premium Quality</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="glass-effect neon-border text-center">
                <CardContent className="p-6">
                  <div className="text-3xl mb-2">🚀</div>
                  <div className="text-lg font-bold text-neon-blue">Fast Delivery</div>
                  <div className="text-gray-400 text-sm">24-48 hours</div>
                </CardContent>
              </Card>
              <Card className="glass-effect neon-border text-center">
                <CardContent className="p-6">
                  <div className="text-3xl mb-2">🛡️</div>
                  <div className="text-lg font-bold text-neon-purple">Quality Assured</div>
                  <div className="text-gray-400 text-sm">Premium brands</div>
                </CardContent>
              </Card>
              <Card className="glass-effect neon-border text-center">
                <CardContent className="p-6">
                  <div className="text-3xl mb-2">💰</div>
                  <div className="text-lg font-bold text-neon-green">Best Prices</div>
                  <div className="text-gray-400 text-sm">Competitive rates</div>
                </CardContent>
              </Card>
              <Card className="glass-effect neon-border text-center">
                <CardContent className="p-6">
                  <div className="text-3xl mb-2">🎯</div>
                  <div className="text-lg font-bold text-neon-pink">Expert Support</div>
                  <div className="text-gray-400 text-sm">24/7 assistance</div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center space-y-4">
              <Button 
                className="bg-gradient-to-r from-neon-blue to-neon-purple hover:shadow-lg hover:shadow-neon-blue/25 transition-all duration-300"
                size="lg"
                asChild
              >
                <a href="https://everestevolution.com" target="_blank" rel="noopener noreferrer">
                  Visit Our Store
                </a>
              </Button>
              <p className="text-gray-400 text-sm">
                Building the future of construction commerce, one tool at a time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EverestEvolutionSection;
