import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import AppLoading from 'expo-app-loading'
import {
  useFonts,
  Montserrat_800ExtraBold,
  Montserrat_700Bold
} from '@expo-google-fonts/montserrat'

import Timer from './components/Timer'

export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_800ExtraBold,
    Montserrat_700Bold
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Make it happen!</Text>
      <Timer />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Montserrat_800ExtraBold',
    fontSize: 25,
    marginBottom: 50
  }
})
