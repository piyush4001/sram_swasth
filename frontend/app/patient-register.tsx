import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
} from "react-native";
import { useState } from "react";
import { apiRequest } from "../src/api/api";
import { getUser, getToken } from "../src/store/authStore";

export default function PatientRegister() {
  const [samagraId, setSamagraId] = useState("");
  const [abhaId, setAbhaId] = useState("");

  const user = getUser();
  const token = getToken();

  const handleRegister = async () => {
    try {
      const res = await apiRequest(
        "/patient",
        "POST",
        {
          userId: user.id,   // 🔥 important
          samagraId,
          abhaId,
        },
        token ?? undefined
      );

      console.log(res);
      alert("Patient Registered Successfully");
    } catch (err: any) {
      alert(err.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Patient Registration</Text>

      <TextInput
        placeholder="Samagra ID"
        placeholderTextColor="#94A3B8"
        value={samagraId}
        onChangeText={setSamagraId}
        style={styles.input}
      />

      <TextInput
        placeholder="ABHA ID"
        placeholderTextColor="#94A3B8"
        value={abhaId}
        onChangeText={setAbhaId}
        style={styles.input}
      />

      <Button title="Register Patient" onPress={handleRegister} />
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
    fontSize: 22,
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