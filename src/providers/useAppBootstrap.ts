import { useEffect, useState } from 'react';
import { useFonts } from '@expo-google-fonts/geist';
import * as SplashScreen from 'expo-splash-screen';

import { initI18n } from '@/localization/i18n';
import { initStorage } from '@/storage';
import { fontAssets } from '@/theme/fonts';

SplashScreen.preventAutoHideAsync();
SplashScreen.setOptions({ duration: 500, fade: true });

/**
 * Runs one-time start-up work while the splash screen is visible and returns
 * `true` once the app can render.
 *
 * Order matters:
 *   1. `initStorage()` — creates the encrypted MMKV instance.
 *   2. `initI18n()` — reads the saved language from MMKV; initializing earlier
 *      would always fall back to the device locale.
 *
 * Fonts load in parallel. A font load error still lets the app render (with
 * the system fallback) rather than blocking forever on the splash screen.
 */
export function useAppBootstrap(): boolean {
  const [isReady, setIsReady] = useState(false);
  const [fontsLoaded, fontError] = useFonts(fontAssets);
  const areFontsReady = fontsLoaded || fontError !== null;
  const canRender = isReady && areFontsReady;

  useEffect(() => {
    async function prepare() {
      try {
        await initStorage().then();
        await initI18n();
      } catch (error) {
        if (__DEV__) console.error('[useAppBootstrap] App initialization failed:', error);
      }
      setIsReady(true);
    }
    prepare();
  }, []);

  useEffect(() => {
    if (canRender) SplashScreen.hideAsync();
  }, [canRender]);

  return canRender;
}
