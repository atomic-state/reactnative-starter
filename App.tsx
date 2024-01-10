import { AtomicState } from 'atomic-state'
import { FetchConfig } from 'http-react'

import Navigation from '@/components/Navigation'

import { getItemAsync, setItemAsync, deleteItemAsync } from 'expo-secure-store'

const secureStore = { getItemAsync, setItemAsync, deleteItemAsync }

export default function App() {
  return (
    <AtomicState persistenceProvider={secureStore}>
      <FetchConfig baseUrl='https://jsonplaceholder.typicode.com'>
        <Navigation />
      </FetchConfig>
    </AtomicState>
  )
}
