import React, { useState } from 'react'
import ProgressCircle from './ProgressCircle'
import { View, StyleSheet } from 'react-native'

import Button from './Button'

export default function Timer({ pomodoro, setPomodoro }) {
  const { status, workTime, breakTime } = pomodoro

  const [minutes, setMinutes] = useState(workTime)
  const [seconds, setSeconds] = useState(0)
  const [timerOn, setTimerOn] = useState(false)

  let interval

  if (timerOn && status === 'work') {
    interval = setInterval(() => {
      clearInterval(interval)

      if (seconds === 0) {
        if (minutes !== 0) {
          setSeconds(59)
          setMinutes(minutes - 1)
        } else {
          setMinutes(breakTime)
          setSeconds(0)
          setPomodoro({ ...pomodoro, status: 'break' })
        }
      } else {
        setSeconds(seconds - 1)
      }

    }, 1000)
  }

  if (timerOn && status === 'break') {
    interval = setInterval(() => {
      clearInterval(interval)

      if (seconds === 0) {
        if (minutes !== 0) {
          setSeconds(59)
          setMinutes(minutes - 1)
        } else {
          setMinutes(workTime)
          setSeconds(0)
          setPomodoro({ ...pomodoro, status: 'work' })
        }
      } else {
        setSeconds(seconds - 1)
      }

    }, 1000)
  }

  const start = () => {
    setTimerOn(true)
  }

  const pause = () => {
    clearInterval(interval)
    setTimerOn(false)
  }

  // Add zeroes for label if needed
  const labelMinutes = minutes < 10 ? `0${minutes}` : minutes
  const labelSeconds = seconds < 10 ? `0${seconds}` : seconds

  return (
    <View style={{ alignItems: 'center' }}>
      <View style={{ marginVertical: 60 }}>
        <ProgressCircle
          size={250}
          strokeWidth={15}
          percentage={0}
          label={`${labelMinutes}:${labelSeconds}`}
        />
      </View>
      {timerOn
        ? <Button handlePress={pause} timerOn={timerOn} />
        : <Button handlePress={start} timerOn={timerOn} />}
    </View>
  )
}