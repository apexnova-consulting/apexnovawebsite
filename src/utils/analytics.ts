// GA4 Types
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
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
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
    !function (w: any, d: Document, t: string) {
      var s = d.createElement('script');
      s.src = 'https://analytics.tiktok.com/i18n/pixel/sdk.js?sdkid=' + process.env.NEXT_PUBLIC_TIKTOK_PIXEL;
      s.defer = true;
      d.head.appendChild(s);
    }(window, document, 'script');
  }
};

// Track Page View
export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined') {
    // GA4
    window.gtag('event', 'page_view', {
      page_location: url,
    });

    // TikTok
    if (window.ttq) {
      window.ttq.track('PageView');
    }
  }
};

// Track Event
export const trackEvent = (
  eventName: string,
  params: { [key: string]: any } = {}
) => {
  if (typeof window !== 'undefined') {
    // GA4
    window.gtag('event', eventName, params);

    // TikTok
    if (window.ttq) {
      window.ttq.track(eventName, params);
    }
  }
};
