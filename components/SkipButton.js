import React from 'react'
import { Pressable } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faForwardStep } from '@fortawesome/free-solid-svg-icons'

export default function SkipButton({ handlePress, timerOn }) {
  // Skip button is disabled when timer is on
  return (
    <Pressable
      onPress={() => handlePress()}
      disabled={timerOn}>
      {timerOn
        ? <FontAwesomeIcon icon={faForwardStep} color="#fff" size={30} />
        : <FontAwesomeIcon icon={faForwardStep} color="#2d2d2d" size={30} />}
    </Pressable>
  )
}