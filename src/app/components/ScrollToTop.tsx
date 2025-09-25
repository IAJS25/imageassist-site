// src/app/components/ScrollToTop.tsx
'use client';

import { useEffect, useLayoutEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollToTop() {
  const pathname = usePathname();

  // Run as early as possible on initial mount
  useLayoutEffect(() => {
    // Stop the browser from restoring the last scroll position
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    // If there is a #hash (e.g., /#contact), strip it so the browser
    // doesn’t auto-jump to that anchor on reload
    if (typeof window !== 'undefined' && window.location.hash) {
      history.replaceState(
        null,
        '',
        window.location.pathname + window.location.search
      );
    }

    // Ensure we’re at the top immediately
    window.scrollTo(0, 0);
  }, []);

  // Also go to top on route changes
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);

  return null;
}
