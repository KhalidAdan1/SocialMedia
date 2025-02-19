import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text } from 'react-native';


export type RootStackParamList = {
  Home: {name : string};
  Profile: undefined;
  Settings : undefined
}; 


export default function App() {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
