// app/analytics.tsx

'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = pathname + (searchParams?.toString() || '');
    window.gtag?.('config', 'G-5SREHPDN1E', {
      page_path: url,
    });
  }, [pathname, searchParams]);

  return null;
}
