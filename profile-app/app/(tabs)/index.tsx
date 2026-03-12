import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import Profile from "../../components/Profile";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.title}>
        Programação para Dispositivos Móveis
      </Text>

      <Profile />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ffffff",
    paddingTop: 40
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
    color: "#000"
  }
});