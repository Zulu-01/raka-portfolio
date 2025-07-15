import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.1e097e6bc2d64d2cb08dcffcea5c06aa',
  appName: 'website-lookalike-builder',
  webDir: 'dist',
  server: {
    url: 'https://1e097e6b-c2d6-4d2c-b08d-cffcea5c06aa.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#ffffff',
      androidSplashResourceName: 'splash',
      androidScaleType: 'CENTER_CROP',
      showSpinner: false,
      splashFullScreen: true,
      splashImmersive: true,
    },
  },
};

export default config;