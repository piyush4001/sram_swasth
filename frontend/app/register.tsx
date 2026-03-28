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
    backgroundColor: "#0F172A",
    padding: 20,
    justifyContent: "center",
  },
  title: {
    color: "#fff",
    fontSize: 24,
    marginBottom: 30,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#1E293B",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  cardText: {
    color: "#22C55E",
    fontSize: 16,
    textAlign: "center",
  },
});