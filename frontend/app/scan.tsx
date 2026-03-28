import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { apiRequest } from "../src/api/api";
import { getToken } from "../src/store/authStore";

export default function Scan() {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanned, setScanned] = useState(false);
  const [patient, setPatient] = useState<any>(null);

  const token = getToken();

  useEffect(() => {
    const getPermission = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getPermission();
  }, []);

  const handleScan = async ({ data }: any) => {
    setScanned(true);

    try {
      const res = await apiRequest(
        "/patient/scan",
        "POST",
        { qrData: data },
        token ?? undefined
      );

      setPatient(res);
    } catch (err: any) {
      alert(err.message);
    }
  };

  if (hasPermission === null) {
    return <Text>Requesting camera permission...</Text>;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      {!scanned ? (
        <BarCodeScanner
          onBarCodeScanned={handleScan}
          style={{ height: 400, width: "100%" }}
        />
      ) : (
        <View>
          <Text style={styles.title}>Patient Info</Text>

          {patient && (
            <>
              <Text style={styles.text}>Name: {patient.user.name}</Text>
              <Text style={styles.text}>Phone: {patient.user.phone}</Text>
              <Text style={styles.text}>
                Approved: {patient.isApproved ? "Yes" : "No"}
              </Text>
            </>
          )}

          <Button title="Scan Again" onPress={() => setScanned(false)} />
        </View>
      )}
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
    color: "#22C55E",
    fontSize: 20,
    marginBottom: 10,
  },
  text: {
    color: "#fff",
    marginBottom: 5,
  },
});