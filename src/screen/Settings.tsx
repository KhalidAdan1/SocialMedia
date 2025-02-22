import { ChevronRight, Bell, Moon, Globe, Shield, HelpCircle } from "lucide-react";
import { useState } from "react";
import { Pressable, Switch, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from "../../App";

type SettingToggleProps = {
  label: string;
  value: boolean;
  onValueChange: (newValue: boolean) => void;
};

type SettingItemProps = {
  icon: React.ElementType;
  label: string;
  onPress: () => void;
};

const SettingToggle = ({ label, value, onValueChange }: SettingToggleProps) => (
  <View className="flex-row items-center justify-between px-4 py-3 bg-white border-b border-gray-100">
    <View className="flex-row items-center">
      <Text className="ml-3 text-gray-700 text-base">{label}</Text>
    </View>
    <Switch 
      value={value} 
      onValueChange={onValueChange}
      trackColor={{ false: "#D1D5DB", true: "#60A5FA" }}
    />
  </View>
);

const SettingItem = ({ icon: Icon, label, onPress }: SettingItemProps) => (
  <Pressable
    onPress={onPress}
    className="flex-row items-center justify-between px-4 py-3 bg-white border-b border-gray-100"
  >
    <View className="flex-row items-center">
      <Icon color="#374151" size={20} />
      <Text className="ml-3 text-gray-700 text-base">{label}</Text>
    </View>
    <ChevronRight color="#9CA3AF" size={20} />
  </Pressable>
);
type SettingProps = NativeStackScreenProps<RootStackParamList, 'Settings'>;
const Settings = ({navigation}:SettingProps) => {
  
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  
  return (
    <SafeAreaView className="flex-1 bg-gray-50">
    <View className="py-6">
      <Text className="px-4 text-xl font-semibold text-gray-800">Settings</Text>
    </View>

    <View className="mb-6">
      <Text className="px-4 mb-2 text-sm font-medium text-gray-500 uppercase">
        Notifications
      </Text>
      <View className="bg-white">
        <SettingToggle
          label="Push Notifications"
          value={notifications}
          onValueChange={setNotifications}
        />
      </View>
    </View>


    <View className="mb-6">
      <Text className="px-4 mb-2 text-sm font-medium text-gray-500 uppercase">
        Appearance
      </Text>
      <View className="bg-white">
        <SettingToggle
          label="Dark Mode"
          value={darkMode}
          onValueChange={setDarkMode}
        />
      </View>
    </View>


    <View className="mb-6">
      <Text className="px-4 mb-2 text-sm font-medium text-gray-500 uppercase">
        General
      </Text>
      <View className="bg-white">
        <SettingItem
          icon={HelpCircle}
          label="Help & Support"
          onPress={() => navigation.navigate('Support')}
        />
      </View>
    </View>
    <View className="px-4 mt-auto mb-6">
      <Text className="text-center text-gray-500">Version 1.0.0</Text>
    </View>
  </SafeAreaView>
  );
};

export default Settings;