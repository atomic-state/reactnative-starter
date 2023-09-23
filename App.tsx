import { AtomicState } from 'atomic-state'
import { FetchConfig } from 'http-react'

import Navigation from 'components/Navigation'

import * as SecureStore from 'expo-secure-store'

export default function App() {
  return (
    <AtomicState persistenceProvider={SecureStore}>
      <FetchConfig
        baseUrl='https://jsonplaceholder.typicode.com'
        fetcher={fetch}
      >
        <Navigation />
      </FetchConfig>
    </AtomicState>
  )
}
