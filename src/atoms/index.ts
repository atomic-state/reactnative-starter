import { NavigationProp } from "@react-navigation/native"
import { atom, filter } from "atomic-state"

export const TOUCHED = atom({
  name: "TOUCHED",
  default: 0,
  localStoragePersistence: true,
  hydration: false,
  effects: [
    ({ state, dispatch }) => {
      if (state === 10) {
        console.log("Reseting cout")
        dispatch(0)
      }
    }
  ]
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
