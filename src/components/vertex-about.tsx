import { useEffect, useRef, useState, useMemo } from 'react';
import { ArrowUpRight, Cpu, Layers, Target } from 'lucide-react';
import { Counter } from './counter';
import { useTranslation } from 'react-i18next';

export function VertexAbout() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation();

  const stats = useMemo(() => [
    { value: '50+', label: t('stat1') },
    { value: '8+', label: t('stat2') },
    { value: '25+', label: t('stat3') },
    { value: '99%', label: t('stat4') },
  ], [t]);

  const valuePropositions = useMemo(() => [
    { icon: <Target size={20} />, title: t('about_val1_title'), desc: t('about_val1_desc') },
    { icon: <Layers size={20} />, title: t('about_val2_title'), desc: t('about_val2_desc') },
    { icon: <Cpu size={20} />, title: t('about_val3_title'), desc: t('about_val3_desc') },
  ], [t]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.2, rootMargin: '-50px' }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative py-32 bg-dark-950 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dark-700 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dark-700 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-vertex-500/10 border border-vertex-500/20 mb-8">
              <span className="text-sm text-vertex-400 font-medium">{t('about_badge')}</span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              <span className="text-dark-100">{t('about_title1')}</span>
              <span className="gradient-text">{t('about_title2')}</span>
              <span className="text-dark-100">{t('about_title3')}</span>
            </h2>

            <p className="text-lg text-dark-400 leading-relaxed mb-8">{t('about_desc1')}</p>
            <p className="text-lg text-dark-400 leading-relaxed mb-12">{t('about_desc2')}</p>

            <div className="space-y-6">
              {valuePropositions.map((item, index) => (
                <div key={item.title} className="flex items-start gap-4 group" style={{ transitionDelay: `${index * 150}ms` }}>
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-dark-900 border border-dark-700 flex items-center justify-center group-hover:border-vertex-500/50 group-hover:bg-vertex-500/10 transition-all duration-300">
                    <div className="text-vertex-400">{item.icon}</div>
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-dark-100 mb-1 group-hover:text-vertex-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-dark-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual element */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-vertex-500/20 via-accent-cyan/20 to-accent-teal/20 rounded-3xl blur-2xl opacity-50" />
              <div className="relative bg-dark-900 rounded-2xl border border-dark-700 p-8 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-vertex-500/10 to-transparent" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-accent-cyan/10 to-transparent" />

                {/* Phục hồi phần Code decoration không dịch */}
                <div className="font-mono text-xs text-dark-600 space-y-1 mb-8">
                  <div>{'// Building the future'}</div>
                  <div className="text-vertex-500">const <span className="text-dark-300">team</span> = <span className="text-accent-cyan">{'{'}</span></div>
                  <div className="pl-4 text-dark-400">passion: <span className="text-accent-teal">'excellence'</span>,</div>
                  <div className="pl-4 text-dark-400">focus: <span className="text-accent-teal">'innovation'</span>,</div>
                  <div className="pl-4 text-dark-400">delivery: <span className="text-accent-teal">'quality'</span></div>
                  <div className="text-accent-cyan">{'}'};</div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat) => (
                    <div key={stat.label} className="group p-4 rounded-xl bg-dark-800/50 border border-dark-700 hover:border-vertex-500/30 transition-all duration-300">
                      <div className="font-display text-3xl font-bold gradient-text mb-1">
                        {isVisible ? <Counter value={stat.value} /> : '0+'}
                      </div>
                      <div className="text-sm text-dark-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute -top-4 -right-4 px-4 py-2 bg-gradient-to-r from-vertex-600 to-accent-cyan rounded-full text-dark-950 font-semibold text-sm flex items-center gap-2 shadow-lg glow-green">
                <ArrowUpRight size={16} />
                <span>Since 2025</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}