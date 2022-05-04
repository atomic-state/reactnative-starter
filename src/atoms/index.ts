import { atom } from "atomic-state"

export const timesTouchedAtom = atom({
  name: "timesTouched",
  default: 0,
  localStoragePersistence: true,
})
