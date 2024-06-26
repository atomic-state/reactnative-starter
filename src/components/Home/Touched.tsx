import { useValue } from 'atomic-utils'
import { Text } from 'react-native'

import { touchedState } from '@/states'

export default function Touched() {
  const touched = useValue(touchedState)

  return <Text>Times image was touched: {touched}</Text>
}
