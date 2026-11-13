import { useAppBootstrap } from "@/providers/useAppBootstrap";
import { Stack } from "expo-router";

export default function RootLayout(): React.JSX.Element | null {
  const isReady = useAppBootstrap();
  
  if (!isReady) return null;
  
  return <Stack />;
}
