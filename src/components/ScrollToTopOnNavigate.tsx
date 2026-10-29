'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function ScrollToTopOnNavigate() {
  const pathname = usePathname();

  useEffect(() => {
    // Disable browser's automatic scroll restoration so page always starts at top on reload
    if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Always scroll to top on load or refresh if there is no specific hash, or even on contact page
    const handleScrollTop = () => {
      if (typeof window !== 'undefined' && !window.location.hash) {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      }
    };

    handleScrollTop();

    // In case browser restored scroll after hydration or layout shifts, ensure top
    const timer = setTimeout(handleScrollTop, 50);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
