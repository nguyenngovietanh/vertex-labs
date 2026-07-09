import { useEffect, useRef, useState, useMemo } from 'react';
import { Code, Palette, Smartphone, Cloud, Database, Shield, ArrowUpRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function VertexServices() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation();

  const services = useMemo(() => [
    {
      icon: <Code size={24} />,
      title: t('svc1_title'),
      description: t('svc1_desc'),
      features: [t('svc1_f1'), t('svc1_f2'), t('svc1_f3')],
      gradient: 'from-vertex-500 to-vertex-600',
    },
    {
      icon: <Palette size={24} />,
      title: t('svc2_title'),
      description: t('svc2_desc'),
      features: [t('svc2_f1'), t('svc2_f2'), t('svc2_f3')],
      gradient: 'from-accent-cyan to-accent-teal',
    },
    {
      icon: <Smartphone size={24} />,
      title: t('svc3_title'),
      description: t('svc3_desc'),
      features: [t('svc3_f1'), t('svc3_f2'), t('svc3_f3')],
      gradient: 'from-accent-teal to-vertex-500',
    },
    {
      icon: <Cloud size={24} />,
      title: t('svc4_title'),
      description: t('svc4_desc'),
      features: [t('svc4_f1'), t('svc4_f2'), t('svc4_f3')],
      gradient: 'from-vertex-600 to-accent-cyan',
    },
    {
      icon: <Database size={24} />,
      title: t('svc5_title'),
      description: t('svc5_desc'),
      features: [t('svc5_f1'), t('svc5_f2'), t('svc5_f3')],
      gradient: 'from-accent-cyan to-vertex-500',
    },
    {
      icon: <Shield size={24} />,
      title: t('svc6_title'),
      description: t('svc6_desc'),
      features: [t('svc6_f1'), t('svc6_f2'), t('svc6_f3')],
      gradient: 'from-vertex-500 to-accent-teal',
    },
  ], [t]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1, rootMargin: '-50px' }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="relative py-32 bg-dark-900 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-vertex-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-cyan/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`text-center max-w-3xl mx-auto mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 mb-6">
            <span className="text-sm text-accent-cyan font-medium">{t('svc_badge')}</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            <span className="text-dark-100">{t('svc_title1')}</span>
            <span className="gradient-text">{t('svc_title2')}</span>
          </h2>
          <p className="text-lg text-dark-400">{t('svc_desc')}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={service.title} className={`group relative card-hover rounded-2xl bg-dark-950 border border-dark-700 p-8 overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${index * 100}ms` }}>
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${service.gradient} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
              <div className="relative mb-6">
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} text-dark-950 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
              </div>
              <h3 className="relative font-display text-xl font-semibold text-dark-100 mb-3 group-hover:text-white transition-colors">{service.title}</h3>
              <p className="relative text-dark-400 mb-6 leading-relaxed">{service.description}</p>
              <div className="relative flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <span key={feature} className="px-3 py-1 text-xs font-medium text-dark-300 bg-dark-800 rounded-full group-hover:bg-dark-700 transition-colors">
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}