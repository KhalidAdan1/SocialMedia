import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


const Profile = () => {
  
  return (
    <SafeAreaView className="flex justify-center items-center flex-1">
      <Text className="text-red-700 flex justify-center items-center flex-auto">Profile</Text>
    </SafeAreaView>
  );
};

export default Profile;