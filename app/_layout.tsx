import { Stack } from "expo-router";
import "../global.css";
export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false,animation:'ios_from_right' }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="(auth)"/>
      <Stack.Screen name="(home)"/>
      <Stack.Screen name="privacy"/>
    </Stack>
  );
}
