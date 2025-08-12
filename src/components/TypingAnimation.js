import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

export default function TypingAnimation() {
  return (
    <span style={{ color: '#4fc3f7', fontWeight: '700' }}>
      <Typewriter
        words={['Web Developer', 'React Developer', 'MERN Stack Developer']}
        loop={0}          // infinite loop
        cursor
        cursorStyle="_"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1500}
      />
    </span>
  );
}
