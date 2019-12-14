import React from 'react'
import {  createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Main from '../containers/Main';
import SelectScreen from '../containers/SelectScreen';

const MainNavigator = createStackNavigator({
  main: {
    screen: Main,
    navigationOptions: {
      header: null,
    }
  },
})

const AppNavigator = createSwitchNavigator(
  {
    main: MainNavigator,
    select_screen: SelectScreen
  },
  {
    initialRouteName: "main",
  },
)

export default AppNavigator