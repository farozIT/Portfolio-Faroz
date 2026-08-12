import React, { useEffect, useState } from 'react';

export default function VideoModal({ activeMedia, onClose }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (activeMedia) {
      requestAnimationFrame(() => setVisible(true));
      document.body.style.overflow = 'hidden';
    } else {
      setVisible(false);
      document.body.style.overflow = '';
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeMedia, onClose]);

  if (!activeMedia) return null;

  const { link, title } = activeMedia;
  let cls = '';
  let content = null;
  let isImg = false;

  // 1. Gambar Desain Thumbnail
  if (/\.(png|jpe?g|webp|gif|svg)(\?.*)?$/i.test(link)) {
    isImg = true;
    cls = 'img-modal';
    content = (
      <div style={{ padding: '16px', textAlign: 'center', background: '#090a0f', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '200px' }}>
        <img src={link} alt={title || 'Desain Thumbnail'} style={{ maxWidth: '100%', maxHeight: '80vh', borderRadius: '10px', objectFit: 'contain', boxShadow: '0 10px 40px rgba(0,0,0,0.8)', display: 'block', margin: '0 auto' }} />
        {title && <div style={{ marginTop: '12px', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '14px', color: '#fff' }}>{title}</div>}
      </div>
    );
  }

  // 2. Instagram
  if (!content) {
    const m = link.match(/instagram\.com\/(?:reel|reels|p)\/(\w+)/i);
    if (m) {
      cls = 'ig';
      content = <iframe src={`https://www.instagram.com/p/${m[1]}/embed`} allowFullScreen title="Instagram embed" />;
    }
  }

  // 3. TikTok
  if (!content) {
    const m = link.match(/tiktok\.com\/(?:@[\w.-]+\/video\/|v\/|embed\/v2\/)([\d]+)/i);
    if (m) {
      cls = 'tt';
      content = <iframe src={`https://www.tiktok.com/embed/v2/${m[1]}`} allowFullScreen title="TikTok embed" />;
    }
  }

  // 4. YouTube
  if (!content) {
    const m = link.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|shorts\/))(\w+)/i);
    if (m) {
      cls = 'yt';
      content = <iframe src={`https://www.youtube.com/embed/${m[1]}?autoplay=1`} allow="autoplay; encrypted-media" allowFullScreen title="YouTube embed" />;
    }
  }

  // 5. Drive
  if (!content) {
    const m = link.match(/drive\.google\.com\/file\/d\/([\w-]+)/);
    if (m) {
      cls = 'yt';
      content = <iframe src={`https://drive.google.com/file/d/${m[1]}/preview`} allowFullScreen title="Drive embed" />;
    }
  }

  // 6. MP4 Video
  if (!content && /\.(mp4|webm|mov)(\?.*)?$/i.test(link)) {
    cls = 'mp4';
    content = <video src={link} controls autoPlay playsInline />;
  }

  return (
    <div
      className={`vmodal-overlay open ${visible ? 'visible' : ''}`}
      id="vmodal"
      onClick={(e) => {
        if (e.target.id === 'vmodal') onClose();
      }}
    >
      <div className={`vmodal-box ${isImg ? 'img-box' : ''}`}>
        <div className="vmodal-close" onClick={onClose}>
          <i className="ti ti-x"></i>
        </div>
        <div className={`vmodal-crop ${cls}`}>
          {content}
        </div>
      </div>
    </div>
  );
}
