import { NavigationProp } from "@react-navigation/native"
import { atom, filter } from "atomic-state"

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

export const doubleTouchedState = filter({
  name: "DOUBLE",
  get({ get }) {
    const timesTouched = get(touchedState)

    return timesTouched * 2
  }
})

export const formatedTextState = filter({
  name: "formatedText",
  get({ read }) {
    const double = read(doubleTouchedState)

    return `formatted: {${double}}`
  }
})
