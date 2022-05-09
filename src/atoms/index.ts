import { NavigationProp } from "@react-navigation/native"
import { atom, filter } from "atomic-state"

export const TOUCHED = atom({
  name: "TOUCHED",
  default: 0,
  localStoragePersistence: true
})

export const DOUBLE = filter({
  name: "DOUBLE",
  async get({ get }) {
    const timesTouched = get(TOUCHED)
    return timesTouched * 2
  }
})

export const NAVIGATION = atom<NavigationProp<any>>({
  name: "NAVIGATION"
})
