import { Text } from 'react-native'

import { useAppFilter } from 'shared/hooks'

export default function FormattedText() {
  const formattedText = useAppFilter('formatedText')

  return <Text>Double: {formattedText}</Text>
}
