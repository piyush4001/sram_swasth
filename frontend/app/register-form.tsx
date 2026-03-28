import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
} from "react-native";
import { useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { apiRequest } from "../src/api/api";

export default function RegisterForm() {
  const { role } = useLocalSearchParams();
  const router = useRouter();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      await apiRequest("/auth/register", "POST", {
        name,
        phone,
        password,
        role,
      });

      alert("Registered successfully");

      router.replace("/login");
    } catch (err: any) {
      alert(err.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register as {role}</Text>

      <TextInput
        placeholder="Name"
        placeholderTextColor="#94A3B8"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />

      <TextInput
        placeholder="Phone"
        placeholderTextColor="#94A3B8"
        value={phone}
        onChangeText={setPhone}
        style={styles.input}
      />

      <TextInput
        placeholder="Password"
        placeholderTextColor="#94A3B8"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={styles.input}
      />

      <Button title="Register" onPress={handleRegister} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
    padding: 20,
    justifyContent: "center",
  },
  title: {
    color: "#fff",
    fontSize: 20,
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#334155",
    padding: 10,
    marginBottom: 15,
    color: "#fff",
  },
});