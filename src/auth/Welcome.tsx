import { router } from "expo-router";
import { SafeAreaView, View, Text, TouchableOpacity} from "react-native"



const Welcome = () =>{
   return(
    <SafeAreaView>
        <View className=" flex items-center justify-center">
            <Text className="text-xl">
                Welcome to Gram
            </Text>
        </View>
        <View className="mt-20">
            <TouchableOpacity 
            className="max-w-md py-4 bg-blue-500 rounded-xl
                   flex items-center justify-center mx-6"
            onPress={()=>{
                router.navigate('/auth/Login')
            }}
            >
                Sign in
            </TouchableOpacity>
            <TouchableOpacity 
            className="max-w-md py-4 bg-blue-500 rounded-xl
                   flex items-center justify-center mx-6"
            onPress={()=>{
                router.navigate('/auth/Register')
            }}
            >
                Sign Up
            </TouchableOpacity>
        </View>
    </SafeAreaView>
   )

}
export default Welcome;