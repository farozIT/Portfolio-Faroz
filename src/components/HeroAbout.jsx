import React, { useEffect, useRef } from 'react';
import { CONFIG } from '../config';
import { handleDiscordClick } from '../utils';

export default function HeroAbout({ setToastMsg }) {
  const photoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (photoRef.current) {
        photoRef.current.style.transform = `translateY(${window.scrollY * 0.08}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="hero-about reveal reveal-visible">
      <div className="hero-photo">
        <img ref={photoRef} src={CONFIG.avatar} alt="Foto profil" />
      </div>
      <div>
        <div className="numbered-label">
          <span className="num">(01)</span>
          <span>About me</span>
        </div>
        <h1 className="hero-name">{CONFIG.name}</h1>
        <p className="hero-bio">{CONFIG.bio}</p>
        <div className="hero-meta-row">
          <div className="meta-item">
            <span className="meta-label">Role</span>
            <span className="meta-value">{CONFIG.role}</span>
          </div>
          <div className="meta-item">
            <span className="meta-label">Status</span>
            <span className="meta-value">
              <span className="rec-dot"></span>
              <span>{CONFIG.status}</span>
            </span>
          </div>
        </div>
        <div className="hero-skills">
          {CONFIG.skills.map((skill, index) => (
            <span className="skill-tag" key={index}>{skill}</span>
          ))}
        </div>
        <div className="hero-socials">
          <div
            className="social-chip chip-tiktok"
            onClick={() => window.open(CONFIG.socials.tiktok.url, '_blank')}
          >
            <i className="ti ti-brand-tiktok"></i>
            <span>TikTok</span>
          </div>
          <div
            className="social-chip chip-instagram"
            onClick={() => window.open(CONFIG.socials.instagram.url, '_blank')}
          >
            <i className="ti ti-brand-instagram"></i>
            <span>Instagram</span>
          </div>
          <div
            className="social-chip chip-discord"
            onClick={(e) => handleDiscordClick(e, setToastMsg)}
          >
            <i className="ti ti-brand-discord"></i>
            <span>Chat di Discord</span>
          </div>
        </div>
      </div>
    </section>
  );
}
