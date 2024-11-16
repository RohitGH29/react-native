import React from 'react';
import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function Index() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Welcome to the Main Screen</Text>
      <Button title="Go to Home" onPress={() => router.push('/Home')} />
        <br></br>
      <Button title="Go to Details" onPress={() => router.push('/Details')} />
      {/* <Button title="Animal Sounds" onPress={() => router.push('/AnimalSounds')} /> */}
    </View>
  );
}
