import { AppOverlay } from '@/shared/components/AppOverlay';
import { NavigationBar } from 'expo-navigation-bar';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { KeyboardProvider } from 'react-native-keyboard-controller';
import { SafeAreaProvider } from 'react-native-safe-area-context';

/**
 * Every app-wide provider, in one place. The navigation root (Expo Router's
 * `<Stack>` or React Navigation's `<NavigationContainer>`) renders inside it.
 */
export function AppProviders({ children }: { children: React.ReactNode }): React.JSX.Element {
  return (
    <>
      <StatusBar />
      <NavigationBar />
      <GestureHandlerRootView style={{ flex: 1 }}>
        <KeyboardProvider>
          <SafeAreaProvider>
            {children}
          </SafeAreaProvider>
        </KeyboardProvider>
        <AppOverlay />
      </GestureHandlerRootView>
    </>
  );
}
