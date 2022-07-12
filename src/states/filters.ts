import { filter } from "atomic-state"
import { TOUCHED } from "./atoms"

export const DOUBLE = filter({
  name: "DOUBLE",
  get({ get }) {
    const timesTouched = get(TOUCHED)
    return timesTouched * 2
  }
})

export const formatedText = filter({
  name: "formatedText",
  get({ read }) {
    const double = read(DOUBLE)
    return `formatted: {${double}}`
  }
})
