import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import InputField from "../ components/InputField";
import axios from "axios";

type LoginProps = {
  onLoginSuccess: () => void;
};
  
const Login =({ navigation ,onLoginSuccess}:LoginProps)=>{
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [ loginData , setLoginData] = useState(null)
useEffect(()=> {
  const fetch = async() =>{
 try {
  const response = await axios.get('/logi.json')
  setLoginData(response.data);
 } catch (error) {
  console.log(error);
 }
fetch();
  }
} , [])
  
 
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
          <Text>Welcome</Text>
        
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
      testID="button" 
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
          {loginData && (
          <Text>
            {JSON.stringify(loginData)}
          </Text>
        )}

        </TouchableOpacity>
        console.log( {JSON.stringify(loginData)});
    </View>



</SafeAreaView>

)



}
export default Login

