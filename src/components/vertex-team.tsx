import { useEffect, useRef, useState, useMemo } from 'react';
import { Linkedin, Twitter, Github, Trophy, Lightbulb, ShieldCheck, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function VertexTeam() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation();

  // Sử dụng bioKey để gọi hàm dịch t() bên trong map
  const leadership = useMemo(() => [
    { name: 'Nguyễn Quỳnh Nga', role: 'Chief Executive Officer', bioKey: 'bio1', image: '/profile-1.jpg', socials: { linkedin: '#', twitter: '#', github: '#' } },
    { name: 'Nguyễn Hữu Linh', role: 'Chief Technology Officer', bioKey: 'bio2', image: '/profile-4.jpg', socials: { linkedin: '#', twitter: '#' } },
    { name: 'Lê Chí Kiên', role: 'Technical Leader', bioKey: 'bio3', image: '/profile-2.jpg', socials: { linkedin: '#', github: '#' } },
    { name: 'Nguyễn Ngô Việt Anh', role: 'Digital Creative Director', bioKey: 'bio4', image: '/profile-3.jpg', socials: { linkedin: '#', twitter: '#' } },
  ], []);

  const values = useMemo(() => [
    { title: t('val1_title'), description: t('val1_desc'), icon: Trophy },
    { title: t('val2_title'), description: t('val2_desc'), icon: Lightbulb },
    { title: t('val3_title'), description: t('val3_desc'), icon: ShieldCheck },
    { title: t('val4_title'), description: t('val4_desc'), icon: Users },
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
    <section id="team" ref={sectionRef} className="relative py-32 bg-dark-900 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-vertex-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`text-center max-w-3xl mx-auto mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-teal/10 border border-accent-teal/20 mb-6">
            <span className="text-sm text-accent-teal font-medium">{t('team_badge')}</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            <span className="text-dark-100">{t('team_title1')}</span>
            <span className="gradient-text">{t('team_title2')}</span>
          </h2>
          <p className="text-lg text-dark-400">{t('team_desc')}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {leadership.map((member, index) => (
            <div key={member.name} className={`group relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${index * 100}ms` }}>
              <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[3/4]">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="font-display text-xl font-semibold text-dark-100 mb-1">{member.name}</h3>
              <p className="text-accent-cyan font-medium mb-2">{member.role}</p>
              {/* Gọi trực tiếp t() tại đây để đảm bảo cập nhật khi chuyển ngôn ngữ */}
              <p className="text-sm text-dark-400">{t(member.bioKey)}</p>
            </div>
          ))}
        </div>

        <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative p-8 sm:p-12 rounded-3xl bg-dark-950 border border-dark-700 overflow-hidden" style={{ background: 'linear-gradient(135deg, #06b6d4 0%, #22c55e 50%, #14b8a6 100%)' }}>
            <h3 className="font-display text-2xl font-bold text-dark-900 mb-8 text-center">{t('val_section_title')}</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <div key={value.title} className="text-center group">
                    <div className="w-12 h-12 mx-auto mb-4 rounded-xl border border-dark-600/30 bg-dark-900/50 flex items-center justify-center transition-all group-hover:scale-110">
                      <Icon className="w-6 h-6 text-accent-cyan" strokeWidth={1.5} />
                    </div>
                    <h4 className="font-display text-lg font-semibold text-dark-900 mb-2">{value.title}</h4>
                    <p className="text-sm text-dark-700">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}