import { useEffect } from 'react';

export default function useScrollAnimation(selector) {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);

    function checkVisibility() {
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add('active');
        } else {
          el.classList.remove('active');
        }
      });
    }

    checkVisibility();

    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', checkVisibility);

    return () => {
      window.removeEventListener('scroll', checkVisibility);
      window.removeEventListener('resize', checkVisibility);
    };
  }, [selector]);
}
