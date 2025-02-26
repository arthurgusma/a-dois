import { Image, StyleSheet, Platform, View, Text } from 'react-native';
import { styles } from './styles';
import Header from '@/components/Header';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, padding: 40, gap: 40 }}>
      <Header />
      <Text style={styles.title}>Hello world</Text>
    </View>
  );
}