// Type declarations for analytics scripts
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
    _linkedin_data_partner_ids: string[];
    lintrk: any;
    ttq: any;
    TiktokAnalyticsObject: string;
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

// Initialize LinkedIn Insight Tag
export const initLinkedIn = () => {
  if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_LINKEDIN_TAG) {
    window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
    window._linkedin_data_partner_ids.push(process.env.NEXT_PUBLIC_LINKEDIN_TAG);
  }
};

// Initialize TikTok Pixel
export const initTikTok = () => {
  if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_TIKTOK_PIXEL) {
    window.TiktokAnalyticsObject = 'ttq';
    window.ttq = window.ttq || [];
  }
};

// Track Page View
export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined') {
    // GA4
    window.gtag?.('event', 'page_view', {
      page_location: url,
    });

    // TikTok
    window.ttq?.track?.('PageView');
  }
};

// Track Event
export const trackEvent = (
  eventName: string,
  params: Record<string, any> = {}
) => {
  if (typeof window !== 'undefined') {
    // GA4
    window.gtag?.('event', eventName, params);

    // TikTok
    window.ttq?.track?.(eventName, params);
  }
};

// Export an empty object to satisfy TypeScript module requirements
export {};