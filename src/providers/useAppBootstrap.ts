import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';

import { initStorage } from '@/storage';

SplashScreen.preventAutoHideAsync();
SplashScreen.setOptions({ duration: 500, fade: true });

/**
 * Runs one-time start-up work while the splash screen is visible and returns
 * `true` once the app can render.
 *
 * Order matters:
 *   1. `initStorage()` — creates the encrypted MMKV instance.
 */
export function useAppBootstrap(): boolean {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await initStorage()
      } catch (error) {
        if (__DEV__) console.error('[useAppBootstrap] App initialization failed:', error);
      }
      setIsReady(true);
      SplashScreen.hideAsync();
    }
    prepare();
  }, []);

  return isReady;
}
