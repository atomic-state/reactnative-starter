import { useFetch } from 'atomic-utils'

import { useTouched } from '@/states'

export function useTodo() {
  const timesTouched = useTouched()

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
