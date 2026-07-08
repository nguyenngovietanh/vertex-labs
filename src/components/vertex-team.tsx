import { useEffect, useRef, useState } from 'react';
import { Linkedin, Twitter, Github, Trophy, Lightbulb, ShieldCheck, Users } from 'lucide-react';

export function VertexTeam() {
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

  const leadership = [
    {
      name: 'Nguyễn Quỳnh Nga',
      role: 'Chief Executive Officer',
      bio: 'A veteran architect and serial entrepreneur with 20+ years of leadership in regenerative design and sustainable community models. Nga brings a powerful, human-centric vision to Vertex Labs, bridging the gap between innovative design principles and high-impact technology solutions.',
      image: '/profile-1.jpg',
      socials: { linkedin: '#', twitter: '#', github: '#' },
    },
    {
      name: 'Nguyễn Hữu Linh',
      role: 'Chief Technology Officer',
      bio: 'With 5+ years of software engineering experience, Linh excels at balancing robust technical architecture with seamless user experiences. He is a results-driven lead, highly trusted by clients for consistently delivering high-performance products on schedule.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      socials: { linkedin: '#', twitter: '#' },
    },
    {
      name: 'Lê Chí Kiên',
      role: 'Technical Leader',
      bio: 'A front-end specialist with 5+ years of experience, Kien focuses on crafting intuitive, visually refined interfaces. He bridges the gap between complex functionality and user needs, ensuring every project delivers both aesthetic excellence and smooth interactivity.',
      image: '/profile-2.jpg',
      socials: { linkedin: '#', github: '#' },
    },
    {
      name: 'Nguyễn Ngô Việt Anh',
      role: 'Digital Creative Director',
      bio: 'Combining 7 years of product development with a 3-year focus on UI/UX, Viet Anh is an expert in user-centric design. He translates complex user needs into elegant, high-impact solutions, consistently balancing technical requirements with flawless usability.',
      image: '/profile-3.jpg',
      socials: { linkedin: '#', twitter: '#' },
    },
  ];

  const values = [
    {
      title: 'Excellence',
      description: 'We deliver nothing less than exceptional work.',
      icon: Trophy,
    },
    {
      title: 'Innovation',
      description: 'We embrace new ideas and technologies.',
      icon: Lightbulb,
    },
    {
      title: 'Integrity',
      description: 'We build trust through transparency.',
      icon: ShieldCheck,
    },
    {
      title: 'Collaboration',
      description: 'We succeed together with our clients.',
      icon: Users,
    },
  ];

  return (
    <section
      id="team"
      ref={sectionRef}
      className="relative py-32 bg-dark-900 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-vertex-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-teal/10 border border-accent-teal/20 mb-6">
            <span className="text-sm text-accent-teal font-medium">Our Team</span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            <span className="text-dark-100">The minds behind </span>
            <span className="gradient-text">Vertex Labs</span>
          </h2>

          <p className="text-lg text-dark-400">
            A team of passionate technologists and creative thinkers dedicated to
            building exceptional digital products.
          </p>
        </div>

        {/* Team grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {leadership.map((member, index) => (
            <div
              key={member.name}
              className={`group relative transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative">
                {/* Image container */}
                <div className="relative overflow-hidden rounded-2xl mb-6">
                  <div className="aspect-[3/4]">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Social links */}
                  <div className="absolute bottom-4 left-4 right-4 flex gap-3 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    {member.socials.linkedin && (
                      <a
                        href={member.socials.linkedin}
                        className="w-10 h-10 rounded-full bg-dark-900/90 flex items-center justify-center text-dark-300 hover:text-vertex-400 hover:bg-dark-800 transition-colors"
                      >
                        <Linkedin size={16} />
                      </a>
                    )}
                    {member.socials.twitter && (
                      <a
                        href={member.socials.twitter}
                        className="w-10 h-10 rounded-full bg-dark-900/90 flex items-center justify-center text-dark-300 hover:text-vertex-400 hover:bg-dark-800 transition-colors"
                      >
                        <Twitter size={16} />
                      </a>
                    )}
                    {member.socials.github && (
                      <a
                        href={member.socials.github}
                        className="w-10 h-10 rounded-full bg-dark-900/90 flex items-center justify-center text-dark-300 hover:text-vertex-400 hover:bg-dark-800 transition-colors"
                      >
                        <Github size={16} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Info */}
                <h3 className="font-display text-xl font-semibold text-dark-100 mb-1 group-hover:text-vertex-400 transition-colors">
                  {member.name}
                </h3>
                <p className="text-accent-cyan font-medium mb-2">{member.role}</p>
                <p className="text-sm text-dark-400">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Values section */}
        <div
          className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="relative p-8 sm:p-12 rounded-3xl bg-dark-950 border border-dark-700 overflow-hidden" style={{ background: 'linear-gradient(135deg, #06b6d4 0%, #22c55e 50%, #14b8a6 100%)' }}>
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-vertex-500/10 to-transparent" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-accent-cyan/10 to-transparent" />

            <div className="relative">
              <h3 className="font-display text-2xl font-bold text-dark-900 mb-8 text-center">
                Our Values Drive Everything We Do
              </h3>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <div
                      key={value.title}
                      className="text-center group"
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <div className="w-12 h-12 mx-auto mb-4 rounded-xl border border-dark-600/30 bg-dark-900/50 flex items-center justify-center transition-all group-hover:scale-110">
                        {}
                        <div className="w-6 h-6">
                          <Icon 
                            className="w-full h-full text-transparent bg-clip-text bg-gradient-to-r from-vertex-400 to-accent-cyan" 
                            stroke="cyan" 
                            style={{ 
                              fill: 'none',
                            }} 
                          />
                        </div>
                      </div>
                      <h4 className="font-display text-lg font-semibold text-dark-900 mb-2">
                        {value.title}
                      </h4>
                      <p className="text-sm text-dark-700">{value.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
