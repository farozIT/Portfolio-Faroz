import React, { useEffect, useState } from 'react';

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0, opacity: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPos({
        x: e.clientX / 1.4,
        y: e.clientY / 1.4,
        opacity: 1
      });
    };

    const handleMouseLeave = () => {
      setPos(prev => ({ ...prev, opacity: 0 }));
    };

    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      className="cursor-glow"
      style={{
        left: `${pos.x}px`,
        top: `${pos.y}px`,
        opacity: pos.opacity
      }}
    />
  );
}
