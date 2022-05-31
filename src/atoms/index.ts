import { NavigationProp } from "@react-navigation/native"
import { atom, filter } from "orange-bird"

export const TOUCHED = atom({
  name: "TOUCHED",
  default: 0,
  persist: true
})

export const DOUBLE = filter({
  name: "DOUBLE",
  get({ get }) {
    const timesTouched = get(TOUCHED)
    return timesTouched * 2
  }
})

export const NAVIGATION = atom<NavigationProp<any>>({
  name: "NAVIGATION"
})
