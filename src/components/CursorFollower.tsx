
import React, { useEffect, useState } from 'react';

const CursorFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const hideFollower = () => {
      setIsVisible(false);
    };

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseleave', hideFollower);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseleave', hideFollower);
    };
  }, []);

  return (
    <div
      className={`fixed w-[40px] h-[40px] rounded-full pointer-events-none z-50 transition-all duration-200 ease-out mix-blend-difference ${
        isVisible ? 'opacity-1 scale-10' : 'opacity-10 scale-0'
      }`}
      style={{
        left: position.x - 16,
        top: position.y -  12,
        // background: 'linear-gradient(45deg, #00D4FF, #8B5CF6, #00FF88, #FF0080)',
        backgroundSize: '400% 400%',
        animation: 'gradient-shift 3s ease infinite',
      }}
    />
  );
};

export default CursorFollower;
