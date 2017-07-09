import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
const Greeter = ({name}) => (
  <Text style={styles.greeting}>
    Hello, {name}, nice to meet you!
  </Text>
)

const styles = StyleSheet.create({
  greeting: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
})
export default Greeter
