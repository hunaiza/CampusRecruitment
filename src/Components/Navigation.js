import * as React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Student from '../Screens/Student';
import StudentLogin from '../Screens/StudentLogin';
import Register from '../Screens/Register';
import AdminUser from '../Screens/AdminUser';
import Admin from '../Screens/Admin';
import AdminLogin from '../Screens/AdminLogin';
import Company from '../Screens/Company';
import CompanyLogin from '../Screens/CompanyLogin';
import CompanyName from '../Screens/CompanyName';
import CompanyD from '../Screens/CompanyD';

const Stack = createStackNavigator();

function Navigation(props) {
  const loginPg = () => {
    props.navigation.navigate("User")
}
    return (
      <NavigationContainer >
        <Stack.Navigator>
        <Stack.Screen options={{
            headerStyle: {
              backgroundColor: 'white',
            },
            headerTitle: props => <Text style={{fontSize: 25, fontStyle: 'italic', fontWeight: 'bold', textAlign: 'center', color: 'grey'}}>Campus Recruitment</Text>
           }}
          name="AdminUser" component={AdminUser} />
          <Stack.Screen options={{
            headerStyle: {
              backgroundColor: 'white',
            },
            headerTitle: props => <Text style={{fontSize: 25, fontStyle: 'italic', fontWeight: 'bold', textAlign: 'center', color: 'grey'}}>Campus Recruitment</Text>
           }}
          name="CompanyName" component={CompanyName} />
          <Stack.Screen options={{
            headerStyle: {
              backgroundColor: 'white',
            },
            headerTitle: props => <Text style={{fontSize: 25, fontStyle: 'italic', fontWeight: 'bold', textAlign: 'center', color: 'grey'}}>Campus Recruitment</Text>
           }}
          name="CompanyD" component={CompanyD} />
          <Stack.Screen options={{
            headerStyle: {
              backgroundColor: 'white',
            },
            headerTitle: props => <Text style={{fontSize: 30, color: 'grey',marginLeft: 40, fontWeight: 'bold', fontStyle: 'italic'}}>Admin Login</Text>
           }}
          name="AdminLogin" component={AdminLogin} />
          <Stack.Screen options={{
            headerStyle: {
              backgroundColor: 'white',
            },
            headerTitle: props => <Text style={{fontSize: 30, color: 'grey',marginLeft: 40}}>Company</Text>
           }}
          name="Company" component={Company} />
          <Stack.Screen options={{
            headerStyle: {
              backgroundColor: 'white',
            },
            headerTitle: props => <Text style={{fontSize: 30, color: 'grey',marginLeft: 40, fontWeight: 'bold', fontStyle: 'italic'}}>Company</Text>
           }}
          name="CompanyLogin" component={CompanyLogin} />
          <Stack.Screen options={{
            headerStyle: {
              backgroundColor: 'white',
            },
            headerTitle: props => <Text style={{fontSize: 30,color: 'grey',marginLeft: 60, fontWeight: 'bold', fontStyle: 'italic'}}>Admin</Text>
           }}
          name="Admin" component={Admin} />
          <Stack.Screen options={{
            headerStyle: {
              backgroundColor: 'white',
            },
            headerTitle: props => <Text style={{fontSize: 30, color: 'grey',marginLeft: 60, fontStyle: 'italic', fontWeight: 'bold'}}>Student</Text>
            // headerTitle: props => <Image style={{height: 70, width: 500, resizeMode: 'contain', marginLeft: -190}} source={{uri: "https://miro.medium.com/max/1838/1*KJACFKJ0GKtnhgR7OmlPFA.gif"}}></Image>
           }}
          name="Student" component={Student} />
          <Stack.Screen name="StudentLogin" component={StudentLogin} options={{
            headerStyle: {
              backgroundColor: 'white',
            },
            headerTitle: props => <View style={{flexDirection: 'row'}}><Text style={{fontSize: 30, color: 'grey', marginLeft: 30, marginTop: 5, fontStyle: 'italic', fontWeight: 'bold'}}>Student Login</Text>
            <TouchableOpacity onPress={loginPg} activeOpacity={0.8} style={{marginLeft: 110,marginTop: 5,borderWidth: 2,padding: 5, borderColor: 'white', borderRadius: 50}}><Text onPress={loginPg} style={{fontSize: 20, color: 'white'}}>Logout</Text></TouchableOpacity>
            </View>
            // headerTitle: props => <Image style={{height: 70, width: 500, resizeMode: 'contain', marginLeft: -190}} source={{uri: "https://miro.medium.com/max/1838/1*KJACFKJ0GKtnhgR7OmlPFA.gif"}}></Image>
           }}/>
          <Stack.Screen
           name="Register" component={Register} options={{
            headerStyle: {
              backgroundColor: 'white',
            },
            headerTitle: props => <Image style={{height: 50, width: 450, resizeMode: 'contain', marginLeft: -110}} source={{uri: "https://thumbs.dreamstime.com/b/register-now-button-black-web-illustration-isolated-white-background-121304683.jpg"}}></Image>
           }} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default Navigation;