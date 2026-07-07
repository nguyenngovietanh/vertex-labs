import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface VertexNavigationProps {
  scrollY: number;
}

export function VertexNavigation({ scrollY }: VertexNavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isScrolled = scrollY > 50;

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-dark-950/90 backdrop-blur-xl border-b border-dark-800/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="group flex items-center">
            <img
              src="/white-horizontal.svg"
              alt="Vertex Labs"
              className="h-8 w-auto group-hover:opacity-80 transition-opacity duration-300"
            />
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative font-body text-sm text-dark-300 hover:text-white transition-colors duration-300 group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-vertex-500 to-accent-cyan group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <a
              href="#contact"
              className="magnetic-btn px-6 py-2.5 bg-gradient-to-r from-vertex-600 to-accent-cyan rounded-full font-body text-sm font-medium text-dark-950 hover:from-vertex-500 hover:to-accent-teal transition-all duration-300 glow-green"
            >
              Let's Talk
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-dark-300 hover:text-white transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed inset-0 bg-dark-950/98 backdrop-blur-2xl transition-all duration-500 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="font-display text-3xl font-medium text-dark-100 hover:text-vertex-400 transition-colors duration-300"
              style={{
                animationDelay: `${index * 0.1}s`,
                transform: isMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                opacity: isMenuOpen ? 1 : 0,
                transition: `all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${index * 0.1}s`,
              }}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className="mt-4 px-8 py-3 bg-gradient-to-r from-vertex-600 to-accent-cyan rounded-full font-body font-medium text-dark-950"
            style={{
              transform: isMenuOpen ? 'translateY(0)' : 'translateY(20px)',
              opacity: isMenuOpen ? 1 : 0,
              transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.5s',
            }}
          >
            Let's Talk
          </a>
        </div>
      </div>
    </nav>
  );
}
