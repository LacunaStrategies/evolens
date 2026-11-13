import { useAppBootstrap } from "@/providers/useAppBootstrap";
import { Stack } from "expo-router";

// Re-export expo-router's built-in ErrorBoundary so render-phase exceptions in
// the route tree surface with full router-aware stack frames.
export { ErrorBoundary } from 'expo-router';

function RootNavigator(): React.JSX.Element {
  return (
    <Stack screenOptions={{ headerShown: false }} />
  )
}

export default function RootLayout(): React.JSX.Element | null {
  const isReady = useAppBootstrap();
  
  if (!isReady) return null;
  
  return <RootNavigator />;
}
