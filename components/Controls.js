import React from 'react'
import { StyleSheet, View } from 'react-native'
import PrimaryButton from './PrimaryButton'
import SkipButton from './SkipButton'

export default function Controls({ timerOn, startTimer, pauseTimer, skipInterval }) {
  return (
    <View style={styles.container}>
      {timerOn
        ? <PrimaryButton handlePress={pauseTimer} timerOn={timerOn} />
        : <PrimaryButton handlePress={startTimer} timerOn={timerOn} />}
      <SkipButton handlePress={skipInterval} timerOn={timerOn} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  }
})