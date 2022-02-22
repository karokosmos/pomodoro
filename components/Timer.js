import React from 'react'
import ProgressCircle from './ProgressCircle'
/* import { StyleSheet } from 'react-native' */

export default function Timer() {
  return (
    <ProgressCircle
      size={250}
      strokeWidth={15}
      percentage={75}
      label="25:00"
    />
  )
}

/* const styles = StyleSheet.create({
  timer: {
    padding: '20 0 20 0'
  }
}) */