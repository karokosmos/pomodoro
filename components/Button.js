import React from 'react'
import { StyleSheet, Pressable, Text } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faPause } from '@fortawesome/free-solid-svg-icons'

export default function Button({ handlePress, timerOn }) {
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
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    /* width: 180, */
    paddingVertical: 25,
    paddingHorizontal: 25,
    borderRadius: 40,
    backgroundColor: '#2D2D2D',
  },
  buttonShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.16,
    shadowRadius: 6,
    elevation: 6
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'Montserrat_700Bold',
    textTransform: 'uppercase',
    fontSize: 20,
    letterSpacing: 2.5,
    paddingLeft: 10
  }
})