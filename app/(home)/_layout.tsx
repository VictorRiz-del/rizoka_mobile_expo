import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 70,
          borderTopColor: "red",
          shadowColor: "transparent",
        },
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarActiveTintColor: "red",
        tabBarItemStyle: { borderTopColor: "red", borderTopWidth: 0.5 },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home ",
          tabBarIcon: ({ color }) => (
            <TouchableOpacity>
              <Feather name="home" size={24} color={color} />
            </TouchableOpacity>
          ),
          
        }}
      />
      <Tabs.Screen
        name="services"
        options={{
          title: "Services ",
          tabBarIcon: ({ color }) => (
            <TouchableOpacity>
              <Ionicons name="receipt-outline" size={24} color={color} />
            </TouchableOpacity>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile ",
          tabBarIcon: ({ color }) => (
            <TouchableOpacity>
              <FontAwesome name="user-o" size={24} color={color} />
            </TouchableOpacity>
          ),
        }}
      />
    </Tabs>
  );
}
