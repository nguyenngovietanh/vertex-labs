import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';

export function VertexProjects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeProject, setActiveProject] = useState<number | null>(null);

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

  const projects = [
    {
      id: 1,
      title: 'FinTech Platform',
      category: 'Web Application',
      description:
        'A comprehensive financial management platform with real-time analytics, portfolio tracking, and automated reporting.',
      image: 'https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
      color: 'from-vertex-500 to-accent-teal',
    },
    {
      id: 2,
      title: 'Healthcare App',
      category: 'Mobile Application',
      description:
        'Patient-centric healthcare app enabling telemedicine consultations, appointment scheduling, and health records management.',
      image: 'https://images.pexels.com/photos/8834532/pexels-photo-8834532.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React Native', 'Firebase', 'Node.js'],
      color: 'from-accent-cyan to-vertex-500',
    },
    {
      id: 3,
      title: 'E-Commerce Platform',
      category: 'Full Stack',
      description:
        'Scalable e-commerce solution with advanced inventory management, multi-vendor support, and AI-powered recommendations.',
      image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Next.js', 'Stripe', 'MongoDB', 'Redis'],
      color: 'from-accent-teal to-accent-cyan',
    },
    {
      id: 4,
      title: 'SaaS Dashboard',
      category: 'Enterprise Software',
      description:
        'Enterprise analytics dashboard with customizable widgets, team collaboration, and automated insights generation.',
      image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Vue.js', 'Python', 'TensorFlow', 'Docker'],
      color: 'from-vertex-600 to-vertex-500',
    },
    {
      id: 5,
      title: 'Real Estate Platform',
      category: 'Web Application',
      description:
        'Property listing platform with virtual tours, mortgage calculator, and AI-powered property valuation.',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React', 'Three.js', 'Python', 'PostgreSQL'],
      color: 'from-accent-cyan to-vertex-600',
    },
    {
      id: 6,
      title: 'EdTech Platform',
      category: 'Learning Management',
      description:
        'Interactive learning platform with live classes, progress tracking, and gamified learning experience.',
      image: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Next.js', 'WebRTC', 'Redis', 'AWS'],
      color: 'from-vertex-500 to-accent-cyan',
    },
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-32 bg-dark-950 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-vertex-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-accent-cyan/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div
          className={`max-w-3xl mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-vertex-500/10 border border-vertex-500/20 mb-6">
            <span className="text-sm text-vertex-400 font-medium">Our Work</span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            <span className="text-dark-100">Projects that </span>
            <span className="gradient-text">speak for themselves</span>
          </h2>

          <p className="text-lg text-dark-400">
            A selection of our recent work, showcasing our expertise in building
            impactful digital products across various industries.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              {/* Card */}
              <div className="relative h-[400px] rounded-2xl overflow-hidden bg-dark-900 border border-dark-700 group-hover:border-dark-600 transition-all duration-500">
                {/* Image */}
                <div className="absolute inset-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-700"
                  />
                  {/* Gradient overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/60 to-transparent" />
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  {/* Category tag */}
                  <div
                    className={`self-start px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${project.color} text-dark-950 mb-4 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500`}
                  >
                    {project.category}
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-2xl font-semibold text-white mb-2 group-hover:text-vertex-400 transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-dark-300 text-sm mb-4 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500 delay-75">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500 delay-100">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs text-dark-300 bg-dark-800/80 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View button */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-10 h-10 rounded-full bg-dark-950/80 backdrop-blur-sm flex items-center justify-center text-white hover:text-vertex-400 hover:bg-dark-900 transition-colors cursor-pointer">
                      <ArrowUpRight size={18} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all button */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-dark-600 text-dark-300 hover:text-white hover:border-vertex-500/50 hover:bg-dark-900/50 transition-all duration-300 group"
          >
            <span>Have a project in mind?</span>
            <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
