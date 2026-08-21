import React, { useState, useEffect } from 'react';

const CYBER_CHARS = 'ABCDEFGHIKLMNOPQRSTVXYZ0123456789@#$&%<>/[]{}';

export default function DecryptedText({ phrases = [] }) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDecrypting, setIsDecrypting] = useState(false);

  const currentTarget = phrases[phraseIndex] || '';

  useEffect(() => {
    if (!currentTarget) return;

    let iteration = 0;
    const maxIterations = currentTarget.length;

    const interval = setInterval(() => {
      setDisplayText(() => {
        return currentTarget
          .split('')
          .map((char, idx) => {
            if (char === ' ') return ' ';
            if (idx < iteration) return char;
            return CYBER_CHARS[Math.floor(Math.random() * CYBER_CHARS.length)];
          })
          .join('');
      });

      iteration += 1 / 2;

      if (iteration >= maxIterations) {
        clearInterval(interval);
        setDisplayText(currentTarget);
        
        // Wait then cycle to next phrase
        setTimeout(() => {
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }, 3200);
      }
    }, 40);

    return () => clearInterval(interval);
  }, [phraseIndex, phrases]);

  return (
    <span className="font-heading tracking-tight">
      {displayText}
    </span>
  );
}
