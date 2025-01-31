import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

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
    <TouchableOpacity className={`${className}`}>
      <Text className={`${textClassName}`}>{text}</Text>
    </TouchableOpacity>
  );
}
