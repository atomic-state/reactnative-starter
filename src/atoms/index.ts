import { NavigationProp } from "@react-navigation/native"
import { atom, filter } from "orange-bird"

export const TOUCHED = atom<
  number,
  {
    reset: undefined
    update: number
    change: {
      type: "+" | "-" | "reset"
    }
  }
>({
  name: "TOUCHED",
  default: 0,
  effects: [
    ({ state }) => {
      return state <= 9
    }
  ],
  actions: {
    reset({ dispatch }) {
      dispatch(0)
    },
    update({ args, dispatch }) {
      dispatch(args)
    },
    change({ args, dispatch }) {
      if (args.type === "+") {
        dispatch((c) => c + 1)
      }
      if (args.type === "-") {
        dispatch((c) => c - 1)
      }
      if (args.type === "reset") {
        dispatch(0)
      }
    }
  },
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
