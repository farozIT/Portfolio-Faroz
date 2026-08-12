import React, { useEffect, useRef, useState } from 'react';
import { CONFIG } from '../config';

export default function Experience() {
  const rowRef = useRef(null);
  const [animated, setAnimated] = useState(false);
  const [stats, setStats] = useState(CONFIG.experience.stats);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting && !animated) {
          setAnimated(true);
          animateCounters();
        }
      });
    }, { threshold: 0.4 });

    if (rowRef.current) observer.observe(rowRef.current);
    return () => observer.disconnect();
  }, [animated]);

  const animateCounters = () => {
    CONFIG.experience.stats.forEach((s, idx) => {
      const raw = s.value;
      const num = parseFloat(raw);
      const suffix = raw.replace(/[\d.]/g, '');
      if (isNaN(num)) return;

      let start = 0;
      const dur = 1200;
      const step = (ts) => {
        if (!start) start = ts;
        const p = Math.min((ts - start) / dur, 1);
        const ease = 1 - Math.pow(1 - p, 3);
        const val = (num <= 10 ? Math.round(ease * num) : Math.round(ease * num * 10) / 10) + suffix;

        setStats(prev => {
          const next = [...prev];
          next[idx] = { ...next[idx], value: val };
          return next;
        });

        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    });
  };

  return (
    <section className="reveal reveal-visible">
      <div className="numbered-label">
        <span className="num">(02)</span>
        <span>Pengalaman</span>
      </div>
      <p className="about-text">{CONFIG.experience.about}</p>
      <div className="stats-row" ref={rowRef}>
        {stats.map((s, index) => (
          <div className="stat-card" key={index}>
            <div className="stat-value">{s.value}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
