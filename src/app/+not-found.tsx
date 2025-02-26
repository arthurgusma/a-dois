import { Link, Stack } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';


export default function NotFoundScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Screen not found, go back to</Text>
      <Link href={"/"} style={styles.text}>Dashboard</Link>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: "white"
  }
});