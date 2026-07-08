import { useEffect, useState } from 'react';
import { VertexIntro } from './components/vertex-intro';
import { VertexNavigation } from './components/vertex-navigation';
import { VertexHero } from './components/vertex-hero';
import { VertexAbout } from './components/vertex-about';
import { VertexServices } from './components/vertex-services';
import { VertexProjects } from './components/vertex-projects';
import { VertexTeam } from './components/vertex-team';
import { VertexClients } from './components/vertex-clients';
import { VertexContact } from './components/vertex-contact';
import { VertexFooter } from './components/vertex-footer';

function App() {
  // Kiểm tra xem đã chạy intro trong phiên này chưa (dùng sessionStorage)
  const [showIntro, setShowIntro] = useState(() => {
    return sessionStorage.getItem('hasSeenIntro') !== 'true';
  });
  
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouse = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouse, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouse);
    };
  }, []);

  // Handle Intro Completion
  const handleIntroComplete = () => {
    sessionStorage.setItem('hasSeenIntro', 'true');
    setShowIntro(false);
  };

  // Prevent scroll during intro
  useEffect(() => {
    if (showIntro) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [showIntro]);

  return (
    <div className="min-h-screen bg-dark-950 text-dark-100 overflow-x-hidden">
      {showIntro ? (
        <VertexIntro onComplete={handleIntroComplete} />
      ) : (
        <>
          <VertexNavigation scrollY={scrollY} />
          <main>
            <VertexHero scrollY={scrollY} mousePosition={mousePosition} />
            <VertexAbout />
            <VertexServices />
            <VertexProjects />
            <VertexTeam />
            <VertexClients />
            <VertexContact />
          </main>
          <VertexFooter />
        </>
      )}
    </div>
  );
}

export default App;