import { Text, View, StyleSheet } from "react-native";
import {Link} from "expo-router";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Home Page</Text>
      <Link href='/about'>About</Link>
      <Link href='/Profile'>Profile</Link>
      <Link href='/products'>Products</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
