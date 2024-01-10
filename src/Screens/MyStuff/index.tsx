import { StyleSheet, Text, View } from 'react-native'
import { useValue } from 'atomic-state'

import { useTodo } from '@/hooks'
import { doubleTouchedState, touchedState } from '@/states'

export default function MyStuff() {
  const timesTouched = useValue(touchedState)
  const doubleTouched = useValue(doubleTouchedState)

  const { data } = useTodo()

  return (
    <View style={styles.home}>
      <Text style={styles.mainText}>My stuff</Text>
      <Text>Times image was touched: {timesTouched}</Text>
      <Text>Double: {doubleTouched}</Text>
      <Text>{JSON.stringify(data, null, 2)}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  home: {
    paddingVertical: 32,
    paddingHorizontal: 12,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
    width: '100%'
  },
  mainText: {
    fontSize: 16,
    fontWeight: 'bold'
  }
})
