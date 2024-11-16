import React from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';

const animals = [
  { name: 'Dog', image: require('../assets/images/react-logo.png'), sound: require('../assets/sounds/dog.mp3') },
  { name: 'Cat', image: require('../assets/images/react-logo.png'), sound: require('../assets/sounds/dog.mp3') },
  { name: 'Cow', image: require('../assets/images/react-logo.png'), sound: require('../assets/sounds/dog.mp3') },
  { name: 'Bird', image: require('../assets/images/react-logo.png'), sound: require('../assets/sounds/dog.mp3') },
];

export default function AnimalSounds() {
  const playSound = async (soundUri: any) => {
    const { sound } = await Audio.Sound.createAsync(soundUri);
    await sound.playAsync();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Animal Sounds</Text>
      <View style={styles.grid}>
        {animals.map((animal) => (
          <TouchableOpacity key={animal.name} onPress={() => playSound(animal.sound)} style={styles.item}>
            <Image source={animal.image} style={styles.image} />
            <Text style={styles.label}>{animal.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '100%',
  },
  item: {
    alignItems: 'center',
    margin: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  label: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: '500',
  },
});
