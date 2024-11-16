import React from 'react';
import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

const Details = () => {
  const router = useRouter();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button title="Go Back" onPress={() => router.back()} />
    </View>
  );
};

export default Details;
