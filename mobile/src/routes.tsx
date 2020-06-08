import React from 'react';
import { View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

import Home from './pages/Home';
import Points from './pages/Points';
import Detail from './pages/Detail';

const AppStack = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
      /* headerMode="none" */


      screenOptions={{
        cardStyle: {
          backgroundColor: '#f0f0f5',
        },

      }}>
        <AppStack.Screen name="Home" component={Home} options={{
          headerShown:false
        }}/>
        <AppStack.Screen name="Points" component={Points} options={{
          headerTintColor: 'green'
        }} />
        <AppStack.Screen name="Detail" component={Detail}/>
      </AppStack.Navigator>
    </NavigationContainer>
  )
}

export default Routes;
