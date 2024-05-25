import { NavigationProp } from '@react-navigation/native'
import { atom } from 'atomic-utils'

export const touchedState = atom({
  key: 'touched',
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
        case '-':
          return dispatch(state - 1)
        case '+':
          return dispatch(state + 1)
        case 'reset':
          return dispatch(0)
        default:
          break
      }
    }
  },
  persist: true
})

export const navigationState = atom<NavigationProp<any>>({
  key: 'navigation'
})

export const doubleTouchedState = atom({
  key: 'double',
  get({ get }) {
    const timesTouched = get(touchedState)
    return timesTouched * 2
  }
})

export const formatedTextState = atom({
  key: 'formatedText',
  get({ get }) {
    const double = get(doubleTouchedState)

    return `formatted: {${double}}`
  }
})
