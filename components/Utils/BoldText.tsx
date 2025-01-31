import { View, Text } from "react-native";
import React from "react";

export default function BoldText({
  className,
  children,
}: {
  className?: string;
  children: any;
}) {
  return (
    <Text className={`${className}`} style={{ fontFamily: "Poppins_700Bold" }}>
      {children}
    </Text>
  );
}
