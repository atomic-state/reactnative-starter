import { useFilter } from "atomic-state"
import { Text } from "react-native"

import { formatedTextState } from "shared/states"

export default function FormattedText() {
  const formattedText = useFilter(formatedTextState)

  return <Text>Double: {formattedText}</Text>
}
