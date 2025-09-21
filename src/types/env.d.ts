declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_URL: string;
      NEXT_PUBLIC_GA_ID: string;
      RESEND_API_KEY: string;
      STRIPE_SECRET_KEY: string;
      NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: string;
      NODE_ENV: 'development' | 'production' | 'test';
    }
  }
}
