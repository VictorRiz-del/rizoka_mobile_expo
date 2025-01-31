import { View, Text, Image, ImageBackground } from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";

import OnboardingImg1 from "../../assets/images/onboarding/onboarding1.jpg";

import OnboardingImg2 from "../../assets/images/onboarding/onboarding2.jpg";

import OnboardingImg3 from "../../assets/images/onboarding/onboarding3.jpg";

import MediumText from "@/components/Utils/MediumText";
import BoldText from "@/components/Utils/BoldText";
import { SafeAreaView } from "react-native-safe-area-context";
import PrimaryButton from "@/components/PrimaryButton";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";
import { router } from "expo-router";
export default function index() {
  const [image, setImage] = useState(OnboardingImg1);

  useEffect(() => {
    const images = [OnboardingImg1, OnboardingImg2, OnboardingImg3];
    let i = Math.floor(Math.random() * images.length);
    setImage(images[i]);
  }, []);

  return (
    <ImageBackground
      className="flex-1 ease-in-out transition-all duration-300"
      source={image}
    >
      <LinearGradient
        colors={["rgba(0,0,0,0.9)", "transparent"]}
        className="flex-1"
      >
        <SafeAreaView className="p-5 flex-1">
          <Animated.View entering={FadeInUp.duration(300).delay(300)} className="gap-3">
            <BoldText className="font-black text-2xl text-center text-white">
              Welcome to Rizoka
            </BoldText>

            <MediumText className="text-center text-white text-xl font-medium">
              Your one-stop solution for all your bill payments! Easily manage
              your airtime, cable bills, flight bookings, electricity payments,
              betting, and internet subscriptions-all in one convenient app.
              Enjoy seamless transactions and save time with Rizoka.
            </MediumText>
          </Animated.View>
          <Animated.View
            entering={FadeInDown.delay(600).duration(300)}
            className="gap-4 mt-auto"
          >
            <PrimaryButton
              text="Create an account"
              className="p-5 bg-red rounded-md"
              textClassName="text-white text-center font-semibold text-lg"
              onPress={() => router.push("/register")}
            />
            <PrimaryButton
              text="Sign In"
              className="p-5 bg-white rounded-md"
              textClassName="text-black text-center font-semibold text-lg"
              onPress={() => router.push("/login")}
            />
          </Animated.View>
        </SafeAreaView>
      </LinearGradient>
      <StatusBar style="auto" />
    </ImageBackground>
  );
}
