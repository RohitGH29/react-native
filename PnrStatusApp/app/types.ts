// In `app/types.ts` or `types.ts`
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  index: undefined;
  PnrStatusScreen: undefined;
};

export type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
