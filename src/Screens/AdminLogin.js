import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import RequestSC from './Requests';
import RegisteredStudents from './RegisteredStudents';
import Vacancy from './Vacancy';

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
        <Tab.Screen name="Requests" component={RequestSC}/>
        <Tab.Screen name="Registered Students" component={RegisteredStudents} />
        <Tab.Screen name="Vacancy" component={Vacancy} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
