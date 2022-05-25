import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useAtom, useFilter } from "orange-bird"

import { TOUCHED, DOUBLE } from "atoms"

export default function Home() {
  const [timesTouched, setTimesTouched] = useAtom(TOUCHED)
  const doubleTouched = useFilter(DOUBLE)
  return (
    <View style={styles.home}>
      <Text style={styles.mainText}>Welcome to React Native</Text>
      <Text>Times image was touched: {timesTouched}</Text>
      <Text>Double: {doubleTouched}</Text>
      <TouchableOpacity
        onLongPress={() => setTimesTouched(0)}
        activeOpacity={0.85}
        onPress={() => {
          setTimesTouched((t) => t + 1)
        }}
        style={{
          width: "80%",
          height: 200,
          marginVertical: 32,
          borderRadius: 10
        }}
      >
        <Image
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 10
          }}
          source={{
            uri: "https://www.hola.com/us/images/026f-13ac8cc84b8c-e186928dd1f4-1000/horizontal-480/a-cat-playing-in-a-yard-in-beijing-china.jpg"
          }}
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  home: {
    paddingVertical: 32,
    paddingHorizontal: 12,
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
    alignItems: "center",
    width: "100%"
  },
  mainText: {
    fontSize: 16,
    fontWeight: "bold"
  }
})
