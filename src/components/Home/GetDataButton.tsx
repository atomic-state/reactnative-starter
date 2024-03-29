import { Button } from 'react-native'

import { useTodo } from '@/hooks'

export default function GetDataButton() {
  const { reFetch } = useTodo()

  return <Button title='Fetch some data' onPress={reFetch} />
}
