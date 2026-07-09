import { useState, useEffect, useMemo } from 'react';
import { Menu, X } from 'lucide-react';
import { LanguageSwitcher } from './language-switcher';
import { useTranslation } from 'react-i18next'; // 1. Import hook

interface VertexNavigationProps {
  scrollY: number;
}

export function VertexNavigation({ scrollY }: VertexNavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isScrolled = scrollY > 50;
  const { t } = useTranslation(); // 2. Khởi tạo hook

  // 3. Sử dụng useMemo để mảng link cập nhật khi ngôn ngữ đổi
  const navLinks = useMemo(() => [
    { name: t('nav_about'), href: '#about' },
    { name: t('nav_services'), href: '#services' },
    { name: t('nav_projects'), href: '#projects' },
    { name: t('nav_team'), href: '#team' },
    { name: t('nav_contact'), href: '#contact' },
  ], [t]); 

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMenuOpen]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-dark-950/90 backdrop-blur-xl border-b border-dark-800/50' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="group flex items-center">
            <img src="/white-horizontal.svg" alt="Vertex Labs" className="h-8 w-auto group-hover:opacity-80 transition-opacity" />
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="relative font-body text-sm text-dark-300 hover:text-white transition-colors group">
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-vertex-500 to-accent-cyan group-hover:w-full transition-all duration-300" />
              </a>
            ))}

            <LanguageSwitcher />
            
            <a href="#contact" className="magnetic-btn px-6 py-2.5 bg-gradient-to-r from-vertex-600 to-accent-cyan rounded-full font-body text-sm font-medium text-dark-950 hover:from-vertex-500 hover:to-accent-teal transition-all glow-green">
              {t('nav_cta')}
            </a>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-dark-300 hover:text-white transition-colors">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu (Dịch tương tự) */}
      <div className={`md:hidden fixed inset-0 bg-dark-950/98 backdrop-blur-2xl transition-all duration-500 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, index) => (
            <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)} className="font-display text-3xl font-medium text-dark-100 hover:text-vertex-400 transition-colors">
              {link.name}
            </a>
          ))}
          <a href="#contact" onClick={() => setIsMenuOpen(false)} className="mt-4 px-8 py-3 bg-gradient-to-r from-vertex-600 to-accent-cyan rounded-full font-body font-medium text-dark-950">
            {t('nav_cta')}
          </a>
        </div>
      </div>
    </nav>
  );
}