import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      {/* Define the home screen (index) */}
      <Stack.Screen name="index" options={{ title: "Home" }} />

      {/* Define the PnrStatusScreen */}
      <Stack.Screen name="PnrStatusScreen" options={{ title: "PNR Status" }} />
    </Stack>
  );
}
