import { StyleSheet, Text, View, Redirect, SafeAreaView } from "react-native";
export default function App() {
  return (
    <SafeAreaView>
      <Text>Hello</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
