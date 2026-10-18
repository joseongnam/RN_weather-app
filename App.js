import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [number, setNumber] = useState(2);
  return (
    <View style={styles.container}>
      <Text style={{ ...styles.text, color: "blue" }}>리액트 네이티브</Text>
      <Text style={styles.text}>리액트 네이티브</Text>
      <Text style={{ fontSize: 50 }}>결과 : {number}</Text>
      <View style={{ flexDirection: "row", gap: 10 }}>
        <Button title="더하기" onPress={() => setNumber(number + 1)} />
        <Button title="빼기" onPress={() => setNumber(number - 1)} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fcfcfc",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "red",
  },
});
