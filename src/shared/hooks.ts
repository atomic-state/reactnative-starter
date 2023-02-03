import { atomProvider, filterProvider } from 'atomic-state'
import useFetch from 'http-react'

import { appAtoms, appFilters } from 'shared/states'

export const useAppAtom = atomProvider(appAtoms)

export const useAppFilter = filterProvider(appFilters)

export function useNavigation() {
  return useAppAtom('navigation').value
}

export function useTodo() {
  const timesTouched = useAppAtom('touched').value

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
