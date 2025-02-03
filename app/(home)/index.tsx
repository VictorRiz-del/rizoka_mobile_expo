import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, View } from "react-native";
import { Avatar } from "@rneui/themed";
import BoldText from "@/components/Utils/BoldText";
import LighterText from "@/components/Utils/LighterText";

export default function Home() {
  return (
    <SafeAreaView className="flex-1">
      <StatusBar style="auto" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingVertical: 10, paddingHorizontal: 5 }}
      >
        <View>

        <Avatar
          rounded
          size={50}
          title="LG"
          titleStyle={{ color: "black" }}
          containerStyle={{ backgroundColor: "lightgrey" }}
          />
          <View>
            <BoldText>Samson Jabo</BoldText>
            <LighterText>Take care of yoyr bill with steeze</LighterText>
          </View>
          </View>
      </ScrollView>
    </SafeAreaView>
  );
}
