import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import AppLoading from 'expo-app-loading'

import {
  useFonts,
  Montserrat_800ExtraBold,
  Montserrat_700Bold
} from '@expo-google-fonts/montserrat'

import Timer from './components/Timer'
import Title from './components/Title'

export default function App() {
  // Pomodoro status options: work or break
  // Pomodoro times as minutes
  const [pomodoro, setPomodoro] = useState({
    status: 'work',
    workTime: 25,
    breakTime: 5
  })

  // Load google fonts
  let [fontsLoaded] = useFonts({
    Montserrat_800ExtraBold,
    Montserrat_700Bold
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }
  return (
    <View style={styles.container}>
      <Title status={pomodoro.status} />
      <Timer pomodoro={pomodoro} setPomodoro={setPomodoro} />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})
