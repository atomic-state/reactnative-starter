import { StyleSheet, Text, View } from 'react-native'

import { useAppAtom, useAppFilter } from 'shared/hooks'

export default function MyStuff() {
  const timesTouched = useAppAtom('touched').value
  const doubleTouched = useAppFilter('doubleTouched')

  return (
    <View style={styles.home}>
      <Text style={styles.mainText}>My stuff</Text>
      <Text>Times image was touched: {timesTouched}</Text>
      <Text>Double: {doubleTouched}</Text>
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
