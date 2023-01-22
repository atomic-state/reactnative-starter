import { AtomicState } from 'atomic-state'
import { FetchConfig } from 'http-react'

import Navigation from 'components/Navigation'
import SecureStoreProvider from 'shared/secure-store-provider'

export default function App() {
  return (
    <AtomicState persistenceProvider={SecureStoreProvider}>
      <FetchConfig baseUrl='https://jsonplaceholder.typicode.com'>
        <Navigation />
      </FetchConfig>
    </AtomicState>
  )
}
