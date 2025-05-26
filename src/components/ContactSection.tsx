
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const downloadResume = () => {
    // Create a dummy PDF link - in real implementation, this would link to actual resume
    toast({
      title: "Resume Download",
      description: "Resume download would start here. (Demo mode)",
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background/50 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="neon-text">Touch</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Ready to collaborate? Let's build something amazing together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="glass-effect neon-border">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-neon-blue">Send Me a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-white/5 border-white/20 focus:border-neon-blue"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-white/5 border-white/20 focus:border-neon-blue"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2 text-gray-300">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="bg-white/5 border-white/20 focus:border-neon-blue"
                    placeholder="What's this about?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="bg-white/5 border-white/20 focus:border-neon-blue resize-none"
                    placeholder="Tell me about your project or idea..."
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-neon-blue to-neon-purple hover:shadow-lg hover:shadow-neon-blue/25 transition-all duration-300"
                  size="lg"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Resume */}
          <div className="space-y-8">
            <Card className="glass-effect neon-border">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-neon-purple">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-neon-blue/20 rounded-lg flex items-center justify-center">
                    <span className="text-neon-blue text-xl">📧</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-300">Email</div>
                    <div className="text-neon-blue">mustafoyev7788@gmail.com</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-neon-purple/20 rounded-lg flex items-center justify-center">
                    <span className="text-neon-purple text-xl">📱</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-300">Telegram</div>
                    <div className="text-neon-purple">@mustafoyev_05_27</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-neon-green/20 rounded-lg flex items-center justify-center">
                    <span className="text-neon-green text-xl">🌍</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-300">Location</div>
                    <div className="text-neon-green">Uzbekistan, Navoiy, Kiziltepa</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect neon-border">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-neon-green">Download Resume</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300">
                  Get a detailed overview of my skills, experience, and projects in a professional format.
                </p>
                <Button
                  onClick={downloadResume}
                  className="w-full bg-gradient-to-r from-neon-green to-neon-blue hover:shadow-lg hover:shadow-neon-green/25 transition-all duration-300"
                  size="lg"
                >
                  📄 Download CV/Resume
                </Button>
              </CardContent>
            </Card>

            <Card className="glass-effect neon-border">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-neon-pink">Follow Me</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" className="border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-black" asChild>
                    <a href="https://github.com/Mustafoyev17" target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                  </Button>
                  <Button variant="outline" className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white" asChild>
                    <a href="https://www.youtube.com/@Everest_12x" target="_blank" rel="noopener noreferrer">
                      YouTube
                    </a>
                  </Button>
                  <Button variant="outline" className="border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-black" asChild>
                    <a href="https://t.me/mustafoyev_05_27" target="_blank" rel="noopener noreferrer">
                      Telegram
                    </a>
                  </Button>
                  <Button variant="outline" className="border-neon-pink text-neon-pink hover:bg-neon-pink hover:text-black" asChild>
                    <a href="https://www.instagram.com/mustafoyev_27.05/" target="_blank" rel="noopener noreferrer">
                      Instagram
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
