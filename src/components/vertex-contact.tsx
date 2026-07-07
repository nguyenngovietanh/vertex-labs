import { useEffect, useRef, useState, FormEvent } from 'react';
import { Send, Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react';

export function VertexContact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formState);
    // Reset form
    setFormState({ name: '', email: '', company: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Mail size={20} />,
      label: 'Email Us',
      value: 'hello@vertexlabs.io',
      href: 'mailto:hello@vertexlabs.io',
    },
    {
      icon: <Phone size={20} />,
      label: 'Call Us',
      value: '+84 123 456 789',
      href: 'tel:+84123456789',
    },
    {
      icon: <MapPin size={20} />,
      label: 'Visit Us',
      value: 'Ho Chi Minh City, Vietnam',
      href: '#',
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-32 bg-dark-900 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-vertex-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-accent-cyan/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-vertex-500/10 border border-vertex-500/20 mb-6">
            <span className="text-sm text-vertex-400 font-medium">Get in Touch</span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            <span className="text-dark-100">Let's build </span>
            <span className="gradient-text">something great</span>
          </h2>

          <p className="text-lg text-dark-400">
            Ready to transform your idea into reality? We'd love to hear about your
            project. Drop us a line and let's start the conversation.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact form */}
          <div
            className={`lg:col-span-3 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="relative p-8 sm:p-10 rounded-3xl bg-dark-950 border border-dark-700 overflow-hidden">
              {/* Top gradient line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-vertex-500 via-accent-cyan to-accent-teal" />

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-dark-300 mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-dark-900 border border-dark-700 text-dark-100 placeholder-dark-500 focus:border-vertex-500 focus:outline-none focus:ring-1 focus:ring-vertex-500/50 transition-all"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-dark-300 mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-dark-900 border border-dark-700 text-dark-100 placeholder-dark-500 focus:border-vertex-500 focus:outline-none focus:ring-1 focus:ring-vertex-500/50 transition-all"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-dark-300 mb-2"
                  >
                    Company (Optional)
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={formState.company}
                    onChange={(e) =>
                      setFormState({ ...formState, company: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-dark-900 border border-dark-700 text-dark-100 placeholder-dark-500 focus:border-vertex-500 focus:outline-none focus:ring-1 focus:ring-vertex-500/50 transition-all"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-dark-300 mb-2"
                  >
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-dark-900 border border-dark-700 text-dark-100 placeholder-dark-500 focus:border-vertex-500 focus:outline-none focus:ring-1 focus:ring-vertex-500/50 transition-all resize-none"
                    placeholder="Tell us about your project..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="group w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-vertex-600 to-accent-cyan rounded-xl font-medium text-dark-950 hover:from-vertex-500 hover:to-accent-teal transition-all duration-300 glow-green"
                >
                  <span>Send Message</span>
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>

          {/* Contact info */}
          <div
            className={`lg:col-span-2 space-y-6 transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {contactInfo.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className="group flex items-start gap-4 p-6 rounded-2xl bg-dark-950 border border-dark-700 hover:border-dark-600 transition-all duration-300"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-vertex-500/20 to-accent-cyan/20 flex items-center justify-center text-vertex-400 group-hover:from-vertex-500 group-hover:to-accent-cyan group-hover:text-dark-950 transition-all duration-300">
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

            {/* CTA card */}
            <div className="relative p-6 rounded-2xl bg-gradient-to-br from-vertex-900/30 to-dark-950 border border-vertex-800/30 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-vertex-500/10 rounded-full blur-2xl" />
              <div className="relative">
                <p className="font-display text-lg font-semibold text-dark-100 mb-2">
                  Ready to start?
                </p>
                <p className="text-sm text-dark-400 mb-4">
                  Book a free consultation to discuss your project requirements.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-medium text-vertex-400 hover:text-vertex-300 transition-colors"
                >
                  <span>Schedule a Call</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
