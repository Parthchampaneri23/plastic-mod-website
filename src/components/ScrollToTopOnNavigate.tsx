'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function ScrollToTopOnNavigate() {
  const pathname = usePathname();

  useEffect(() => {
    // If navigating to a URL without a hash anchor, immediately scroll to top
    if (typeof window !== 'undefined' && !window.location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [pathname]);

  return null;
}
