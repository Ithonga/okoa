import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

export default function _layout() {
  return (
    <Tabs>
        <Tabs.Screen name="home"/>
        <Tabs.Screen name='calendar'/>
        <Tabs.Screen name='details'/>
        <Tabs.Screen name='profile'/>
    </Tabs>
  )
}