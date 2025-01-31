import { View, Text } from "react-native";
import React from "react";

export default function MediumText({
  children,
  className,
}: {
  children: any;
  className?: string;
}) {
  return (
    <Text
      style={{ fontFamily: "Poppins_500Medium" }}
      className={`${className}`}
    >
      {children}
    </Text>
  );
}
