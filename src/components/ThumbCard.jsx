import React, { useRef } from 'react';
import { titleFromFilename } from '../utils';

export default function ThumbCard({ p, index, onOpenModal }) {
  const delay = (index % 6) * 0.06;
  const imagePath = p.image || p.thumbnail || p.link || '/images/INAA.png';
  const title = p.title || titleFromFilename(imagePath);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const r = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    cardRef.current.style.transform = `perspective(600px) rotateY(${x * 14}deg) rotateX(${-y * 14}deg) scale(1.025)`;
    cardRef.current.style.boxShadow = `${-x * 18}px ${y * 18}px 40px rgba(61,142,242,0.22)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = '';
    cardRef.current.style.boxShadow = '';
  };

  return (
    <div
      className="project-card reveal-item tilt-card"
      style={{ transitionDelay: `${delay}s` }}
      onClick={() => onOpenModal(imagePath, title)}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="project-thumb ratio-169">
        <img
          src={imagePath}
          alt={title}
          loading="lazy"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://placehold.co/600x337/1a1d24/9d9d9a?text=Thumbnail+Design';
          }}
        />
        <div className="project-play">
          <i className="ti ti-zoom-in"></i>
        </div>
      </div>
      <div className="project-meta">
        <div className="project-title">{title}</div>
      </div>
    </div>
  );
}
