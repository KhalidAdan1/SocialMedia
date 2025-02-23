import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { AppNavigator } from './src/navigation/AppNav';
import { AuthNavigator } from './src/navigation/AuthNav';


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


