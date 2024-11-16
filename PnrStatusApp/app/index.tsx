import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from './types';

export default function HomeScreen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to PNR Status"
        onPress={() => navigation.navigate('PnrStatusScreen')}
      />
    </View>
  );
}
