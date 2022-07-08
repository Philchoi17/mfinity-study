import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const About: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text>About</Text>
      </View>
      <View style={styles.container}>
        <Text>About</Text>
      </View>
      <View style={styles.container}>
        <Text>About</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'hotpink',
  },
})

export default About
