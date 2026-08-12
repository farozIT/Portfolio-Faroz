import React from 'react';
import { CONFIG } from '../config';
import { handleDiscordClick } from '../utils';

export default function Footer({ setToastMsg }) {
  return (
    <footer className="footer reveal reveal-visible" id="kontak" style={{ marginTop: '48px' }}>
      <div className="numbered-label" style={{ justifyContent: 'center' }}>
        <span className="num">(04)</span>
        <span>Kontak</span>
      </div>
      <div className="footer-title">Siap bikin sesuatu yang keren?</div>
      <div className="footer-sub">Hubungi aku lewat salah satu platform di bawah ini.</div>
      <div className="footer-links" id="footer-links">
        <a
          className="footer-link fl-tiktok"
          href={CONFIG.socials.tiktok.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="ti ti-brand-tiktok"></i>TikTok
        </a>
        <a
          className="footer-link fl-instagram"
          href={CONFIG.socials.instagram.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="ti ti-brand-instagram"></i>Instagram
        </a>
        <a
          className="footer-link fl-discord"
          href={CONFIG.socials.discord.url}
          onClick={(e) => handleDiscordClick(e, setToastMsg)}
        >
          <i className="ti ti-brand-discord"></i>Discord
        </a>
      </div>
      <div className="footer-copy" id="footer-copy">
        © {new Date().getFullYear()} · {CONFIG.name} · Video Editor · Indonesia
      </div>
    </footer>
  );
}
