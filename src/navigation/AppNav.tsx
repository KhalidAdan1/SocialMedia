import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screen/Home';
import Profile from '../screen/Profile';
import Settings from '../screen/Settings';
import { ComponentType } from 'react';


const Tab = createBottomTabNavigator();

export const AppNavigator = () => {
    const TypedHome = Home as ComponentType<any>;
  
  return (

    <Tab.Navigator>
      <Tab.Screen name="Home" component={TypedHome} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

