import React from 'react'
import { StyleSheet, Pressable } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faPause } from '@fortawesome/free-solid-svg-icons'

export default function PrimaryButton({ handlePress, timerOn }) {
  const icon = timerOn ? faPause : faPlay

  return (
    <Pressable onPress={() => handlePress()}>
      <LinearGradient style={styles.button} colors={['#FBAB7E', '#F7CE68']}>
        <FontAwesomeIcon icon={icon} color="#fff" size={30} />
      </LinearGradient>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
    borderRadius: 40
  },
  /*  buttonShadow: {
     shadowColor: '#000',
     shadowOffset: {
       width: 0,
       height: 4,
     },
     shadowOpacity: 0.16,
     shadowRadius: 6,
     elevation: 6
   } */
})