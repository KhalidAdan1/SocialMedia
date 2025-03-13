import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, View, Text, TouchableOpacity} from "react-native"
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParamList } from "../navigation/AuthNav";

type NavigationProp = NativeStackNavigationProp<AuthStackParamList>;


const Welcome = () =>{
    const navigation = useNavigation<NavigationProp>();
   return(
    <SafeAreaView>
        <View className=" flex items-center justify-center">
            <Text className="text-xl">
                Welcome to Gram
            </Text>
        </View>
        <View className="mt-20">
            <TouchableOpacity 
            className="max-w-md py-4 bg-blue-400 rounded-xl
                   flex items-center justify-center mx-8 mt-20"
            onPress={()=>{
                navigation.navigate('Login')
            }}
            >
                <Text>
                Sign in
                </Text>

            </TouchableOpacity>
            <TouchableOpacity 
            className="max-w-md py-4 bg-blue-500 rounded-xl
                   flex items-center justify-center mx-6 mt-6"
            onPress={()=>{
                navigation.navigate('Register')
            }}
            >
                <Text>
                Sign Up
                </Text>
               
            </TouchableOpacity>
        </View>
    </SafeAreaView>
   )

}
export default Welcome;