import React from 'react'
import {  createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Main from '../containers/Main';

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
    main: MainNavigator
  },
  {
    initialRouteName: "main",
  },
)

export default AppNavigator