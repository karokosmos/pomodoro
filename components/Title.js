import React from 'react'
import { StyleSheet, Text } from 'react-native'

export default function Title({ status }) {
  if (status === 'work') {
    return (
      <Text style={styles.text}>Make it happen!</Text>
    )
  }
  if (status === 'break') {
    return (
      <Text style={styles.text}>Take a break!</Text>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Montserrat_800ExtraBold',
    fontSize: 30,
    textAlign: 'center',
    color: '#2d2d2d'
  }
})