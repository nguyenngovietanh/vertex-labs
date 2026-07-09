import { useMemo } from 'react';
import { ArrowUpRight, Github, Linkedin, Twitter } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function VertexFooter() {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  const footerLinks = useMemo(() => ({
    company: [
      { name: t('ft_about'), href: '#about' },
      { name: t('nav_services'), href: '#services' },
      { name: t('nav_projects'), href: '#projects' },
      { name: t('nav_team'), href: '#team' },
      { name: t('ft_career'), href: '#' },
    ],
    services: [
      { name: t('ft_web'), href: '#services' },
      { name: t('ft_mobile'), href: '#services' },
      { name: t('ft_ui'), href: '#services' },
      { name: t('ft_cloud'), href: '#services' },
    ],
    resources: [
      { name: t('ft_blog'), href: '#' },
      { name: t('ft_case'), href: '#projects' },
      { name: t('ft_doc'), href: '#' },
      { name: t('ft_privacy'), href: '#' },
    ],
  }), [t]);

  const socials = [
    { name: 'Twitter', href: '#', icon: <Twitter size={18} /> },
    { name: 'LinkedIn', href: '#', icon: <Linkedin size={18} /> },
    { name: 'GitHub', href: '#', icon: <Github size={18} /> },
  ];

  return (
    <footer className="relative bg-dark-950 border-t border-dark-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <a href="#" className="group flex items-center gap-3 mb-6">
              <img src="/white-horizontal.svg" alt="Vertex Labs" className="h-8 w-auto group-hover:opacity-80 transition-opacity duration-300" />
            </a>
            <p className="text-dark-400 mb-6 max-w-md">{t('ft_desc')}</p>
            <div className="flex gap-4">
              {socials.map((social) => (
                <a key={social.name} href={social.href} className="w-10 h-10 rounded-xl bg-dark-900 border border-dark-700 flex items-center justify-center text-dark-400 hover:text-vertex-400 hover:border-vertex-500/50 transition-all duration-300">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {[
            { title: t('ft_company'), links: footerLinks.company },
            { title: t('ft_services'), links: footerLinks.services },
            { title: t('ft_resources'), links: footerLinks.resources }
          ].map((section) => (
            <div key={section.title}>
              <h4 className="font-display font-semibold text-dark-100 mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-dark-400 hover:text-vertex-400 transition-colors duration-300 inline-flex items-center gap-1 group">
                      <span>{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-dark-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-dark-500">{currentYear} Vertex Labs. All rights reserved.</p>
            <div className="flex items-center gap-6 text-sm text-dark-500">
              <a href="#" className="hover:text-dark-300 transition-colors">{t('ft_terms')}</a>
              <a href="#" className="hover:text-dark-300 transition-colors">{t('ft_privacy')}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}