import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome'

import Home from './Home'
import Sum from './Sum'
import { StoreProvider } from './state'

const Tab = createBottomTabNavigator()

const Routes = () => (
  <StoreProvider>
    <Tab.Navigator
      screenOptions={ ({ route }) => ({
        headerShown: false,
        tabBarIcon: () => {
           let iconName
           
           switch (route.name) {
                case 'Compra':
                    iconName = 'shopping-cart'
                    break;
                case 'Total compra':
                    iconName = 'calculator'
                    break;
                default:
                    break;
            }

            return <Icon name={iconName} style={{ fontSize: 25}} />
        },
      })}
    >
      <Tab.Screen name="Compra" component={ Home } />
      <Tab.Screen name="Total compra" component={ Sum } />
    </Tab.Navigator>
  </StoreProvider>
)

export default Routes
