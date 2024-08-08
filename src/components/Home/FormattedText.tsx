import { Text } from 'react-native'

import { useFormattedText } from '@/states'

export default function FormattedText() {
  const formattedText = useFormattedText()

  return <Text>Double: {formattedText}</Text>
}
