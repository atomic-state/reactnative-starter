import { AtomicState, PersistenceStoreType } from 'atomic-state'
import { FetcherConfig } from 'http-react-fetcher'

import { getItemAsync, setItemAsync, deleteItemAsync } from 'expo-secure-store'
const SecureStorePersistence: PersistenceStoreType = {
  getItem: getItemAsync,
  setItem: setItemAsync,
  removeItem: deleteItemAsync
}

import Navigation from 'components/Navigation'

export default function App() {
  return (
    <AtomicState persistenceProvider={SecureStorePersistence}>
      <FetcherConfig baseUrl='https://jsonplaceholder.typicode.com'>
        <Navigation />
      </FetcherConfig>
    </AtomicState>
  )
}
