import AsyncStorage from '@react-native-async-storage/async-storage'
import { AtomicState } from 'atomic-state'
import { FetcherConfig } from 'http-react-fetcher'

import Navigation from 'components/Navigation'

export default function App() {
  return (
    <AtomicState persistenceProvider={AsyncStorage}>
      <FetcherConfig baseUrl='https://jsonplaceholder.typicode.com'>
        <Navigation />
      </FetcherConfig>
    </AtomicState>
  )
}
