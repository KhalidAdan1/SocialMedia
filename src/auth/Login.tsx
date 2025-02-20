import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import Icon from 'react-native-vector-icons/Ionicons';
import InputField from "../ components/InputField";
import { router } from "expo-router";



const Login =()=>{
    const [form , setForm]= useState({
        name: '',
        email: '',
        password: '',
       }
       );
return (
<SafeAreaView>
    <View>
        <TouchableOpacity
        className="absolute top-12 left-3 p-5 rounded-full"
        onPress={() => {
            router.push('Welcome');
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
    <View className="flex items-center justify-center">
        <TouchableOpacity 
        className="text-gray-700 text-center font-sans text-sm"
        onPress={()=>{
            router.push('Welcome')
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

