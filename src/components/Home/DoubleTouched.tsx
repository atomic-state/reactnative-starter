import { Text } from 'react-native'

import { useAppFilter } from 'shared/hooks'

export default function DoubleTouched() {
  const doubleTouched = useAppFilter('doubleTouched')

  return <Text>Double: {doubleTouched}</Text>
}
