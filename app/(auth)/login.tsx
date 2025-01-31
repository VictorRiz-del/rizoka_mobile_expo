import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { LinearGradient } from 'expo-linear-gradient'
import { StatusBar } from 'expo-status-bar'
import LoginBg from '../../assets/images/login.jpg'
export default function Login() {
  return (
    <ImageBackground
      className="flex-1 ease-in-out transition-all duration-300"
      source={LoginBg}
    >
      <LinearGradient
        colors={["rgba(0,0,0,0.9)", "transparent"]}
        className="flex-1"
      >
        <SafeAreaView className="p-5 flex-1">
         
        </SafeAreaView>
      </LinearGradient>
      <StatusBar style="auto" />
    </ImageBackground>
  )
}