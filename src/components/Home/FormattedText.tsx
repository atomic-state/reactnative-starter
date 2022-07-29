import { useFilter } from "atomic-state"
import { Text } from "react-native"

import { formatedTextState } from "states/filters"

export default function FormattedText() {
  const formattedText = useFilter(formatedTextState)

  return <Text>Double: {formattedText}</Text>
}
