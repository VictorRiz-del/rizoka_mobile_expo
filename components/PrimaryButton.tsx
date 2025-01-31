import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import React from "react";
import SemiBoldText from "./Utils/SemiBoldText";

export default function ({
  className,
  onPress,
  text,
  disabled,
  isLoading,
  textClassName,
}: {
  className?: string;
  onPress?: () => void;
  text?: string;
  disabled?: boolean;
  isLoading?: boolean;
  textClassName?: string;
}) {
  return (
    <TouchableOpacity
      style={{
        opacity: isLoading || disabled ? 0.5 : 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 5,
      }}
      disabled={disabled || isLoading}
      onPress={onPress}
      className={`${className}`}
    >
      <SemiBoldText className={`${textClassName}`}>{text}</SemiBoldText>
      {isLoading && <ActivityIndicator color={"white"} size={20} />}
    </TouchableOpacity>
  );
}
