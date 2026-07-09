import { useEffect, useRef, useState, useMemo, FormEvent } from 'react';
import { Send, Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function VertexContact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation();
  
  const [formState, setFormState] = useState({ name: '', email: '', company: '', message: '' });

  const contactInfo = useMemo(() => [
    { icon: <Mail size={20} />, label: t('ct_email'), value: 'vertexlabs@gmail.com', href: 'mailto:vertexlabs@gmail.com' },
    { icon: <Phone size={20} />, label: t('ct_call'), value: '0888 790 182', href: 'tel:+84888790182' },
    { icon: <MapPin size={20} />, label: t('ct_visit'), value: 'Hanoi, Vietnam', href: '#' },
  ], [t]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1, rootMargin: '-50px' }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formState);
    setFormState({ name: '', email: '', company: '', message: '' });
  };

  return (
    <section id="contact" ref={sectionRef} className="relative py-32 bg-dark-900 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-vertex-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-accent-cyan/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`text-center max-w-3xl mx-auto mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-vertex-500/10 border border-vertex-500/20 mb-6">
            <span className="text-sm text-vertex-400 font-medium">{t('ct_badge')}</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            <span className="text-dark-100">{t('ct_title1')}</span>
            <span className="gradient-text">{t('ct_title2')}</span>
          </h2>
          <p className="text-lg text-dark-400">{t('ct_desc')}</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          <div className={`lg:col-span-3 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative p-8 sm:p-10 rounded-3xl bg-dark-950 border border-dark-700 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-vertex-500 via-accent-cyan to-accent-teal" />
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-dark-300 mb-2">{t('form_name')}</label>
                    <input type="text" value={formState.name} onChange={(e) => setFormState({...formState, name: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-dark-900 border border-dark-700 text-dark-100 focus:border-vertex-500 focus:outline-none transition-all" placeholder={t('form_placeholder_name')} required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-dark-300 mb-2">{t('form_email')}</label>
                    <input type="email" value={formState.email} onChange={(e) => setFormState({...formState, email: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-dark-900 border border-dark-700 text-dark-100 focus:border-vertex-500 focus:outline-none transition-all" placeholder={t('form_placeholder_email')} required />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark-300 mb-2">{t('form_company')}</label>
                  <input type="text" value={formState.company} onChange={(e) => setFormState({...formState, company: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-dark-900 border border-dark-700 text-dark-100 focus:border-vertex-500 focus:outline-none transition-all" placeholder={t('form_placeholder_comp')} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark-300 mb-2">{t('form_msg')}</label>
                  <textarea value={formState.message} onChange={(e) => setFormState({...formState, message: e.target.value})} rows={5} className="w-full px-4 py-3 rounded-xl bg-dark-900 border border-dark-700 text-dark-100 focus:border-vertex-500 focus:outline-none transition-all resize-none" placeholder={t('form_placeholder_msg')} required />
                </div>
                <button type="submit" className="group w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-vertex-600 to-accent-cyan rounded-xl font-medium text-dark-950 hover:from-vertex-500 transition-all duration-300 glow-green">
                  <span>{t('form_btn')}</span>
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>

          <div className={`lg:col-span-2 space-y-6 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {contactInfo.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className="group flex items-start gap-4 p-6 rounded-2xl bg-dark-950 border border-dark-700 hover:border-dark-600 transition-all duration-300"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-vertex-500/20 to-accent-cyan/20 flex items-center justify-center text-vertex-400 transition-all duration-300">
                  {item.icon}
                </div>
                
                <div>
                  <p className="text-sm text-dark-500 mb-1">{item.label}</p>
                  <p className="font-display font-semibold text-dark-100 group-hover:text-vertex-400 transition-colors">
                    {item.value}
                  </p>
                </div>
                
                <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight size={18} className="text-dark-500" />
                </div>
              </a>
            ))}
            <div className="relative p-6 rounded-2xl bg-gradient-to-br from-vertex-900/30 to-dark-950 border border-vertex-800/30 overflow-hidden">
              <p className="font-display text-lg font-semibold text-dark-100 mb-2">{t('ct_ready')}</p>
              <p className="text-sm text-dark-400 mb-4">{t('ct_book')}</p>
              <a href="#" className="inline-flex items-center gap-2 text-sm font-medium text-vertex-400 hover:text-vertex-300 transition-colors">
                <span>{t('ct_schedule')}</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}