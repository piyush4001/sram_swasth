import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function Landing() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={require("../assets/images/logo.png")} // replace with your logo
        style={styles.logo}
      />

      {/* Title */}
      <Text style={styles.title}>Shram Swasthya</Text>

      {/* Subtitle */}
      <Text style={styles.subtitle}>
        Health Monitoring System for Workers
      </Text>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => router.push("/login")}
        >
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.registerBtn}
          onPress={() => router.push("/register")}
        >
          <Text style={styles.registerText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: "#94A3B8",
    marginBottom: 40,
    textAlign: "center",
  },
  buttonContainer: {
    width: "100%",
  },
  loginBtn: {
    backgroundColor: "#22C55E",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  loginText: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "600",
  },
  registerBtn: {
    borderWidth: 1,
    borderColor: "#22C55E",
    padding: 15,
    borderRadius: 10,
  },
  registerText: {
    textAlign: "center",
    color: "#22C55E",
    fontWeight: "600",
  },
});