import { NavigationProp } from '@react-navigation/native'
import { atom, filter } from 'atomic-state'

export const touchedState = atom<number>({
  name: 'touched',
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
  name: 'navigation'
})

export const doubleTouchedState = filter({
  name: 'double',
  get({ get }) {
    const timesTouched = get(touchedState)

    return timesTouched * 2
  }
})

export const formatedTextState = filter({
  name: 'formatedText',
  get({ get }) {
    const double = get(doubleTouchedState)

    return `formatted: {${double}}`
  }
})

export const atoms = {
  touched: touchedState,
  navigation: navigationState
}

export const filters = {
  doubleTouched: doubleTouchedState,
  formatedText: formatedTextState
}
