import React from 'react'
import { StyleSheet, View } from 'react-native'
import PrimaryButton from './PrimaryButton'
import SkipButton from './SkipButton'
import Settings from './Settings'

export default function Controls({ timerOn, startTimer, pauseTimer, skipInterval, pomodoro, setPomodoro }) {
  return (
    <View style={styles.container}>
      <Settings
        pomodoro={pomodoro}
        setPomodoro={setPomodoro}
        timerOn={timerOn} />
      {timerOn
        ? <PrimaryButton handlePress={pauseTimer} timerOn={timerOn} />
        : <PrimaryButton handlePress={startTimer} timerOn={timerOn} />}
      <SkipButton handlePress={skipInterval} timerOn={timerOn} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
})