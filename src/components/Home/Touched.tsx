import { Text } from "react-native"
import { useValue } from "atomic-state"

import { touchedState } from "states/atoms"

export default function Touched() {
  const touched = useValue(touchedState)

  return <Text>Times image was touched: {touched}</Text>
}
