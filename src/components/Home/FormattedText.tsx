import { useValue } from 'atomic-utils'
import { Text } from 'react-native'

import { formatedTextState } from '@/states'

export default function FormattedText() {
  const formattedText = useValue(formatedTextState)

  return <Text>Double: {formattedText}</Text>
}
