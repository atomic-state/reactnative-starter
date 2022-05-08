import { NavigationProp } from "@react-navigation/native"
import { atom, useAtom } from "atomic-state"

export const TOUCHED = {
  name: "timesTouched",
  default: 0,
  localStoragePersistence: true,
}

export const DOUBLE = {
  name: "doubleTouched",
  get({ get }: any) {
    const timesTouched = get(TOUCHED)
    return timesTouched * 2
  },
}

export const NAVIGATION = atom<NavigationProp<any>>({
  name: "NAVIGATION",
})
