import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import RegisgterBG from "../../assets/images/register.jpg";
import { StatusBar } from "expo-status-bar";
import InputWrapper from "@/components/InputWrapper";
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
export default function Register() {
  const [consent, setConsent] = useState(false);
  const toggleConset = () => setConsent(!consent);
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

        phone: yup
          .string()
          .matches(/^[0-9]{10}$/, "Phone number is not valid")
          .required("Phone number is required"),
        password: yup
          .string()
          .required("Please enter your password.")
          .min(8, "Your password is too short."),
        confirm_password: yup
          .string()
          .required("Please retype your password.")
          .oneOf([yup.ref("password")], "Your passwords do not match."),
      }),

      onSubmit: (values) => {
        console.log(values);
      },
    });

  return (
    <ImageBackground
      className="flex-1 ease-in-out transition-all duration-300"
      source={RegisgterBG}
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
                Sign Up
              </BoldText>
              <MediumText className="text-white text-center text-2xl">
                Create an account to unlock a world of finacial convenience
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
                label={"Phone Number"}
                placeholder="8012345678"
                value={values.phone}
                onChangeText={handleChange("phone")}
                inputError={Boolean(touched.email && !!errors.email)}
                errorMessage={errors.phone}
                keyboardType="phone-pad"
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
              <InputWrapper
                label={"Confirm Password"}
                placeholder="********"
                value={values.confirm_password}
                onChangeText={handleChange("confirm_password")}
                inputError={Boolean(
                  touched.confirm_password && !!errors.confirm_password
                )}
                errorMessage={errors.confirm_password}
                password
              />
              <View className="flex-row gap-1">
                <CheckBox
                  checked={consent}
                  checkedColor={"white"}
                  uncheckedColor="white"
                  onPress={toggleConset}
                  iconType="material-community"
                  checkedIcon="checkbox-marked"
                  uncheckedIcon="checkbox-blank-outline"
                  containerStyle={{
                    padding: 0,
                    margin: 0,
                    backgroundColor: "transparent",
                  }}
                />
                <MediumText className="text-white">
                  By signing up, you agree to our
                </MediumText>
                <TouchableOpacity onPress={() => router.push("/privacy")}>
                  <MediumText className="text-tomato">
                    Privacy Policy
                  </MediumText>
                </TouchableOpacity>
              </View>
              <PrimaryButton
                onPress={handleSubmit}
                className="bg-red p-3 rounded-md w-full"
                text="Sign Up"
                textClassName="text-white"
                disabled={!consent}
              />
              <View className="flex-row justify-center gap-2">
                <MediumText className="text-white">
                  Already have an account?
                </MediumText>
                <TouchableOpacity onPress={() => router.push("/login")}>
                  <MediumText className="text-tomato">Sign In</MediumText>
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
