import { useError, useFetch, useResolve } from 'http-react'
import { Button } from 'react-native'

import { useAppAtom } from 'shared/hooks'

export default function GetDataButton() {
  const timesTouched = useAppAtom('touched').value

  const { reFetch } = useFetch('/todos/[id]', {
    id: 'todo',
    params: {
      id: timesTouched
    },
    auto: false,
    onResolve(data) {
      console.log(data)
    }
  })

  // Each useResolve call works as a 'useEffect' that only runs when a request completes
  useResolve('todo', data => {
    alert(JSON.stringify(data, null, 2))
  })

  // Same for error. Each useError call only runs once after a request fails
  useError('todo', () => {
    alert('An error ocurred')
  })

  return <Button title='Fetch some data' onPress={reFetch} />
}
