import { Image, Text, View } from "react-native";
import Logo from "../assets/images/icon.png";
import Animated, { FadeIn } from "react-native-reanimated";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useEffect } from "react";
import { router } from "expo-router";

export default function Index() {
  useEffect(() => {
    setTimeout(() => {
      router.replace("/(home)");
    }, 5000);
  }, []);

  return (
    <View className="flex-1 items-center justify-center">
      <Animated.Image
        entering={FadeIn.duration(500)}
        source={Logo}
        style={{ width: wp(50), height: wp(50) }}
      />
    </View>
  );
}
