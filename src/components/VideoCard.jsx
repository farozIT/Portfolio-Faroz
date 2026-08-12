import React, { useRef, useState } from 'react';
import { getAccountNameFromLink, getInlineEmbed } from '../utils';

export default function VideoCard({ p, index }) {
  const delay = (index % 6) * 0.06;
  const accountName = getAccountNameFromLink(p.link, p.title);
  const embed = getInlineEmbed(p.link);

  const [cardClass, setCardClass] = useState(() => {
    if (p.ratio === '16:9' || p.ratio === '16/9' || p.ratio === 'horizontal') return 'card-169';
    if (p.ratio === '9:16' || p.ratio === '9/16' || p.ratio === 'vertical') return 'card-916';
    if (p.link && (p.link.includes('youtube.com/watch') || p.link.includes('youtu.be/')) && !p.link.includes('shorts')) return 'card-169';
    return 'card-916';
  });

  const [ratioClass, setRatioClass] = useState(() => {
    if (p.ratio === '16:9' || p.ratio === '16/9' || p.ratio === 'horizontal') return 'ratio-169';
    if (p.ratio === '9:16' || p.ratio === '9/16' || p.ratio === 'vertical') return 'ratio-916';
    if (p.link && (p.link.includes('youtube.com/watch') || p.link.includes('youtu.be/')) && !p.link.includes('shorts')) return 'ratio-169';
    return 'ratio-916';
  });

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

  const handleLoadedMetadata = (e) => {
    const video = e.target;
    if (video.videoWidth > video.videoHeight) {
      setCardClass('card-169');
      setRatioClass('ratio-169');
    }
  };

  return (
    <div className={`project-card reveal-item ${cardClass}`} style={{ transitionDelay: `${delay}s` }}>
      <div
        ref={cardRef}
        className={`video-card tilt-card ${ratioClass} ${embed.cls}`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {embed.isMp4 ? (
          <video
            src={p.link}
            controls
            playsInline
            preload="metadata"
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', background: '#000' }}
            onLoadedMetadata={handleLoadedMetadata}
          />
        ) : (
          <div dangerouslySetInnerHTML={{ __html: embed.html }} style={{ width: '100%', height: '100%' }} />
        )}
      </div>
    </div>
  );
}
