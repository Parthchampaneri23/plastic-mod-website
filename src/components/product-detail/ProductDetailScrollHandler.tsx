'use client';

import { useEffect } from 'react';

export default function ProductDetailScrollHandler() {
  useEffect(() => {
    // Automatically scroll to #details when opening product detail page
    const timer = setTimeout(() => {
      const el = document.getElementById('details');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return null;
}
