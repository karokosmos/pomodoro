import React from 'react'
import { StyleSheet, Pressable } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faPause } from '@fortawesome/free-solid-svg-icons'

export default function PrimaryButton({ handlePress, timerOn }) {
  const icon = timerOn ? faPause : faPlay

  return (
    <Pressable onPress={() => handlePress()} style={styles.button}>
      <FontAwesomeIcon icon={icon} color="#fff" size={30} />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
    borderRadius: 40,
    backgroundColor: '#2d2d2d',
    marginHorizontal: 30
  }
})