import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'
import { useAtom, useValue } from 'atomic-state'
import { Text, TouchableOpacity, View } from 'react-native'

// Screens
import { Home, MyStuff } from '@/Screens'
import { navigationState, touchedState } from '@/states'
import { useNavigation } from '@/hooks'

const Stack = createNativeStackNavigator()

function CartButton({ tintColor }: any) {
  const touched = useValue(touchedState)
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
  const [userNav, setNavigation] = useAtom(navigationState)
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
