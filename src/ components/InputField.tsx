import React from "react";
import { Keyboard, KeyboardAvoidingView, Platform, Text, TextInput, TextInputProps, TouchableWithoutFeedback } from "react-native";
import { View } from "react-native";

declare interface InputFieldProps extends TextInputProps {
    label: string;
    icon?: any;
    secureTextEntry?: boolean;
    className?: string;
    labelStyle?: string;
}


interface InputFieldProps extends TextInputProps {
  label: string;
  error?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  error,
  className = "",
  ...props
}) => {
  return (
    <View className={className}>
      <Text className="text-gray-700 mb-2 font-medium">{label}</Text>
      <TextInput
        className={`w-full px-4 py-3 rounded-lg border ${
          error ? "border-red-500" : "border-gray-300"
        } bg-white`}
        placeholderTextColor="#9CA3AF"
        {...props}
      />
      {error && <Text className="text-red-500 text-sm mt-1">{error}</Text>}
    </View>
  );
};

export default InputField;