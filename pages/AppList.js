import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, Text } from 'react-native'
import React from 'react'

export default function AppList() {
  return (
    <View style={style.container}>
        <Text>AppList</Text>
        <StatusBar style='dark' />
    </View>
  )
}

const style = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: '#9c667d',
            alignItems: 'center',
            justifyContent: 'center'
        }
    }
)