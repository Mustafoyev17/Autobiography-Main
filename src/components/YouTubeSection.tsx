
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const YouTubeSection = () => {
  const videos = [
    {
      id: 1,
      title: 'Building a Full-Stack App with Node.js & React',
      description: 'Complete tutorial on creating a modern web application from scratch',
      thumbnail: '🎥',
      views: '15K',
      duration: '45:30'
    },
    {
      id: 2,
      title: 'MongoDB Aggregation Pipeline Explained',
      description: 'Deep dive into advanced MongoDB querying techniques',
      thumbnail: '📊',
      views: '8.5K',
      duration: '28:15'
    },
    {
      id: 3,
      title: 'Microservices with Docker & Kubernetes',
      description: 'Learn how to build and deploy scalable microservices',
      thumbnail: '🐳',
      views: '12K',
      duration: '52:40'
    }
  ];

  return (
    <section id="youtube" className="py-20 bg-gradient-to-b from-background/50 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="neon-text">YouTube</span> Channel
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Sharing knowledge through tutorials, tips, and coding adventures
          </p>
        </div>

        {/* Channel Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="glass-effect neon-border text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-neon-blue mb-2">0+</div>
              <div className="text-gray-400">Subscribers</div>
            </CardContent>
          </Card>
          <Card className="glass-effect neon-border text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-neon-purple mb-2">0+</div>
              <div className="text-gray-400">Total Views</div>
            </CardContent>
          </Card>
          <Card className="glass-effect neon-border text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-neon-green mb-2">0+</div>
              <div className="text-gray-400">Videos</div>
            </CardContent>
          </Card>
        </div>

        {/* Featured Videos */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {videos.map((video, index) => (
            <Card key={video.id} className="glass-effect neon-border hover:shadow-lg hover:shadow-neon-blue/25 transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader>
                <div className="aspect-video bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 rounded-lg flex items-center justify-center text-6xl mb-4">
                  {video.thumbnail}
                </div>
                <CardTitle className="text-lg leading-tight">{video.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-gray-300 text-sm">{video.description}</p>
                <div className="flex justify-between items-center text-sm text-gray-400">
                  <span>{video.views} views</span>
                  <span>{video.duration}</span>
                </div>
                <Button 
                  className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700"
                  asChild
                >
                  <a href="https://youtube.com/@everest" target="_blank" rel="noopener noreferrer">
                    Watch Now
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Channel CTA */}
        <div className="text-center">
          <Card className="glass-effect neon-border max-w-2xl mx-auto">
            <CardContent className="p-8">
              <div className="text-6xl mb-4">📺</div>
              <h3 className="text-2xl font-bold mb-4 neon-text">Subscribe for More Content!</h3>
              <p className="text-gray-300 mb-6">
                Join our community of developers and stay updated with the latest tutorials, 
                coding tips, and tech insights. New videos every week!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700"
                  size="lg"
                  asChild
                >
                  <a href="https://youtube.com/@everest" target="_blank" rel="noopener noreferrer">
                    Subscribe Now
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  className="border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-black"
                  size="lg"
                  asChild
                >
                  <a href="https://youtube.com/@everest/playlists" target="_blank" rel="noopener noreferrer">
                    View Playlists
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default YouTubeSection;
