import { View, Text } from 'react-native'
import * as React from 'react'

export default function Footer() {
  return (
    <View
        style={{
            backgroundColor: 'black',
            marginBottom: 10,
        }}>
      <Text
      style={{
        fontSize: 18,
        color: 'white',
        textAlign: 'center'
      }}>
        All rights reserved by Samir App, 2023 {' '}
      </Text>
    </View>
  )
}