import { useState } from 'react';
import { Text, StyleSheet, useWindowDimensions, SafeAreaView, Platform, Pressable } from 'react-native';


export default function App() {

  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  const onPress = () => {
    window.alert('Button Pressed')
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontSize: windowWidth > 768 ? 38 : 28 }}>Welcome Vikash!</Text>
      <Pressable
        onPress={onPress}
        style={styles.btnapp}
      ><Text >Click here</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'plum',
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? 40 : 25
  },
  btnapp: {
    ...Platform.select({
      ios: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        padding: 10,
        backgroundColor: 'cyan'
      },
      android: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3, 
        padding: 10,
        backgroundColor: 'beige'
      }

    })
  }

})