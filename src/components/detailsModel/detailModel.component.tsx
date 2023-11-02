import React from 'react'
import {View, Text, Pressable} from 'react-native'
import IoIcons from 'react-native-vector-icons/Ionicons'

import {HStack, VStack} from '@src/commons'
import {ItemValueWithIcon} from '@src/components'

import {colors} from '@src/modules'
import {styles} from './detailModel.style'
import {Icon} from '@src/helpers'

interface DetailModelProps {
  onClose: () => void
  data: {
    name: string
    emails: string[]
    position: string
    website: string
  }
}

export const DetailModelContent = ({onClose, data}: DetailModelProps) => {
  return (
    <VStack style={styles.container}>
      <HStack style={styles.topContainer}>
        <Text style={[styles.hide, styles.closeText]}>Close</Text>
        <Text style={styles.modalTitle}>Contact detail</Text>
        <Pressable onPress={() => onClose()}>
          <View>
            <Text style={styles.closeText}>Close</Text>
          </View>
        </Pressable>
      </HStack>
      <VStack style={styles.bodyContainer}>
        <View style={styles.infoContainer}>
          <Text style={styles.contactTitle}>{data.name}</Text>
          <Text style={styles.subTitle}>{data.position}</Text>
        </View>
        {data?.emails?.map((item, index) => (
          <ItemValueWithIcon
            title="Email"
            key={index}
            content={item}
            icon={
              <IoIcons
                name="mail"
                size={22}
                color={colors.light.primaryColor}
              />
            }
          />
        ))}
        {data.website && (
          <ItemValueWithIcon
            title="Website"
            content={data.website}
            icon={
              <Icon
                name="web"
                type="materialCommunity"
                size={22}
                color={colors.light.primaryColor}
              />
            }
          />
        )}
      </VStack>
    </VStack>
  )
}
