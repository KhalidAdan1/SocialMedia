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

const InputField = ({ label,
secureTextEntry = false,
...props
}: InputFieldProps ) =>{
    return (
 <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? "padding" : "height"}>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className="w-full my-2">
            <Text className="text-[20px] ml-2 text-white">
        {label}
            </Text>
            <View className="flex flex-row justify-start items-center relative bg-gray-200 rounded-full border
            border-neutral-200 focus:border-primary-500 w-full">
                <TextInput className="rounded-full p-4 text-blue-700 text-[15px] flex-1 h-14 text-left w-full" secureTextEntry={secureTextEntry}
                {...props}
                />
            </View>
        </View>
    </TouchableWithoutFeedback>
 </KeyboardAvoidingView>
    )
}


export default InputField;