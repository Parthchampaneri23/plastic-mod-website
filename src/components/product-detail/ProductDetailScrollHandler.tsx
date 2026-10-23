'use client';

import { useEffect } from 'react';

export default function ProductDetailScrollHandler() {
  useEffect(() => {
    // Only scroll to #details if the URL explicitly has #details hash
    if (typeof window !== 'undefined' && window.location.hash === '#details') {
      const timer = setTimeout(() => {
        const el = document.getElementById('details');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);

      return () => clearTimeout(timer);
    }
  }, []);

  return null;
}
