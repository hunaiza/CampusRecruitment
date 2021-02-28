import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import RequestStudent from './RequestStudent';
import RequestCompany from './RequestCompany';

const Tab = createMaterialTopTabNavigator();

export default function Student() {
    return (
      <NavigationContainer independent={true}>
      <Tab.Navigator tabBarOptions={{
      style: {
        backgroundColor: '#C0C0C0',
        marginTop: 50,
        width: 325,
        marginLeft: 20,
        borderColor: 'black'
      },
      indicatorStyle: {
        backgroundColor: 'white',
        height: 3
      }
    }}>
        <Tab.Screen name="Student's Request" component={RequestStudent}/>
        <Tab.Screen name="Company's Request" component={RequestCompany} />
              </Tab.Navigator>
    </NavigationContainer>
    )
}