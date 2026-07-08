import { useEffect, useState } from 'react';

interface IntroProps {
  onComplete: () => void;
}

export function VertexIntro({ onComplete }: IntroProps) {
  const [phase, setPhase] = useState<'initial' | 'reveal' | 'slide' | 'complete'>('initial');

  useEffect(() => {
    // Start reveal animation
    const revealTimer = setTimeout(() => setPhase('reveal'), 200);
    // Start slide animation
    const slideTimer = setTimeout(() => setPhase('slide'), 2000);
    // Complete intro
    const completeTimer = setTimeout(() => {
      setPhase('complete');
      onComplete();
    }, 3200);

    return () => {
      clearTimeout(revealTimer);
      clearTimeout(slideTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  if (phase === 'complete') return null;

  const letters = 'VERTEX'.split('');
  const labLetters = 'LABS'.split('');

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden transition-transform duration-[1000ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
        phase === 'slide' ? 'translate-y-[-100%]' : 'translate-y-0'
      }`}
    >
      {/* Background layers */}
      <div
        className={`absolute inset-0 bg-dark-950 transition-transform duration-[1200ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
          phase === 'slide' ? 'translate-y-[-100%]' : 'translate-y-0'
        }`}
      />
      <div
        className={`absolute inset-0 bg-dark-900 transition-transform duration-[1000ms] delay-100 ease-[cubic-bezier(0.76,0,0.24,1)] ${
          phase === 'slide' ? 'translate-y-[-100%]' : 'translate-y-0'
        }`}
        style={{ transitionDelay: '100ms' }}
      />

      {/* Animated grid lines */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={`h-${i}`}
            className={`absolute h-[1px] bg-gradient-to-r from-transparent via-vertex-500/30 to-transparent transition-all duration-1000 ${
              phase === 'reveal' ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              top: `${(i + 1) * 8}%`,
              left: 0,
              right: 0,
              transitionDelay: `${i * 50 + 500}ms`,
            }}
          />
        ))}
        {[...Array(8)].map((_, i) => (
          <div
            key={`v-${i}`}
            className={`absolute w-[1px] bg-gradient-to-b from-transparent via-accent-cyan/20 to-transparent transition-all duration-1000 ${
              phase === 'reveal' ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              left: `${(i + 1) * 12}%`,
              top: 0,
              bottom: 0,
              transitionDelay: `${i * 50 + 600}ms`,
            }}
          />
        ))}
      </div>

      {/* Main content container */}
      <div className="relative z-10 flex flex-col items-center">
        {/* VERTEX text */}
        <div className="flex overflow-hidden">
          {letters.map((letter, index) => (
            <div
              key={index}
              className="overflow-hidden"
              style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
            >
              <span
                className={`inline-block font-beau-sans text-6xl sm:text-8xl md:text-9xl font-bold text-dark-100 transition-all duration-700 ${
                  phase === 'reveal' ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                }`}
                style={{ transitionDelay: `${index * 80 + 300}ms` }}
              >
                {letter}
              </span>
            </div>
          ))}
        </div>

        {/* Animated line */}
        <div className="relative w-full mt-4 mb-4">
          <div
            className={`h-[2px] bg-gradient-to-r from-transparent via-vertex-500 to-accent-cyan transition-all duration-1000 ease-out ${
              phase === 'reveal' ? 'w-full opacity-100' : 'w-0 opacity-0'
            }`}
            style={{ transitionDelay: '900ms' }}
          />
        </div>

        {/* LABS text */}
        <div className="flex overflow-hidden">
          {labLetters.map((letter, index) => (
            <div
              key={index}
              className="overflow-hidden"
              style={{
                clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
              }}
            >
              <span
                className={`inline-block font-display text-4xl sm:text-6xl md:text-7xl font-light tracking-[0.3em] text-transparent bg-clip-text bg-gradient-to-r from-vertex-400 to-accent-cyan transition-all duration-700 ${
                  phase === 'reveal' ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                }`}
                style={{
                  transitionDelay: `${index * 100 + 1000}ms`,
                }}
              >
                {letter}
              </span>
            </div>
          ))}
        </div>

        {/* Tagline */}
        <div className="overflow-hidden mt-8">
          <p
            className={`text-dark-400 text-sm sm:text-base tracking-[0.2em] uppercase transition-all duration-700 ${
              phase === 'reveal' ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
            }`}
            style={{ transitionDelay: '1400ms' }}
          >
            Digital Innovation Studio
          </p>
        </div>

        {/* Decorative elements */}
        <div
          className={`absolute -top-20 -left-20 w-40 h-40 rounded-full transition-all duration-1000 ${
            phase === 'reveal' ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
          }`}
          style={{
            background: 'radial-gradient(circle, rgba(34,197,94,0.15) 0%, transparent 70%)',
            transitionDelay: '1200ms',
          }}
        />
        <div
          className={`absolute -bottom-20 -right-20 w-40 h-40 rounded-full transition-all duration-1000 ${
            phase === 'reveal' ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
          }`}
          style={{
            background: 'radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 70%)',
            transitionDelay: '1300ms',
          }}
        />
      </div>

      {/* Loading progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-dark-800">
        <div
          className={`h-full bg-gradient-to-r from-vertex-500 to-accent-cyan transition-all duration-[2500ms] ease-linear ${
            phase === 'reveal' ? 'w-full' : 'w-0'
          }`}
        />
      </div>

      {/* Corner decorations */}
      <div
        className={`absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-vertex-500/30 transition-all duration-700 ${
          phase === 'reveal' ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
        }`}
        style={{ transitionDelay: '500ms' }}
      />
      <div
        className={`absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-accent-cyan/30 transition-all duration-700 ${
          phase === 'reveal' ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
        }`}
        style={{ transitionDelay: '550ms' }}
      />
      <div
        className={`absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-accent-teal/30 transition-all duration-700 ${
          phase === 'reveal' ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
        }`}
        style={{ transitionDelay: '600ms' }}
      />
      <div
        className={`absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-vertex-500/30 transition-all duration-700 ${
          phase === 'reveal' ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
        }`}
        style={{ transitionDelay: '650ms' }}
      />

      {/* Floating particles during intro */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className={`absolute w-1 h-1 rounded-full bg-vertex-400/40 transition-all duration-[3000ms] ${
            phase === 'reveal' ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            transform: `translateY(${Math.random() * 100 - 50}px)`,
            transitionDelay: `${Math.random() * 1000 + 1000}ms`,
          }}
        />
      ))}
    </div>
  );
}
