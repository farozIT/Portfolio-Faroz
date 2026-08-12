import React from 'react';
import { CONFIG } from '../config';
import { handleDiscordClick } from '../utils';

export default function Navbar({ setToastMsg }) {
  return (
    <nav className="navbar">
      <div className="navbar-name">
        <span className="rec-dot"></span>
        <span>{CONFIG.name}</span>
      </div>
      <a
        className="navbar-cta"
        href="https://discord.com/users/723016020817608814"
        onClick={(e) => handleDiscordClick(e, setToastMsg)}
      >
        Hubungi aku
      </a>
    </nav>
  );
}
