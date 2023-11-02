import React, {ReactNode, useCallback, useState} from 'react'
import {Modal, Platform, Pressable, View} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'

import {styles} from './customModal.style'

interface CustomModalProps {
  displayElement?: ReactNode
  children: (options: {onCloseModalHandler: () => void}) => ReactNode
}

const CustomModal = ({children, displayElement}: CustomModalProps) => {
  const [modalVisible, setModalVisible] = useState(false)

  const onCloseModalHandler = useCallback(() => {
    setModalVisible(false)
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Pressable
          style={{width: '100%'}}
          onPress={() => {
            setModalVisible(true)
          }}>
          {displayElement}
        </Pressable>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <SafeAreaView
          style={{flex: 1, marginTop: Platform.OS === 'ios' ? 50 : 0}}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              {children({onCloseModalHandler})}
            </View>
          </View>
        </SafeAreaView>
      </Modal>
    </View>
  )
}

export {CustomModal}
