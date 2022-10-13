import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "../screens/homeScreen";
import Portfolio from '../screens/portfolio';
import CV from '../screens/cv';
import Welcome from '../screens/welcome';
const Stack = createNativeStackNavigator();

function Nav() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}
        options={{
            headerShown: false
        }}
        
         />
          <Stack.Screen name="Portfolio" component={Portfolio}
        options={{
            headerShown: false
        }}

        />
        <Stack.Screen name="CV" component={CV}
        options={{
            headerShown: false
        }}
            
        />

<Stack.Screen name="Welcome" component={Welcome}
        options={{
            headerShown: false
        }}
            
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export  {Nav};