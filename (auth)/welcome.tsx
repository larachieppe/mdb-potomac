import { StyleSheet, View, Text, SafeAreaView, Image } from 'react-native'
import React from 'react'

const Onboarding = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Onboarding</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Onboarding