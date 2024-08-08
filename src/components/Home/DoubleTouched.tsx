import { Text } from 'react-native'

import { useDoubleTouched } from '@/states'

export default function DoubleTouched() {
  const doubleTouched = useDoubleTouched()

  return <Text>Double: {doubleTouched}</Text>
}
