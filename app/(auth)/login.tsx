import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import LoginBg from "../../assets/images/login.jpg";

import RegisgterBG from "../../assets/images/register.jpg";
import { useFormik } from "formik";
import * as yup from "yup";
import PrimaryButton from "@/components/PrimaryButton";
import { CheckBox } from "@rneui/themed";
import MediumText from "@/components/Utils/MediumText";
import LogoBg from "../../assets/images/icon.png";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import BoldText from "@/components/Utils/BoldText";
import { router } from "expo-router";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";
import { ScrollView } from "react-native";
import InputWrapper from "@/components/InputWrapper";
export default function Login() {
  const { values, errors, handleChange, handleSubmit, setFieldValue, touched } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
        phone: "",
        confirm_password: "",
      },
      validationSchema: yup.object().shape({
        email: yup
          .string()
          .email("Please enter valid email")
          .required("Email Address is required"),
        password: yup
          .string()
          .required("Please enter your password.")
          .min(8, "Your password is too short."),
      }),

      onSubmit: (values) => {
        console.log(values);
      },
    });
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
          <Image source={{}} />
          <ScrollView showsVerticalScrollIndicator={false}>
            <Animated.View
              entering={FadeInUp.duration(300)}
              className="w-full items-center mb-3"
            >
              <Image
                source={LogoBg}
                style={{ width: wp(40), height: wp(40) }}
              />
              <BoldText className="font-black text-white text-2xl mb-3">
                Sign In
              </BoldText>
              <MediumText className="text-white text-center text-2xl">
                Welcome back to a world of financial convenience
              </MediumText>
            </Animated.View>
            <Animated.View
              entering={FadeInDown.delay(300).duration(500)}
              className="bg-black/70 rounded-lg backdrop-blur-md p-2 py-5 gap-3"
            >
              <InputWrapper
                label={"Email"}
                placeholder="johndoe@gmail.com"
                value={values.email}
                onChangeText={handleChange("email")}
                inputError={Boolean(touched.email && !!errors.email)}
                errorMessage={errors.email}
                keyboardType="email-address"
              />
              <InputWrapper
                label={"Password"}
                placeholder="********"
                value={values.password}
                onChangeText={handleChange("password")}
                inputError={Boolean(touched.password && !!errors.password)}
                errorMessage={errors.password}
                password
              />
              <PrimaryButton
                onPress={handleSubmit}
                className="bg-red p-3 rounded-md w-full"
                text="Sign Up"
                textClassName="text-white"
              />
              <View className="flex-row justify-center gap-2">
                <MediumText className="text-white">
                  Dont have an account?
                </MediumText>
                <TouchableOpacity onPress={() => router.push("/register")}>
                  <MediumText className="text-tomato">Sign Up</MediumText>
                </TouchableOpacity>
              </View>
            </Animated.View>
          </ScrollView>
        </SafeAreaView>
      </LinearGradient>
      <StatusBar style="auto" />
    </ImageBackground>
  );
}
