import React from 'react'
import { StyleSheet, Pressable } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faForwardStep } from '@fortawesome/free-solid-svg-icons'

export default function SkipButton({ handlePress, timerOn }) {
  // Skip button is disabled when timer is on
  return (
    <Pressable
      onPress={() => handlePress()}
      style={styles.button}
      disabled={timerOn}>
      {timerOn
        ? <FontAwesomeIcon icon={faForwardStep} color="#eeeeee" size={30} />
        : <FontAwesomeIcon icon={faForwardStep} color="#cccccc" size={30} />}
    </Pressable>
  )
}


const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  }
})