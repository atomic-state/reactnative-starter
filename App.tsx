import Navigation from "components/Navigation"

import AsyncStorage from "@react-native-async-storage/async-storage"
import { AtomicState } from "atomic-state"

if (typeof localStorage === "undefined") {
  // Using AsyncStorage as localStorage
  global.localStorage = AsyncStorage as any
}

export default function App() {
  return (
    // AtomicState Root component
    <AtomicState>
      <Navigation />
    </AtomicState>
  )
}
