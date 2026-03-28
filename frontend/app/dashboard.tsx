import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";
import { getUser } from "../src/store/authStore";

export default function Dashboard() {
  const router = useRouter();
  const user = getUser();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Welcome {user?.name}</Text>
      <Text>Role: {user?.role}</Text>

      <Button
        title="Register Patient"
        onPress={() => router.push("/patient-register")}
      />

      <Button
        title="Scan QR"
        onPress={() => router.push("/scan")}
      />

      <Button
        title="Doctor Panel"
        onPress={() => router.push("/doctor")}
      />
    </View>
  );
}