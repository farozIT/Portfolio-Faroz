import React, { useState } from 'react';
import ScrollBar from './components/ScrollBar';
import CursorGlow from './components/CursorGlow';
import Navbar from './components/Navbar';
import HeroAbout from './components/HeroAbout';
import Experience from './components/Experience';
import ProjectsSection from './components/ProjectsSection';
import Footer from './components/Footer';
import VideoModal from './components/VideoModal';
import Toast from './components/Toast';

export default function App() {
  const [toastMsg, setToastMsg] = useState('');
  const [activeMedia, setActiveMedia] = useState(null);

  const handleOpenModal = (link, title) => {
    setActiveMedia({ link, title });
  };

  const handleCloseModal = () => {
    setActiveMedia(null);
  };

  const showToast = (msg) => {
    setToastMsg(msg);
    setTimeout(() => {
      setToastMsg('');
    }, 3200);
  };

  return (
    <>
      <ScrollBar />
      <CursorGlow />
      <Toast message={toastMsg} />
      <VideoModal activeMedia={activeMedia} onClose={handleCloseModal} />

      <Navbar setToastMsg={showToast} />

      <div className="wrap">
        <HeroAbout setToastMsg={showToast} />
        <Experience />
        <ProjectsSection onOpenModal={handleOpenModal} />
        <Footer setToastMsg={showToast} />
      </div>
    </>
  );
}
