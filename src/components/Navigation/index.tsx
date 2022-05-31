import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from "@react-navigation/native"
import { useAtom, useValue } from "orange-bird"
import { Feather } from "@expo/vector-icons"
import { Text, View } from "react-native"

// Home screen
import Home from "Screens/Home"
import { NAVIGATION, TOUCHED } from "atoms"

const Stack = createNativeStackNavigator()

function CartButton({ tintColor }: any) {
  const touched = useValue(TOUCHED)
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center"
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
      <Feather size={18} name="shopping-bag" color="white" />
    </View>
  )
}

export default function Navigation() {
  const [userNav, setNavigation] = useAtom(NAVIGATION)
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTintColor: "white",
          statusBarHidden: false,
          statusBarStyle: "dark",
          headerStyle: {
            backgroundColor: "black"
          },
          headerRight: CartButton
        }}
      >
        <Stack.Screen
          name="Home"
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
      </Stack.Navigator>
    </NavigationContainer>
  )
}
