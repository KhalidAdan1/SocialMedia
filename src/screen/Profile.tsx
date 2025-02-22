import { Pressable, Settings, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App'; 
import React from "react";
import { User , Lock, LogOut, ChevronRight, Edit } from 'lucide-react';

type ProfileButtonProps = { 
  label: string;
  onPress: () => void;
};


const ProfileButton = ({ label, onPress }:ProfileButtonProps) => (
  <Pressable
    onPress={onPress}
    className="flex-row items-center justify-between w-full px-4 py-3 bg-white border-b border-gray-100"
  >
    <View className="flex-row items-center">
      
      <Text className="ml-3 text-gray-700 text-base">{label}</Text>
    </View>
    
  </Pressable>
)

type ProfileProps = NativeStackScreenProps<RootStackParamList, 'Profile'>;
const Profile = ({route,navigation}:ProfileProps) => {
  const { name } = route.params!;
  return (
    <SafeAreaView className="flex-1 bg-gray-50">
    <View className="bg-white px-4 py-6 items-center border-b border-gray-100">
      <View className="relative">
        <View className="w-24 h-24 rounded-full bg-gray-200 items-center justify-center">
          <User color="#4B5563" size={40} />
        </View>
        <Pressable 
          className="absolute bottom-0 right-0 bg-blue-500 p-2 rounded-full"
          onPress={() => navigation.navigate('Profile')}
        >
          <Edit color="white" size={16} />
        </Pressable>
      </View>
      <Text className="mt-4 text-xl font-semibold text-gray-800"> Hello {name} </Text>
    </View>

    <View className="mt-6">
      <Text className="px-4 mb-2 text-sm font-medium text-gray-500 uppercase">
        Account Settings
      </Text>
      <View className="bg-white">
        <ProfileButton
          
          label="Personal Information"
           onPress={() => navigation.navigate('Settings')}
        />
        <ProfileButton
          
          label="Change Password"
          onPress={() => navigation.navigate('Settings')}
        />
        <ProfileButton
          
          label="Preferences"
          onPress={() => navigation.navigate('Settings')}
        />
      </View>
    </View>
    <View className="mt-6">
      <Text className="px-4 mb-2 text-sm font-medium text-gray-500 uppercase">
        Security
      </Text>
      
      <View className="bg-white">
        <ProfileButton
          label="Privacy Settings"
          onPress={() => navigation.navigate('Settings')}
        />
      </View>
    </View>
    
  </SafeAreaView>
  );
};

export default Profile;