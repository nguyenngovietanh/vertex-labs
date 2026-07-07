import { useEffect, useRef, useState } from 'react';
import {
  Code,
  Palette,
  Smartphone,
  Cloud,
  Database,
  Shield,
  ArrowUpRight,
} from 'lucide-react';

export function VertexServices() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '-50px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: <Code size={24} />,
      title: 'Custom Software Development',
      description:
        'Tailored software solutions built with modern technologies. From web applications to enterprise systems.',
      features: ['Web Apps', 'APIs', 'Integrations'],
      gradient: 'from-vertex-500 to-vertex-600',
    },
    {
      icon: <Palette size={24} />,
      title: 'UI/UX Design',
      description:
        'Creating intuitive, beautiful interfaces that users love. Research-driven design that converts.',
      features: ['User Research', 'Prototyping', 'Design Systems'],
      gradient: 'from-accent-cyan to-accent-teal',
    },
    {
      icon: <Smartphone size={24} />,
      title: 'Mobile Development',
      description:
        'Native and cross-platform mobile applications. iOS, Android, and everything in between.',
      features: ['iOS', 'Android', 'React Native'],
      gradient: 'from-accent-teal to-vertex-500',
    },
    {
      icon: <Cloud size={24} />,
      title: 'Cloud Solutions',
      description:
        'Scalable cloud infrastructure and DevOps. AWS, GCP, Azure - we speak all cloud languages.',
      features: ['AWS', 'DevOps', 'CI/CD'],
      gradient: 'from-vertex-600 to-accent-cyan',
    },
    {
      icon: <Database size={24} />,
      title: 'Data Engineering',
      description:
        'Building robust data pipelines and analytics platforms. Turn your data into insights.',
      features: ['Pipelines', 'Analytics', 'ML'],
      gradient: 'from-accent-cyan to-vertex-500',
    },
    {
      icon: <Shield size={24} />,
      title: 'Security & Compliance',
      description:
        'Keeping your applications secure. Audits, penetration testing, and secure architecture.',
      features: ['Audits', 'Testing', 'Architecture'],
      gradient: 'from-vertex-500 to-accent-teal',
    },
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-32 bg-dark-900 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-vertex-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-cyan/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 mb-6">
            <span className="text-sm text-accent-cyan font-medium">What We Do</span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            <span className="text-dark-100">Capabilities that </span>
            <span className="gradient-text">drive results</span>
          </h2>

          <p className="text-lg text-dark-400">
            We combine technical expertise with strategic thinking to deliver comprehensive
            digital solutions that transform businesses and exceed expectations.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group relative card-hover rounded-2xl bg-dark-950 border border-dark-700 p-8 overflow-hidden transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Gradient overlay on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              />

              {/* Top line gradient */}
              <div
                className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${service.gradient} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
              />

              {/* Icon */}
              <div className="relative mb-6">
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} text-dark-950 group-hover:scale-110 transition-transform duration-300`}
                >
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="relative font-display text-xl font-semibold text-dark-100 mb-3 group-hover:text-white transition-colors">
                {service.title}
              </h3>

              <p className="relative text-dark-400 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="relative flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1 text-xs font-medium text-dark-300 bg-dark-800 rounded-full group-hover:bg-dark-700 transition-colors"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Arrow */}
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-10 h-10 rounded-full border border-dark-600 flex items-center justify-center text-dark-400 group-hover:text-vertex-400 group-hover:border-vertex-500/50 transition-colors">
                  <ArrowUpRight size={18} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
