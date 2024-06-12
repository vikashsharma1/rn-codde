import { useState } from 'react';
import { Text, View, StyleSheet, Dimensions, useWindowDimensions } from 'react-native';


export default function App() {

  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  return (
    <View style={styles.container}>
      <View style={[styles.box, { width: windowWidth > 768 ? '50%' : '70%' }]}>
        <Text style={{ fontSize: windowWidth > 768 ? 42 : 24 }}>Welcome Vikash!</Text>
      </View>
    </View>
  );

}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'plum',
    alignItems: 'center',
    justifyContent: 'center'
  },
  box: {
    width: windowWidth > 768 ? '50%' : '70%',
    height: '40%',
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: windowWidth > 768 ? 42 : 24
  }
})