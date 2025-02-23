import { useState } from "react";
import InputField from "../ components/InputField";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";
import { Icon } from "react-native-vector-icons/Icon";
import { DefaultTheme, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../App";
type NavigationProp = NativeStackNavigationProp<AuthStackParamList>;
const Register = () =>{
 
     const navigation = useNavigation<NavigationProp>();
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
                                navigation.navigate('Welcome');
                              } }
                            >
                              <Text>
                              Go back
                              </Text>
                           
                            </TouchableOpacity>
                </View>
                <View
                className="flex justify-center">
                    <Text className="text-lg">
                  Sign up
                    </Text>
                    <InputField  
                    className="top-5"
                    label='Name'
                    placeholder='Enter Your Name'
                    value={form.name}
                    labelStyle="flex"
                    onChangeText={(value)=>{
                      setForm({...form ,
                        name: value
                      })
                    }}


/>
              <InputField
              className="mt-10"
              label="Email"
              placeholder="Enter Your Email"
              value={form.email}
              onChangeText={(value)=>{
                setForm({...form , email:value})
              }}
              />
               <InputField
              className="mt-10"
              label="Password"
              placeholder="Enter Your Passwor"
              value={form.password}
              onChangeText={(value)=>{
                setForm({...form , password:value})
              }}
              />
                </View>
                <View className="flex items-center justify-center">
                        <TouchableOpacity 
                        className="text-gray-700 text-center font-sans text-sm"
                        onPress={()=>{
                            navigation.navigate('Home')
                        }}
                        >
                          <Text>
                            Continue
                          </Text>
                
                        </TouchableOpacity>
                    </View>
                <View>
                    <TouchableOpacity
                    className="text-gray-700 text-center font-sans text-sm"
                    onPress={()=>{
                        navigation.navigate('Login')
                    }}>
                      <Text>
                      Already have an Account? Login
                      </Text>

                    </TouchableOpacity>
                </View>
            </SafeAreaView>
            
           )
}
export default Register;