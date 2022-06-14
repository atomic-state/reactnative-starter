import { filter } from "atomic-state"
import { TOUCHED } from "./atoms"

export const DOUBLE = filter({
  name: "DOUBLE",
  get({ get }) {
    const timesTouched = get(TOUCHED)
    return timesTouched * 2
  }
})
