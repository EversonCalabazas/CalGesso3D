import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/Home/Home';
import CalculaTela from './src/CalculaTela/CalculaTela';
import { Component } from 'react';

const Stack = createStackNavigator();

export default class App extends Component{
  
  render(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
        name="Home"
        component={Home}
        options={{
          headerStyle:{
            backgroundColor: '#1476A1',
          },
          headerTintColor:'#fff'
        }}/>
        <Stack.Screen 
        name="CalculaTela" 
        component={CalculaTela}
        options={{
          headerStyle:{
            backgroundColor: '#1476A1',
          },
          headerTintColor:'#fff'
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
  }
}