import { useEffect, useState } from "react"

import Store from "lib/Store"
// Initialize store
Store.init()

export default function AppWrapper({ children }: any) {
  const [storageReady, setStorageReady] = useState(false)

  useEffect(() => {
    const interval = setTimeout(() => {
      setStorageReady(true)
    }, 600)

    return () => {
      clearTimeout(interval)
    }
  }, [])

  return storageReady && children
}
