import React, { useState } from 'react';
import { CONFIG, PROJECTS_VIDEO, PROJECTS_THUMBNAIL } from '../config';
import VideoCard from './VideoCard';
import ThumbCard from './ThumbCard';

export default function ProjectsSection({ onOpenModal }) {
  const [filter, setFilter] = useState('all');

  return (
    <>
      <div className="numbered-label reveal reveal-visible" style={{ justifyContent: 'center' }}>
        <span className="num">(03)</span>
        <span>Proyek</span>
      </div>

      <div className="projects-heading reveal reveal-visible" id="projects-heading">
        {CONFIG.projectsHeading}
      </div>

      <div className="filter-row reveal reveal-visible" id="filter-row">
        <button
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button
          className={`filter-btn ${filter === 'video' ? 'active' : ''}`}
          onClick={() => setFilter('video')}
        >
          Video
        </button>
        <button
          className={`filter-btn ${filter === 'thumbnail' ? 'active' : ''}`}
          onClick={() => setFilter('thumbnail')}
        >
          Thumbnail
        </button>
      </div>

      {(filter === 'all' || filter === 'video') && (
        <div id="video-section" className="reveal-stagger reveal-visible">
          <div className="project-grid video-grid" id="video-grid">
            {PROJECTS_VIDEO.map((p, index) => (
              <VideoCard p={p} index={index} key={index} />
            ))}
          </div>
        </div>
      )}

      {(filter === 'all' || filter === 'thumbnail') && (
        <div id="thumbnail-section" className="reveal-stagger reveal-visible">
          <div className="project-grid thumb-grid" id="thumbnail-grid">
            {PROJECTS_THUMBNAIL.map((p, index) => (
              <ThumbCard p={p} index={index} key={index} onOpenModal={onOpenModal} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
