import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

const roles = [
  "ADMIN",
  "VENDOR",
  "FIELD_STAFF",
  "DOCTOR",
  "PATIENT",
];

export default function Register() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Role</Text>

      {roles.map((role) => (
        <TouchableOpacity
          key={role}
          style={styles.card}
          onPress={() => router.push(`/register-form?role=${role}`)}
        >
          <Text style={styles.cardText}>{role}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f5fc",
    padding: 20,
    justifyContent: "center",
  },
  title: {
    color: "#000000",
    fontSize: 24,
    marginBottom: 30,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#22C55E",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  cardText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
});