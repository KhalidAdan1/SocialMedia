import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screen/Home';
import Profile from '../screen/Profile';
import Settings from '../screen/Settings';
import { ComponentType } from 'react';
import Support from '../screen/Support';


const Tab = createBottomTabNavigator();

export const AppNavigator = () => {
    const TypedHome = Home as ComponentType<any>;
    const TypedProfile = Profile as ComponentType<any>;
    const TypedSettings =  Settings as ComponentType<any>;
    const TypedSupprt =  Support as ComponentType<any>;
  
  return (

    <Tab.Navigator>
      <Tab.Screen name="Home" component={TypedHome} />
      <Tab.Screen name="Profile" component={TypedProfile} />
      <Tab.Screen name="Settings" component={TypedSettings} />
      <Tab.Screen name='Support' component={TypedSupprt} />
    </Tab.Navigator>
  );
};

