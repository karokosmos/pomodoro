import React from 'react'
import { Pressable } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faGear } from '@fortawesome/free-solid-svg-icons'

export default function SettingsButton({ handlePress, timerOn }) {
  // Settings button is disabled when timer is on
  return (
    <Pressable
      onPress={handlePress}
      disabled={timerOn}>
      {timerOn
        ? <FontAwesomeIcon icon={faGear} color="#fff" size={30} />
        : <FontAwesomeIcon icon={faGear} color="#2d2d2d" size={30} />}
    </Pressable>
  )
}