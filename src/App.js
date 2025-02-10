import { StyleSheet, Text, View, Redirect, SafeAreaView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import NavBar from "./components/navbar/NavBar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
export default function App() {
  const RootStack = createStackNavigator();
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <NavBar />
      </NavigationContainer>
    </SafeAreaProvider>
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
