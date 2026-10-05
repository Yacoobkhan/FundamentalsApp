import { Text, View, StyleSheet } from "react-native";
import {Link} from "expo-router";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Home Page</Text>
      <Link href='/about' style={styles.Texts}>About</Link>
      <Link href='/Profile' style={styles.Texts}>Profile</Link>
      {/* <Link href='/Profile/1' style={styles.Texts}>Profile 1</Link>
      <Link href='/products' style={styles.Texts}>Products</Link>

      <Link href='/missing-route' style={styles.Texts}>Missing Route</Link> */}

      <Link href='/login' style={styles.Texts}>Login</Link>
      <Link href='/register' style={styles.Texts}>Register</Link>

      <Link href='/forgot-password' style={styles.Texts}>Forgot Password</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  Texts:{
    margin:10,
  },
});
