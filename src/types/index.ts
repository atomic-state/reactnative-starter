import { NavigationProp } from "@react-navigation/native"

export type withNavigation<T = {}> = {
  navigation: NavigationProp<any>
} & T
