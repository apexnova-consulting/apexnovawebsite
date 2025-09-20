// Type declarations for analytics scripts
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

// Your GA4 Measurement ID
const GA_MEASUREMENT_ID = 'G-8SS5JWNLS6';

// Initialize GA4
export const initGA4 = () => {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag(...args: any[]) {
      window.dataLayer.push(args);
    };
    window.gtag('js', new Date());
    window.gtag('config', GA_MEASUREMENT_ID);
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