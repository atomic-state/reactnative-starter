import { useValue } from 'atomic-state'
import useFetch from 'http-react'

import { navigationState, touchedState } from '@/states'

export function useNavigation() {
  return useValue(navigationState)
}

export function useTodo() {
  const timesTouched = useValue(touchedState)

  return useFetch('/todos/[id]', {
    id: 'todo',
    params: {
      id: timesTouched
    },
    auto: false,
    onResolve(data) {
      alert(JSON.stringify(data, null, 2))
    },
    onError() {
      alert('An error ocurred')
    }
  })
}
