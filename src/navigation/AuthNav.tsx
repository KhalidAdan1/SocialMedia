
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../auth/Login';
import Register from '../auth/Register';
import Welcome from '../auth/Welcome';
import Home from '../screen/Home';


export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
  Welcome:undefined;
  Home:{name:string};
};

const Stack = createStackNavigator<AuthStackParamList>();
type AuthNavigatorProps = {
  onLoginSuccess: () => void;
}; 
export const AuthNavigator = ({onLoginSuccess}:AuthNavigatorProps) => {
  return (
    <Stack.Navigator 
      screenOptions={{
        headerShown: false,
      }}
    >

<Stack.Screen name="Welcome" component={Welcome} />
<Stack.Screen name="Login" children={(props) => <Login {...props} onLoginSuccess={onLoginSuccess} />}
      />
         <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};