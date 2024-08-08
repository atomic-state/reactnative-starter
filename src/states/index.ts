import { NavigationProp } from '@react-navigation/native'

import { create } from 'atomic-utils'

const touched = create({
  key: 'touched',
  default: 0,
  effects: [
    ({ state }) => {
      return state <= 9
    }
  ],
  actions: {
    increase() {
      touched.setValue(prev => prev + 1)
    },
    decrease() {
      touched.setValue(prev => prev - 1)
    },
    reset() {
      touched.setValue(0)
    }
  },
  persist: true
})

const navigation = create<NavigationProp<any>>({
  key: 'navigation'
})

const doubleTouched = create({
  key: 'double',
  get({ get }) {
    const timesTouched = get(touched)
    return timesTouched * 2
  }
})

const formatedText = create({
  key: 'formatedText',
  get({ get }) {
    const double = get(doubleTouched)

    return `formatted: {${double}}`
  }
})

export const useTouched = touched.value
export const setTouched = touched.setValue
export const touchedActions = touched.actions

export const useNavigation = navigation.value
export const setNavigation = navigation.setValue

export const useDoubleTouched = doubleTouched.value

export const useFormattedText = formatedText.value
