import AsyncStorage from "@react-native-async-storage/async-storage"

const storageExists = typeof localStorage !== "undefined"

// Our localStorage implementation.
export const Store = {
  /**
   * Initialize `localStorage` like object using AsyncStorage
   */
  async init(callback: any = () => {}) {
    try {
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

            // Prevent saving undefined or null values
            if (v !== null) {
              if (typeof v !== "undefined") {
                AsyncStorage.setItem(s, v)
              }
            }
          },
          clear() {},
          getItem(s) {
            return localStorage[s]
          }
        }
        // Load al saved keys present in localStorage
        const storageKeys = await AsyncStorage.getAllKeys()

        storageKeys.forEach(async (key) => {
          const jsonValue = await AsyncStorage.getItem(key)
          localStorage[key] = jsonValue
        })
      }
    } catch (err) {
    } finally {
      // Wait for 300ms
      const tm = setTimeout(() => {
        callback()
        clearTimeout(tm)
      }, 300)
    }
  },
  async get<T>(key: string, def?: T) {
    const data = await AsyncStorage.getItem(`${key}`)
    const value = await JSON.parse(data as unknown as string)
    return (typeof value === "undefined" ? def : value) as T
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
