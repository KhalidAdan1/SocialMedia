
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../auth/Login';
import Register from '../auth/Register';
import Welcome from '../auth/Welcome';

export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
  Welcome:undefined;
};

const Stack = createStackNavigator<AuthStackParamList>();

export const AuthNavigator = () => {
  return (
    <Stack.Navigator 
      screenOptions={{
        headerShown: false,
      }}
    >

<Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};