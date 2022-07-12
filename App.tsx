import Navigation from "components/Navigation"

import AsyncStorage from "@react-native-async-storage/async-storage"

if (typeof localStorage === "undefined") {
  // Using AsyncStorage as localStorage
  global.localStorage = AsyncStorage as any
}

export default function App() {
  return <Navigation />
}
