import React, { useState } from 'react'
import { Modal, StyleSheet, Text, Pressable, View } from 'react-native'
import Slider from '@react-native-community/slider'
import SettingsButton from './SettingsButton'

export default function Settings({ pomodoro, setPomodoro, timerOn }) {
  const [modalVisible, setModalVisible] = useState(false)
  const [workTime, setWorkTime] = useState(pomodoro.workTime)
  const [breakTime, setBreakTime] = useState(pomodoro.breakTime)

  const changeSettings = () => {
    setPomodoro({
      ...pomodoro,
      workTime,
      breakTime
    })

    setModalVisible(false)
  }

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
      >
        <View style={styles.modalView}>
          <Text style={styles.title}>Settings</Text>
          <View style={styles.sliderView}>
            <Text style={[styles.text, styles.sliderTitle]}>Work</Text>
            <Text style={styles.text}>{workTime} minutes</Text>
            <Slider
              value={workTime}
              style={styles.slider}
              minimumValue={5}
              maximumValue={60}
              step={5}
              minimumTrackTintColor="#FFFFFF"
              maximumTrackTintColor="#991a1a"
              onValueChange={value => setWorkTime(value)}
            />
            <Text style={[styles.text, styles.sliderTitle]}>Break</Text>
            <Text style={styles.text}> {breakTime} minutes</Text>
            <Slider
              value={breakTime}
              style={styles.slider}
              minimumValue={5}
              maximumValue={60}
              step={5}
              minimumTrackTintColor="#FFFFFF"
              maximumTrackTintColor="#991a1a"
              onValueChange={value => setBreakTime(value)}
            />
          </View>
          <Pressable
            style={styles.button}
            onPress={changeSettings}
          >
            <Text style={styles.buttonText}>OK</Text>
          </Pressable>
        </View>
      </Modal>
      <SettingsButton handlePress={() => setModalVisible(true)} timerOn={timerOn} />
    </View>
  )
}

const styles = StyleSheet.create({
  modalView: {
    width: '100%',
    height: '100%',
    marginTop: 50,
    backgroundColor: "#dd4040",
    borderRadius: 20,
    padding: 40,
    alignItems: 'center'
  },
  sliderView: {
    marginVertical: 30,
    textAlign: 'center'
  },
  slider: {
    width: 270,
    height: 40,
    marginTop: 15,
    marginBottom: 20
  },
  sliderTitle: {
    color: '#991a1a',
    marginVertical: 10
  },
  text: {
    color: '#fff',
    fontFamily: 'Montserrat_700Bold',
    textAlign: 'center',
    fontSize: 20
  },
  title: {
    textAlign: "center",
    fontFamily: 'Montserrat_700Bold',
    fontSize: 25,
    color: '#fff',
    paddingTop: 40
  },
  button: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10
  },
  buttonText: {
    color: '#2d2d2d',
    fontFamily: 'Montserrat_700Bold',
    fontSize: 20
  }
})