import { useEffect, useRef, useState } from 'react';

export function VertexClients() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      quote: "Vertex Labs transformed our digital presence completely. Their technical expertise and creative approach delivered results beyond our expectations.",
      author: 'Sarah Chen',
      role: 'CTO, FinanceFlow',
      company: 'FinanceFlow',
    },
    {
      quote: "Working with the Vertex team was seamless. They understood our vision from day one and executed flawlessly. Highly recommended for any tech project.",
      author: 'David Kumar',
      role: 'Founder, HealthFirst',
      company: 'HealthFirst',
    },
    {
      quote: "The team at Vertex Labs brings a rare combination of technical excellence and business acumen. They delivered our platform ahead of schedule.",
      author: 'Lisa Nguyen',
      role: 'Product Director, EduTech',
      company: 'EduTech Pro',
    },
  ];

  const clients = [
    'FinanceFlow',
    'HealthFirst',
    'EduTech Pro',
    'CloudScale',
    'RetailMax',
    'DataDriven',
    'SecureBank',
    'GreenEnergy',
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-dark-950 overflow-hidden"
    >
      {/* Infinite scrolling logos */}
      <div className="relative border-y border-dark-800 py-12 overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-dark-950 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-dark-950 to-transparent z-10" />

        <div
          className={`flex gap-16 animate-[scroll_30s_linear_infinite] ${
            isVisible ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-1000`}
        >
          {[...clients, ...clients].map((client, index) => (
            <div
              key={index}
              className="flex-shrink-0 text-2xl font-display font-bold text-dark-700 hover:text-dark-500 transition-colors cursor-default"
            >
              {client}
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
            <span className="text-dark-100">What our </span>
            <span className="gradient-text">clients say</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className={`group relative p-8 rounded-2xl bg-dark-900/50 border border-dark-800 hover:border-dark-700 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Quote mark */}
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gradient-to-r from-vertex-500 to-accent-cyan flex items-center justify-center">
                <span className="text-dark-950 text-xl font-display font-bold">"</span>
              </div>

              <p className="text-dark-300 leading-relaxed mb-6 group-hover:text-dark-200 transition-colors">
                {testimonial.quote}
              </p>

              <div>
                <p className="font-display font-semibold text-dark-100">
                  {testimonial.author}
                </p>
                <p className="text-sm text-dark-400">
                  {testimonial.role}
                </p>
              </div>

              {/* Company badge */}
              <div className="absolute bottom-4 right-4 px-3 py-1 text-xs font-medium text-vertex-400 bg-vertex-500/10 rounded-full">
                {testimonial.company}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
