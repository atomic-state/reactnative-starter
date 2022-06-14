import { NavigationProp } from "@react-navigation/native"
import { atom } from "atomic-state"

type TouchedArgs = {
  update: number
  change: {
    type: "+" | "-" | "reset"
  }
}

export const TOUCHED = atom<number, TouchedArgs>({
  name: "TOUCHED",
  default: 0,
  ignoreKeyWarning: true,
  effects: [
    ({ state }) => {
      return state <= 9
    }
  ],
  actions: {
    update({ args, dispatch }) {
      dispatch(args)
    },
    change({ state, args, dispatch }) {
      switch (args.type) {
        case "-":
          return dispatch(state - 1)
        case "+":
          return dispatch(state + 1)
        case "reset":
          return dispatch(0)
        default:
          break
      }
    }
  },
  persist: true
})

export const NAVIGATION = atom<NavigationProp<any>>({
  ignoreKeyWarning: true,
  name: "NAVIGATION"
})
