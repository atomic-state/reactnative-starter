import AsyncStorage from "@react-native-async-storage/async-storage"

const storageExists = typeof localStorage !== "undefined"

export const Store = {
  /**
   * Initialize `localStorage` like object
   */
  init() {
    if (!storageExists) {
      const newStorage: Storage = {
        removeItem: (k: string) => {
          if (storageExists) {
            delete localStorage[k]
          }
          AsyncStorage.removeItem(k)
        },
        setItem: (s: string, v: string) => {
          if (storageExists) {
            localStorage[s] = v
          }
          AsyncStorage.setItem(s, v)
        },
        getItem: (s: string, f: any) => {
          if (storageExists) {
            return localStorage[s]
          }
        },
      } as any

      // Load al saved items in AsyncStorage
      AsyncStorage.getAllKeys().then((keys) => {
        keys.map((k) => {
          AsyncStorage.getItem(k).then((jsonValue) => {
            localStorage[`${k}`] = jsonValue
          })
        })
      })

      // Set localStorage
      global.localStorage = newStorage
    }
  },

  // methods for working with async-storage data

  async get<T>(key: string) {
    const data = await AsyncStorage.getItem(`store-${key}`)
    const value = await JSON.parse(data as unknown as string)
    return value as T
  },
  async set<T>(key: string, data: T) {
    try {
      await AsyncStorage.setItem(`store-${key}`, JSON.stringify(data))
      return true
    } catch (err) {
      throw err
    }
  },
  async remove(key: string) {
    await AsyncStorage.removeItem(`store-${key}`)
    if (storageExists) {
      localStorage.removeItem(key)
    }
  },
}

export default Store
