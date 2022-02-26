import React, { useState } from 'react'
import ProgressCircle from './ProgressCircle'
import { View } from 'react-native'

import Button from './Button'

export default function Timer({ pomodoro, setPomodoro }) {
  const { status, workTime, breakTime } = pomodoro

  const [minutes, setMinutes] = useState(workTime)
  const [seconds, setSeconds] = useState(0)
  const [timerOn, setTimerOn] = useState(false)

  const start = () => {
    setTimerOn(true)
  }

  const pause = () => {
    clearInterval(interval)
    setTimerOn(false)
  }

  // Change pomodoro status and time to match the next interval
  const next = () => {
    if (status === 'work') {
      setMinutes(breakTime)
      setSeconds(0)
      setPomodoro({ ...pomodoro, status: 'break' })
    } else {
      setMinutes(workTime)
      setSeconds(0)
      setPomodoro({ ...pomodoro, status: 'work' })
    }
  }

  // Timer
  let interval

  if (timerOn) {
    interval = setInterval(() => {
      clearInterval(interval)

      if (seconds === 0) {
        if (minutes !== 0) {
          setSeconds(59)
          setMinutes(minutes - 1)
        } else {
          next()
        }
      } else {
        setSeconds(seconds - 1)
      }

    }, 1000)
  }

  // Add zeroes for label if needed
  const labelMinutes = minutes < 10 ? `0${minutes}` : minutes
  const labelSeconds = seconds < 10 ? `0${seconds}` : seconds

  // Calculate the pomodoro work and break times in seconds
  const workTimeInSeconds = workTime * 60
  const breakTimeInSeconds = breakTime * 60

  // Calculate the percentage of elapsed time (in seconds) related to times set in pomodoro
  let percentage

  if (status === 'work') {
    percentage = 100 - ((minutes * 60 + seconds) / workTimeInSeconds * 100)
  } else {
    percentage = 100 - ((minutes * 60 + seconds) / breakTimeInSeconds * 100)
  }

  return (
    <View style={{ alignItems: 'center' }}>
      <View style={{ marginVertical: 60 }}>
        <ProgressCircle
          size={250}
          strokeWidth={15}
          percentage={percentage}
          label={`${labelMinutes}:${labelSeconds}`}
        />
      </View>
      {timerOn
        ? <Button handlePress={pause} timerOn={timerOn} />
        : <Button handlePress={start} timerOn={timerOn} />}
    </View>
  )
}