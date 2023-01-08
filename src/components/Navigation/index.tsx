import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'
import { Text, TouchableOpacity, View } from 'react-native'

// Screens
import { Home, MyStuff } from 'screens'

import { useAppAtom, useNavigation } from 'shared/hooks'

const Stack = createNativeStackNavigator()

function CartButton({ tintColor }: any) {
  const touched = useAppAtom('touched').value
  const navigation = useNavigation()
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center'
      }}
    >
      <Text
        style={{
          color: tintColor,
          marginRight: 10
        }}
      >
        My sfuff ({touched})
      </Text>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => {
          navigation.navigate('MyStuff')
        }}
      >
        <Feather size={18} name='shopping-bag' color='white' />
      </TouchableOpacity>
    </View>
  )
}

export default function Navigation() {
  const [userNav, setNavigation] = useAppAtom('navigation')
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
          headerTintColor: 'white',
          statusBarHidden: false,
          statusBarStyle: 'dark',
          headerStyle: {
            backgroundColor: 'black'
          },
          headerRight: CartButton
        }}
      >
        <Stack.Screen
          name='Home'
          options={{
            headerShown: true
          }}
        >
          {({ navigation }) => {
            if (!userNav) {
              setTimeout(() => {
                setNavigation(navigation)
              }, 0)
            }
            return <Home />
          }}
        </Stack.Screen>
        <Stack.Screen
          name='MyStuff'
          options={{
            headerShown: false,
            animation: 'slide_from_bottom'
          }}
          component={MyStuff}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
