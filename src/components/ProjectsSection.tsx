import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: 'Everest Restaurant',
      description: 'Full-stack movie streaming platform with user authentication, ratings, and recommendations.',
      longDescription: 'A comprehensive movie platform built with Node.js and React. Features include user authentication, movie browsing, ratings system, watchlists, and AI-powered recommendations. Integrated with external APIs for movie data and implemented a robust backend with Express and MongoDB.',
      technologies: ['Node.js', 'React', 'MongoDB', 'Express', 'API Integration'],
      image: '🍽️🥩',
      github: '',
      demo: '',
      featured: true
    },
    {
      id: 2,
      title: 'E-commerce Store',
      description: 'Modern e-commerce solution with payment integration and admin dashboard.',
      longDescription: 'Complete e-commerce platform featuring product catalog, shopping cart, secure payment processing, order management, and admin dashboard. Built with modern web technologies and includes inventory management, user profiles, and analytics.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API', 'Tailwind CSS'],
      image: '🛒⛏️',
      github: 'https://github.com/Mustafoyev17/everestevolution-tool-market',
      demo: 'https://everestevolution-tool-market.onrender.com',
      featured: true
    },
    {
      id: 3,
      title: 'AI Chatbot',
      description: 'Intelligent chatbot with natural language processing and machine learning.',
      longDescription: 'Advanced AI chatbot using natural language processing to understand and respond to user queries. Integrated with multiple AI services and trained on custom datasets. Features conversation memory, context awareness, and multi-language support.',
      technologies: ['Python', 'TensorFlow', 'Node.js', 'OpenAI API', 'NLP'],
      image: '🤖',
      github: 'https://github.com/Mustafoyev17/landingpage',
      demo: 'https://everestevolution/chatbot.onrender.com',
      featured: false
    },
    {
      id: 4,
      title: '11-"A" class',
      description: 'Computer vision app for controlling devices with hand gestures.',
      longDescription: 'Innovative camera-based gesture control system using computer vision and machine learning. Allows users to control applications and devices using hand gestures detected through webcam. Includes customizable gesture recognition and real-time processing.',
      technologies: ['Python', 'OpenCV', 'MediaPipe', 'TensorFlow', 'Computer Vision'],
      image: '🏫',
      github: 'https://github.com/everest/gesture-control',
      demo: 'https://everest-gestures.vercel.app',
      featured: false
    },
    {
      id: 5,
      title: 'Microservices API',
      description: 'Scalable microservices architecture with Docker and Kubernetes.',
      longDescription: 'Comprehensive microservices architecture demonstrating scalable backend design. Includes user service, product service, order service, and notification service. Implemented with Docker containers, Kubernetes orchestration, and API gateway pattern.',
      technologies: ['Node.js', 'Docker', 'Kubernetes', 'MongoDB', 'Redis'],
      image: '⚙️',
      github: '#',
      demo: '#',
      featured: false
    },
    {
      id: 6,
      title: 'Everest Dinner',
      description: 'Real-time shopping and reservation meals and book.',
      longDescription: 'Professional trading dashboard with real-time market data, portfolio tracking, risk analysis, and automated trading strategies. Includes technical indicators, price alerts, and comprehensive analytics for informed trading decisions.',
      technologies: ['React', 'Node.js', 'WebSocket', 'Trading APIs', 'Chart.js'],
      image: '🍴',
      github: 'https://github.com/Mustafoyev17/everest-dinner',
      demo: 'https://everest-dinner.onrender.com',
      featured: false
    },
        {
      id: 6,
      title: 'Everest Tool market',
      description: 'Real-time trading analytics and portfolio management dashboard.',
      longDescription: 'Professional trading dashboard with real-time market data, portfolio tracking, risk analysis, and automated trading strategies. Includes technical indicators, price alerts, and comprehensive analytics for informed trading decisions.',
      technologies: ['React', 'Node.js', 'WebSocket', 'Trading APIs', 'Chart.js'],
      image: '🔨',
      github: 'https://github.com/Mustafoyev17/everestevolution',
      demo: 'https://everest-dinner.onrender.com',
      featured: false
    },
        {
      id: 6,
      title: 'Everest Dinner',
      description: 'Real-time trading analytics and portfolio management dashboard.',
      longDescription: 'Professional trading dashboard with real-time market data, portfolio tracking, risk analysis, and automated trading strategies. Includes technical indicators, price alerts, and comprehensive analytics for informed trading decisions.',
      technologies: ['React', 'Node.js', 'WebSocket', 'Trading APIs', 'Chart.js'],
      image: '🍴',
      github: 'https://github.com/Mustafoyev17/everest-dinner',
      demo: 'https://everest-dinner.onrender.com',
      featured: false
    }
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="neon-text">My Projects</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            A showcase of applications and tools I've built with passion and precision
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-neon-blue">Featured Projects</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <Card key={project.id} className="glass-effect neon-border hover:shadow-lg hover:shadow-neon-blue/25 transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardHeader>
                  <div className="text-6xl text-center mb-4">{project.image}</div>
                  <CardTitle className="text-xl font-bold text-center">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-300 text-center">{project.description}</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-neon-blue/20 text-neon-blue border-neon-blue/50">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex justify-center space-x-4 pt-4">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" className="border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-black">
                          View Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="glass-effect neon-border max-w-2xl">
                        <DialogHeader>
                          <DialogTitle className="text-2xl font-bold neon-text flex items-center gap-3">
                            <span className="text-4xl">{project.image}</span>
                            {project.title}
                          </DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                          <p className="text-gray-300 leading-relaxed">{project.longDescription}</p>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <Badge key={tech} variant="secondary" className="bg-neon-blue/20 text-neon-blue border-neon-blue/50">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex space-x-4 pt-4">
                            <Button asChild className="bg-gradient-to-r from-neon-blue to-neon-purple">
                              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                Live Demo
                              </a>
                            </Button>
                            <Button variant="outline" asChild className="border-neon-blue text-neon-blue">
                              <a href={project.github} target="_blank" rel="noopener noreferrer">
                                GitHub
                              </a>
                            </Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                    <Button asChild className="bg-gradient-to-r from-neon-blue to-neon-purple">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-neon-purple">Other Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card key={project.id} className="glass-effect neon-border hover:shadow-lg hover:shadow-neon-purple/25 transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="text-center">
                  <div className="text-4xl mb-2">{project.image}</div>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-gray-300 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs bg-neon-purple/20 text-neon-purple border-neon-purple/50">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="secondary" className="text-xs bg-gray-600 text-gray-300">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                  <div className="flex justify-between pt-2">
                    <Button size="sm" variant="outline" asChild className="border-neon-blue text-neon-blue text-xs">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild className="bg-neon-purple text-xs">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
