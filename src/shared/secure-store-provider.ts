import { PersistenceStoreType } from 'atomic-state'
import { deleteItemAsync, getItemAsync, setItemAsync } from 'expo-secure-store'

/**
 * Custom implementation of `PersistenceStoreType`
 * using Expo Secure Store
 */
const SecureStoreProvider: PersistenceStoreType = {
  getItem: getItemAsync,
  setItem: setItemAsync,
  removeItem: deleteItemAsync
}

export default SecureStoreProvider
