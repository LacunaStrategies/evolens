import 'tsx/cjs';
// Hydrate process.env from .env files BEFORE evaluating ./env (which validates).
// Without this, EAS CLI's fallback `@expo/config` evaluates this file with an
// empty process.env and zod validation aborts the build. See ./load-env.ts.
import './load-env';

import { ConfigContext, ExpoConfig } from 'expo/config';

import Env from './env';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: Env.EXPO_PUBLIC_NAME,
  slug: 'evolens',
  scheme: 'evolens',
  version: Env.EXPO_PUBLIC_VERSION,
  orientation: 'portrait',
  icon: './assets/images/icon.png',
  userInterfaceStyle: 'automatic',
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: true,
    bundleIdentifier: Env.EXPO_PUBLIC_PACKAGE_NAME,
    icon: "./assets/expo.icon"
  },
  android: {
    adaptiveIcon: {
      backgroundColor: "#E6F4FE",
      foregroundImage: "./assets/images/android-icon-foreground.png",
      backgroundImage: "./assets/images/android-icon-background.png",
      monochromeImage: "./assets/images/android-icon-monochrome.png"
    },
    // Edge-to-edge is mandatory (Android 16) and built into Expo — no config needed.
    package: Env.EXPO_PUBLIC_PACKAGE_NAME,
    predictiveBackGestureEnabled: false,
  },
  web: {
    bundler: 'metro',
    favicon: "./assets/images/favicon.png"
  },
  plugins: [
    'expo-router',
    [
      "expo-splash-screen",
      {
        "backgroundColor": "#208AEF",
        "image": "./assets/images/splash-icon.png",
        "imageWidth": 76
      }
    ],
    'expo-localization',
    [
      'expo-font',
      {
        fonts: [
          './src/assets/fonts/OpenSans-Regular.ttf',
          './src/assets/fonts/OpenSans-Italic.ttf',
          './src/assets/fonts/OpenSans-Semibold.ttf',
          './src/assets/fonts/OpenSans-SemiboldItalic.ttf',
          './src/assets/fonts/OpenSans-Bold.ttf',
          './src/assets/fonts/OpenSans-BoldItalic.ttf',
        ],
      },
    ],
    // Required from SDK 55 onward — registers the SecureStore native module.
    'expo-secure-store',
    'expo-status-bar',
    // Keep the navigation bar fully transparent instead of adding a contrast scrim.
    ['expo-navigation-bar', { enforceContrast: false }],
    [
      'expo-build-properties',
      {
        android: {
          // R8 minifies Java/Kotlin in release builds. Required for
          // `enableShrinkResourcesInReleaseBuilds` (the plugin throws otherwise).
          enableMinifyInReleaseBuilds: true,
          // Strip unused resources (drawables, strings, layouts) from the APK/AAB.
          enableShrinkResourcesInReleaseBuilds: true,
        },
        // Exclude emulator-only ABIs from release builds — reduces APK/AAB size.
        // x86 / x86_64 are only needed for emulators; real devices use ARM.
        //
        // The key is `buildArchs`, NOT `abiFilters`. It writes
        // `reactNativeArchitectures` into gradle.properties, which is what
        // the RN Gradle plugin actually reads. `expo-build-properties`
        // validates its android block WITHOUT `additionalProperties: false`,
        // so a misspelled key is accepted, ignored, and never warned about —
        // `abiFilters` sat here through a prebuild and a release build while
        // all four ABIs kept shipping.
        buildArchs: ['arm64-v8a', 'armeabi-v7a'],
      },
    ],
  ],
  experiments: {
    reactCompiler: true,
    typedRoutes: true,
  },
});
