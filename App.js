import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './HomeScreen';
import AboutScreen from './AboutScreen';

export default function App() {
  
  const Stack = createNativeStackNavigator();
  
  return (

    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
       options={{
          title: 'მთავარი გვერდი',
         
        }}name="Home" component={HomeScreen} />
      <Stack.Screen
      options={{
        title: 'ჩვენს შესახებ',
      }}
      name="About" component={AboutScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

