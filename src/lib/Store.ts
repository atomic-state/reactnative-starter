import AsyncStorage from "@react-native-async-storage/async-storage"

const storageExists = typeof localStorage !== "undefined"

export const Store = {
  /**
   * Initialize `localStorage` like object
   */
  init() {
    if (typeof localStorage === "undefined") {
      global.localStorage = {} as any
      global.localStorage = {
        ...global.localStorage,
        removeItem(k) {
          delete localStorage[k]
          AsyncStorage.removeItem(k)
        },
        setItem(s, v) {
          localStorage[s] = v
          AsyncStorage.setItem(s, v)
        },
        clear() {},
        getItem(s) {
          return localStorage[s]
        }
      }
      // Load al saved keys present in localStorage
      AsyncStorage.getAllKeys().then((k) => {
        k.forEach((key) => {
          AsyncStorage.getItem(key).then((jsonValue) => {
            localStorage[key] = jsonValue
          })
        })
      })
    }
  },
  async get<T>(key: string) {
    const data = await AsyncStorage.getItem(`${key}`)
    const value = await JSON.parse(data as unknown as string)
    return value as T
  },
  async set<T>(key: string, data: T) {
    try {
      await AsyncStorage.setItem(`${key}`, JSON.stringify(data))
      return true
    } catch (err) {
      throw err
    }
  },
  async remove(key: string) {
    await AsyncStorage.removeItem(`${key}`)
    if (storageExists) {
      localStorage.removeItem(key)
    }
  }
}

export default Store
