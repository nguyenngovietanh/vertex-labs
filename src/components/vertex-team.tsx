import { useEffect, useRef, useState } from 'react';
import { Linkedin, Twitter, Github } from 'lucide-react';

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
      role: 'Founder & CEO',
      bio: '10+ years in product development. Former Tech Lead at major tech companies.',
      image: '../../public/profile-1.jpg',
      socials: { linkedin: '#', twitter: '#', github: '#' },
    },
    {
      name: 'Nguyễn Hữu Linh',
      role: 'Tech Lead',
      bio: 'Award-winning designer with expertise in UX strategy and design systems.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      socials: { linkedin: '#', twitter: '#' },
    },
    {
      name: 'Lê Chí Kiên',
      role: 'Fullstack Developer',
      bio: 'Full-stack architect specializing in scalable cloud solutions.',
      image: '../../public/profile-2.jpg',
      socials: { linkedin: '#', github: '#' },
    },
    {
      name: 'Nguyễn Ngô Việt Anh',
      role: 'Product Designer',
      bio: 'Strategic thinker turning complex problems into elegant solutions.',
      image: '../../public/profile-3.jpg',
      socials: { linkedin: '#', twitter: '#' },
    },
  ];

  const values = [
    {
      title: 'Excellence',
      description: 'We deliver nothing less than exceptional work.',
    },
    {
      title: 'Innovation',
      description: 'We embrace new ideas and technologies.',
    },
    {
      title: 'Integrity',
      description: 'We build trust through transparency.',
    },
    {
      title: 'Collaboration',
      description: 'We succeed together with our clients.',
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
          <div className="relative p-8 sm:p-12 rounded-3xl bg-dark-950 border border-dark-700 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-vertex-500/10 to-transparent" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-accent-cyan/10 to-transparent" />

            <div className="relative">
              <h3 className="font-display text-2xl font-bold text-dark-100 mb-8 text-center">
                Our Values Drive Everything We Do
              </h3>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value, index) => (
                  <div
                    key={value.title}
                    className="text-center"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-vertex-500/20 to-accent-cyan/20 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-gradient-to-r from-vertex-500 to-accent-cyan" />
                    </div>
                    <h4 className="font-display text-lg font-semibold text-dark-100 mb-2">
                      {value.title}
                    </h4>
                    <p className="text-sm text-dark-400">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
