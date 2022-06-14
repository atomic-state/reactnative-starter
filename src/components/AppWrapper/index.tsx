import { useEffect, useState } from "react"

import Store from "lib/Store"

export default function AppWrapper({ children }: any) {
  const [storageReady, setStorageReady] = useState(false)

  useEffect(() => {
    Store.init(() => setStorageReady(true))
  }, [])

  return storageReady && children
}
