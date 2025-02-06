import { StyleSheet, Text, View, Redirect, SafeAreaView } from 'react-native';
import Onboarding from './(auth)/welcome.tsx'

export default function App() {
  return (
    <SafeAreaView>
      <Onboarding/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
