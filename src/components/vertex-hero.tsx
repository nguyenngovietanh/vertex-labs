import { useEffect, useRef, useState } from 'react';
import { ArrowDown, Sparkles, Zap, Code2 } from 'lucide-react';

interface VertexHeroProps {
  scrollY: number;
  mousePosition: { x: number; y: number };
}

export function VertexHero({ scrollY, mousePosition }: VertexHeroProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const parallaxOffset = scrollY * 0.4;
  const mouseOffsetX = (mousePosition.x - window.innerWidth / 2) * 0.02;
  const mouseOffsetY = (mousePosition.y - window.innerHeight / 2) * 0.02;

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-dark-950">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `
              radial-gradient(ellipse 80% 50% at 50% -20%, rgba(34, 197, 94, 0.15) 0%, transparent 50%),
              radial-gradient(ellipse 60% 40% at 80% 60%, rgba(6, 182, 212, 0.1) 0%, transparent 50%),
              radial-gradient(ellipse 50% 30% at 20% 80%, rgba(20, 184, 166, 0.08) 0%, transparent 50%)
            `,
          }}
        />
        <div
          className="absolute inset-0 grid-pattern opacity-50"
          style={{ transform: `translateY(${parallaxOffset * 0.5}px)` }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-vertex-500/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${6 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 4}s`,
              transform: `translateY(${parallaxOffset * (0.1 + Math.random() * 0.2)}px)`,
            }}
          />
        ))}
      </div>

      {/* Dynamic light following cursor */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(34, 197, 94, 0.08) 0%, transparent 70%)',
          left: mousePosition.x - 300,
          top: mousePosition.y - 300,
          transform: 'translateZ(0)',
        }}
      />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Floating badges */}
        <div
          className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-300 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-dark-900/50 border border-dark-700/50 backdrop-blur-sm">
            <Sparkles size={14} className="text-vertex-400" />
            <span className="text-sm text-dark-300">Software Development</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-dark-900/50 border border-dark-700/50 backdrop-blur-sm">
            <Zap size={14} className="text-accent-cyan" />
            <span className="text-sm text-dark-300">Digital Products</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-dark-900/50 border border-dark-700/50 backdrop-blur-sm">
            <Code2 size={14} className="text-accent-teal" />
            <span className="text-sm text-dark-300">UI/UX Design</span>
          </div>
        </div>

        {/* Main heading */}
        <h1
          className={`font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-0'
          }`}
          // style={{
          //   transform: `translateY(${parallaxOffset * 0.2}px) translateX(${mouseOffsetX}px)`,
          // }}
        >
          <span className="block text-dark-100">Where Innovation</span>
          <span className="block mt-2 gradient-text">Meets Execution</span>
        </h1>

        {/* Subheading */}
        <p
          className={`max-w-2xl mx-auto text-lg sm:text-xl text-dark-400 mb-12 leading-relaxed transition-all duration-1000 delay-200 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          // style={{
          //   transform: `translateY(${parallaxOffset * 0.15}px)`,
          // }}
        >
          We are a team of experienced engineers and designers building exceptional
          digital products. From concept to launch, we transform ideas into reality.
        </p>

        {/* CTAs */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-400 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <a
            href="#projects"
            className="magnetic-btn group px-8 py-4 bg-gradient-to-r from-vertex-600 to-accent-cyan rounded-full font-body font-medium text-dark-950 hover:from-vertex-500 hover:to-accent-teal transition-all duration-300 glow-green flex items-center gap-2"
          >
            <span>View Our Work</span>
            <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="magnetic-btn px-8 py-4 rounded-full font-body font-medium text-dark-100 border border-dark-600 hover:border-vertex-500/50 hover:bg-dark-900/50 transition-all duration-300"
          >
            Start a Project
          </a>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-dark-950 to-transparent pointer-events-none" />

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-700 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
        style={{
          transform: `translateX(-50%) translateY(${parallaxOffset * -0.1}px)`,
        }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-dark-500 uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-dark-600 flex justify-center">
            <div className="w-1.5 h-2 bg-vertex-500 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </div>

      {/* 3D floating shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 left-[10%] w-32 h-32 border border-vertex-500/20 rounded-xl"
          style={{
            transform: `rotate(45deg) translateY(${parallaxOffset * 0.3}px) translateX(${mouseOffsetX * 0.5}px)`,
          }}
        />
        <div
          className="absolute top-1/3 right-[15%] w-24 h-24 border border-accent-cyan/20 rounded-full"
          style={{
            transform: `translateY(${parallaxOffset * 0.4}px) translateX(${mouseOffsetX * -0.3}px)`,
          }}
        />
        <div
          className="absolute bottom-1/3 left-[20%] w-16 h-16 bg-gradient-to-br from-vertex-500/10 to-accent-teal/10 rounded-lg"
          style={{
            transform: `rotate(-15deg) translateY(${parallaxOffset * -0.25}px) translateX(${mouseOffsetX * 0.4}px)`,
          }}
        />
        <div
          className="absolute bottom-1/4 right-[25%] w-20 h-20 border border-dark-600/30 rounded-md"
          style={{
            transform: `rotate(30deg) translateY(${parallaxOffset * -0.35}px) translateX(${mouseOffsetX * -0.4}px)`,
          }}
        />
      </div>
    </section>
  );
}
