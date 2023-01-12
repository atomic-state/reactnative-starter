import { AtomicState } from 'atomic-state'
import { FetcherConfig } from 'http-react'

import Navigation from 'components/Navigation'
import SecureStoreProvider from 'shared/secure-store-provider'

export default function App() {
  return (
    <AtomicState persistenceProvider={SecureStoreProvider}>
      <FetcherConfig baseUrl='https://jsonplaceholder.typicode.com'>
        <Navigation />
      </FetcherConfig>
    </AtomicState>
  )
}
