import Navigation from "components/Navigation"

import AsyncStorage from "@react-native-async-storage/async-storage"
import { AtomicState } from "atomic-state"
import { FetcherConfig } from "http-react-fetcher"

if (typeof localStorage === "undefined") {
  // Using AsyncStorage as localStorage
  global.localStorage = AsyncStorage as any
}

export default function App() {
  return (
    // AtomicState Root component
    <AtomicState>
      <FetcherConfig baseUrl="https://jsonplaceholder.typicode.com">
        <Navigation />
      </FetcherConfig>
    </AtomicState>
  )
}
