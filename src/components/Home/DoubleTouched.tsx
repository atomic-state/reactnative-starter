import { Text } from 'react-native'

import { doubleTouchedState } from '@/states'
import { useValue } from 'atomic-utils'

export default function DoubleTouched() {
  const doubleTouched = useValue(doubleTouchedState)

  return <Text>Double: {doubleTouched}</Text>
}
