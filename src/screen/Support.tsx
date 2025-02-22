import React from 'react';
import { View, Text, Pressable, SafeAreaView, Linking } from 'react-native';
import { Mail, Phone, MessageCircle, FileText, ExternalLink, ChevronRight } from 'lucide-react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';



type SupportItemProps = {
  icon: React.ElementType;
  label: string;
  description: string;
  onPress: () => void;
};

const SupportItem = ({ icon: Icon, label, description, onPress }: SupportItemProps) => (
  <Pressable
    onPress={onPress}
    className="flex-row items-center justify-between p-4 bg-white mb-2 rounded-lg"
  >
    <View className="flex-row items-center flex-1">
      <View className="bg-blue-50 p-3 rounded-full">
        <Icon color="#3B82F6" size={24} />
      </View>
      <View className="ml-3 flex-1">
        <Text className="text-gray-800 text-lg font-medium">{label}</Text>
        <Text className="text-gray-500 text-sm">{description}</Text>
      </View>
      <ChevronRight color="#9CA3AF" size={20} />
    </View>
  </Pressable>
);
type SupportProps = NativeStackScreenProps<RootStackParamList , 'Support'>

const Support = ({ navigation }: SupportProps) => {
  const handleEmail = () => {
    Linking.openURL('snapgram:support@yourapp.com');
  };

  const handlePhone = () => {
    Linking.openURL('tel:+09238223');
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="p-6">
        <Text className="text-2xl font-semibold text-gray-800">Help & Support</Text>
        <Text className="mt-2 text-gray-500">
          How can we help you today?
        </Text>
      </View>

    
      <View className="px-4">
       

        <SupportItem
          icon={Mail}
          label="Email Support"
          description="support@yourapp.com"
          onPress={handleEmail}
        />

        <SupportItem
          icon={Phone}
          label="Call Us"
          description="Available 24/7"
          onPress={handlePhone}
        />

        
      </View>

      <View className="mt-auto p-6">
        <View className="bg-blue-50 p-4 rounded-lg">
          <Text className="text-blue-800 font-medium mb-1">Support Hours</Text>
          <Text className="text-blue-600">
            Monday - Friday: 9:00 AM - 6:00 PM{'\n'}
            Weekend: 10:00 AM - 4:00 PM
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Support;