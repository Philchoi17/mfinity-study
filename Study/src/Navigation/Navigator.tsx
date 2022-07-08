import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeScreen from '../Screens/Home'
import AboutScreen from '../Screens/About'

const { Navigator, Screen } = createNativeStackNavigator()

export default () => {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Home" component={HomeScreen} />
        <Screen name="About" component={AboutScreen} />
      </Navigator>
    </NavigationContainer>
  )
}
