import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Students from './Students';
import NewVacancy from './NewVacancy';

const Tab = createMaterialTopTabNavigator();

export default function CompanyLogin() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator tabBarOptions={{
      style: {
        backgroundColor: 'white'
      },
      indicatorStyle: {
        backgroundColor: '#C0C0C0',
        height: 3
      }
    }}>
        <Tab.Screen name="Students" component={Students}/>
        <Tab.Screen name="Post New Vacancy" component={NewVacancy} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
