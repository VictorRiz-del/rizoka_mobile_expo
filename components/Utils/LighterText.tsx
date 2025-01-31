import { View, Text } from "react-native";
import React from "react";

export default function LighterText({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return (
    <Text
      className={`${className}`}
      style={{ fontFamily: "Poppins_200ExtraLight" }}
    >
      {children}
    </Text>
  );
}
