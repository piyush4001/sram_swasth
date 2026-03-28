import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import { apiRequest } from "../src/api/api";
import { setAuth } from "../src/store/authStore";

export default function Login() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleLogin = async () => {
    try {
      const res = await apiRequest("/auth/login", "POST", {
        phone,
        password,
      });

      setAuth(res);

      alert("Login Success");

      router.replace("/dashboard");
    } catch (err: any) {
      alert(err.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shram Swasth Login</Text>

      <TextInput
        placeholder="Phone"
        value={phone}
        onChangeText={setPhone}
        style={styles.input}
      />

      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={styles.input}
      />

      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 15,
  },
});