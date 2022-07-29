import { filter } from "atomic-state"
import { touchedState } from "./atoms"

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
