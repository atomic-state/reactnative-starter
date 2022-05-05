export const timesTouchedAtom = {
  name: "timesTouched",
  default: 0,
  localStoragePersistence: true,
}

export const doubleTouchedFilter = {
  name: "doubleTouched",
  get({ get }: any) {
    const timesTouched = get(timesTouchedAtom) || 0
    return timesTouched * 2
  },
}
