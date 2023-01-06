import { useFilter } from 'atomic-state'
import { Text } from 'react-native'

import { doubleTouchedState } from 'shared/states'

export default function DoubleTouched() {
  const doubleTouched = useFilter(doubleTouchedState)

  return <Text>Double: {doubleTouched}</Text>
}
