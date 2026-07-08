import { ArrowUpRight, Github, Linkedin, Twitter } from 'lucide-react';

export function VertexFooter() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About', href: '#about' },
      { name: 'Services', href: '#services' },
      { name: 'Projects', href: '#projects' },
      { name: 'Team', href: '#team' },
      { name: 'Careers', href: '#' },
    ],
    services: [
      { name: 'Web Development', href: '#services' },
      { name: 'Mobile Apps', href: '#services' },
      { name: 'UI/UX Design', href: '#services' },
      { name: 'Cloud Solutions', href: '#services' },
    ],
    resources: [
      { name: 'Blog', href: '#' },
      { name: 'Case Studies', href: '#projects' },
      { name: 'Documentation', href: '#' },
      { name: 'Privacy Policy', href: '#' },
    ],
  };

  const socials = [
    { name: 'Twitter', href: '#', icon: <Twitter size={18} /> },
    { name: 'LinkedIn', href: '#', icon: <Linkedin size={18} /> },
    { name: 'GitHub', href: '#', icon: <Github size={18} /> },
  ];

  return (
    <footer className="relative bg-dark-950 border-t border-dark-800">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <a href="#" className="group flex items-center gap-3 mb-6">
              <img
                src="/white-horizontal.svg"
                alt="Vertex Labs"
                className="h-8 w-auto group-hover:opacity-80 transition-opacity duration-300"
              />
            </a>
            <p className="text-dark-400 mb-6 max-w-md">
              Building exceptional digital products that transform businesses.
              From strategy to execution, we're your technology partner.
            </p>
            {/* Social links */}
            <div className="flex gap-4">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-xl bg-dark-900 border border-dark-700 flex items-center justify-center text-dark-400 hover:text-vertex-400 hover:border-vertex-500/50 transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links sections */}
          <div>
            <h4 className="font-display font-semibold text-dark-100 mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-dark-400 hover:text-vertex-400 transition-colors duration-300 inline-flex items-center gap-1 group"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-dark-100 mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-dark-400 hover:text-vertex-400 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-dark-100 mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-dark-400 hover:text-vertex-400 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-dark-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-dark-500">
              {currentYear} Vertex Labs. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-dark-500">
              <a href="#" className="hover:text-dark-300 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-dark-300 transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Back to top button - fixed position */}
      <a
        href="#"
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-r from-vertex-600 to-accent-cyan text-dark-950 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 shadow-lg glow-green z-40 group"
        style={{ opacity: 'var(--scroll-progress, 0)' }}
      >
        <ArrowUpRight size={20} className="rotate-[-45deg] group-hover:translate-y-[-2px] group-hover:translate-x-[-2px] transition-transform" />
      </a>
    </footer>
  );
}
