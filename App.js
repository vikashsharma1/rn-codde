import { useState } from 'react';
import { Text, StyleSheet, useWindowDimensions, SafeAreaView } from 'react-native';


export default function App() {

  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  return (
    <SafeAreaView style={styles.container}>
        <Text style={{ fontSize: windowWidth > 768 ? 42 : 24 }}>Welcome Vikash!</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'plum',
    alignItems: 'center',
  }
})