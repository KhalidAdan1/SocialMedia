import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { AppNavigator } from './src/navigation/AppNav';
import { AuthNavigator } from './src/navigation/AuthNav';
import axios from 'axios';
import Logi from './src/auth/Login';


export type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
  Settings : undefined;
  Support : undefined;
}; 

export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
  Welcome:undefined;
};



export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isAuthenticated ? (
          <Stack.Screen name="App" component={AppNavigator} />
        ) : (
          <Stack.Screen 
            name="Auth" 
            component={(props:any) => (
              <AuthNavigator {...props} onLoginSuccess={handleLoginSuccess} />
            )}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}


