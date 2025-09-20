// Type declarations for analytics scripts
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

// Initialize GA4
export const initGA4 = () => {
  if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_GA4_ID) {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag(...args: any[]) {
      window.dataLayer.push(args);
    };
    window.gtag('js', new Date());
    window.gtag('config', process.env.NEXT_PUBLIC_GA4_ID);
  }
};

// Track Page View
export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined') {
    window.gtag?.('event', 'page_view', {
      page_location: url,
    });
  }
};

// Track Event
export const trackEvent = (
  eventName: string,
  params: Record<string, any> = {}
) => {
  if (typeof window !== 'undefined') {
    window.gtag?.('event', eventName, params);
  }
};

// Export an empty object to satisfy TypeScript module requirements
export {};