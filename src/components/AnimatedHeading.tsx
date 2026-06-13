import React, { useState, useEffect } from 'react';

interface AnimatedHeadingProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function AnimatedHeading({ text, className = '', style = {} }: AnimatedHeadingProps) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Start animation of transitions almost instantly on mount, relying on inline transitionDelay
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 50); // Small buffer to ensure mounting layout is stable before transitioning
    return () => clearTimeout(timer);
  }, []);

  const lines = text.split('\n');
  const initialDelay = 200; // Whole animation starts after 200ms
  const charDelay = 30; // 30ms delay between characters

  return (
    <h1 className={className} style={{ ...style, letterSpacing: '-0.04em' }}>
      {lines.map((line, lineIndex) => {
        const words = line.split(' ');
        let charCounter = 0; // Track the exact character placement index in this line

        return (
          <span key={lineIndex} className="block">
            {words.map((word, wordIndex) => {
              const wordChars = word.split('');
              return (
                <span key={wordIndex} className="inline-block whitespace-nowrap">
                  {wordChars.map((char, charIndex) => {
                    const currentLineIndex = charCounter;
                    charCounter++; // increment for next loop character

                    const calculatedDelay = (lineIndex * line.length * charDelay) + (currentLineIndex * charDelay);
                    const totalDelay = initialDelay + calculatedDelay;

                    return (
                      <span
                        key={charIndex}
                        className="inline-block transition-all duration-500 ease-out"
                        style={{
                          opacity: animate ? 1 : 0,
                          transform: animate ? 'translateX(0)' : 'translateX(-18px)',
                          transitionDelay: `${totalDelay}ms`,
                        }}
                      >
                        {char}
                      </span>
                    );
                  })}
                  {/* Render trailing spaces dynamically between word boundaries */}
                  {wordIndex < words.length - 1 && (
                    (() => {
                      const currentLineIndex = charCounter;
                      charCounter++; // increment for space space count

                      const calculatedDelay = (lineIndex * line.length * charDelay) + (currentLineIndex * charDelay);
                      const totalDelay = initialDelay + calculatedDelay;

                      return (
                        <span
                          key={`space-${wordIndex}`}
                          className="inline-block transition-all duration-500 ease-out"
                          style={{
                            opacity: animate ? 1 : 0,
                            transform: animate ? 'translateX(0)' : 'translateX(-18px)',
                            transitionDelay: `${totalDelay}ms`,
                            whiteSpace: 'pre',
                          }}
                        >
                          {'\u00A0'}
                        </span>
                      );
                    })()
                  )}
                </span>
              );
            })}
          </span>
        );
      })}
    </h1>
  );
}
