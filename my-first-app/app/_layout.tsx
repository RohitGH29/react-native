import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="Home" />
      <Stack.Screen name="Details" />
      {/* <Stack.Screen name="AnimalSounds" /> */}
    </Stack>
  );
}
