import { StyleSheet, Text, View } from 'react-native'

import { useTodo } from '@/hooks'
import { useDoubleTouched, useTouched } from '@/states'

export default function MyStuff() {
  const timesTouched = useTouched()
  const doubleTouched = useDoubleTouched()

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
