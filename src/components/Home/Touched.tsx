import { Text } from 'react-native'

import { useAppAtom } from 'shared/hooks'

export default function Touched() {
  const touched = useAppAtom('touched').value

  return <Text>Times image was touched: {touched}</Text>
}
