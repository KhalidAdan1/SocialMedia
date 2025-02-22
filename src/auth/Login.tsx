import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import Icon from 'react-native-vector-icons/Ionicons';
import InputField from "../ components/InputField";
import { router } from "expo-router";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../navigation/AuthNav";
import { useNavigation } from "@react-navigation/native";

type NavigationProp = NativeStackNavigationProp<AuthStackParamList>;
type LoginProps = {
  onLoginSuccess: () => void;
};
 
const Login =({onLoginSuccess}:LoginProps)=>{
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  
 const navigation = useNavigation<NavigationProp>();
    const [form , setForm]= useState({
        name: '',
        email: '',
        password: '',
       }
       );


  const handleLogin = () => {
   
    if (!email || !password) {
      alert('Please fill in all fields');
      return;
    }

    if (email === 'test@test.com' && password === 'password') {
      onLoginSuccess();
      navigation.navigate('Home', { name: email.split('@')[0] });
    } else {
      alert('Invalid credentials');
    }
  };

return (
<SafeAreaView>
    <View> 
        <TouchableOpacity
        className="absolute top-12 left-3 p-5 rounded-full"
        onPress={() => {
            navigation.navigate('Welcome');
          } }
        >
        Welcome
        </TouchableOpacity>
        <InputField 
                  label='Email'
                  placeholder='Enter Your Email'
                  value={form.email}
                  labelStyle="text-gray-500"
                
                  onChangeText={(value)=>{
                    setForm({...form ,
                      email: value
                    })
                  }}
                  />
                  <InputField 
                  label='Password'
                  placeholder='Enter Your Password'
                  value={form.password}
                  secureTextEntry={true}
                  onChangeText={(value)=>{
                    setForm({...form ,
                      password: value
                    })
                  }}
                  />
    </View>
    <View>
    <TouchableOpacity 
      onPress={handleLogin}
      className="max-w-md py-4 bg-blue-500 rounded-xl"
    >
      <Text>Login</Text>
    </TouchableOpacity>
    </View>
    <View className="flex items-center justify-center">
        <TouchableOpacity 
        className="text-gray-700 text-center font-sans text-sm"
        onPress={()=>{
            navigation.navigate('Register')
        }}
        >
          <Text>
          Don't have an account? Register
          </Text>

        </TouchableOpacity>
    </View>



</SafeAreaView>

)



}
export default Login

