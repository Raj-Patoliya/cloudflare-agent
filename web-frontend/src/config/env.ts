export const env = {
  API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001',
  APP_ENV: process.env.NODE_ENV || 'development',
  IS_PRODUCTION: process.env.NODE_ENV === 'production',
} as const;
