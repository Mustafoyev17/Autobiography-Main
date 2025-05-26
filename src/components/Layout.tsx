
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CursorFollower from '@/components/CursorFollower';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle('light', !isDark);
  }, [isDark]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <CursorFollower />
      <Header isDark={isDark} setIsDark={setIsDark} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
