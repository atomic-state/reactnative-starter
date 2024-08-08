import { Text } from 'react-native'

import { useTouched } from '@/states'

export default function Touched() {
  const touched = useTouched()

  return <Text>Times image was touched: {touched}</Text>
}
