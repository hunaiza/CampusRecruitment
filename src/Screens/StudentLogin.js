import * as React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CompanyName from './CompanyName';
import Profile from './Profile';



const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator tabBarOptions={{
      style: {
        backgroundColor: 'white'
      },
      indicatorStyle: {
        backgroundColor: 'grey',
        height: 3
      }
    }}>
        <Tab.Screen name="Company's Name" component={CompanyName} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}