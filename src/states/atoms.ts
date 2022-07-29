import { NavigationProp } from "@react-navigation/native"
import { atom } from "atomic-state"

type TouchedActionsArgs = {
  update: number
  change: {
    type: "+" | "-" | "reset"
  }
}

export const touchedState = atom<number, TouchedActionsArgs>({
  name: "touched",
  default: 0,
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

export const navigationState = atom<NavigationProp<any>>({
  name: "navigation"
})
