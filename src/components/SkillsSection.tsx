
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const SkillsSection = () => {
  const skills = [
    { name: 'JavaScript', level: 52, category: 'Language' },
    { name: 'Node.js', level: 47, category: 'Backend' },
    { name: 'React', level: 39, category: 'Frontend' },
    { name: 'MongoDB', level: 48, category: 'Database' },
    { name: 'Express.js', level: 45, category: 'Backend' },
    { name: 'EJS', level: 56, category: 'Templating' },
    { name: 'Tailwind CSS', level: 46, category: 'Styling' },
    { name: 'API Integration', level: 37, category: 'Backend' },
    { name: 'Microservices', level: 39, category: 'Architecture' },
    { name: 'Java (Android)', level: 38, category: 'Mobile' },
    { name: 'AI/ML', level: 45, category: 'Emerging Tech' },
    { name: 'Trading', level: 42, category: 'Finance' }
  ];

  const categories = [...new Set(skills.map(skill => skill.category))];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-background/50 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="neon-text">Skills</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card key={category} className="glass-effect neon-border animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-neon-blue">{category}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-neon-purple text-sm">{skill.level}%</span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2 bg-gray-700"
                      />
                    </div>
                  ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tech Stack Icons */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-neon-blue">Favorite Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { name: 'Node.js', icon: '🟢' },
              { name: 'React', icon: '⚛️' },
              { name: 'MongoDB', icon: '🍃' },
              { name: 'JavaScript', icon: '🟨' },
              { name: 'Express', icon: '🚀' },
              { name: 'Tailwind', icon: '🎨' }
            ].map((tech, index) => (
              <div 
                key={tech.name}
                className="glass-effect neon-border rounded-lg p-4 text-center hover:scale-110 transition-transform duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl mb-2">{tech.icon}</div>
                <div className="text-gray-300 font-medium">{tech.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
