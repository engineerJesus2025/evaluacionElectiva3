import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

// Screens
import HomePage from '../screens/HomePage'
import AddTask from '../screens/AddTask'

const Stack = createStackNavigator()

function MyStack () {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen
        name='Home'
        component={HomePage}
        options={{ title: 'Inicio' }}
      />
      <Stack.Screen
        name='addTask'
        component={AddTask}
        options={{ title: 'Agregar tarea' }}
      />
    </Stack.Navigator>
  )
}

export default function Navigation () {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  )
}
