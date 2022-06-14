import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native"
import { useAtom, useFilter } from "atomic-state"

import { TOUCHED } from "states/atoms"
import { DOUBLE } from "states/filters"
import { useRequest } from "lib/http"

export default function Home() {
  const [timesTouched, , touchedActions] = useAtom(TOUCHED)
  const doubleTouched = useFilter(DOUBLE)

  const { reFetch: getSomeData } = useRequest(
    "https://jsonplaceholder.typicode.com/todos/" + timesTouched,
    {
      auto: false,
      onResolve(data) {
        alert(JSON.stringify(data, null, 2))
      },
      onError() {
        alert("An error ocurred")
      }
    }
  )

  return (
    <View style={styles.home}>
      <Text style={styles.mainText}>Welcome to React Native</Text>
      <Text>Times image was touched: {timesTouched}</Text>
      <Text>Double: {doubleTouched}</Text>
      <TouchableOpacity
        onLongPress={() =>
          touchedActions.change({
            type: "reset"
          })
        }
        activeOpacity={0.85}
        onPress={() => {
          touchedActions.change({
            type: "+"
          })
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
      <Button title="Fetch some data" onPress={getSomeData} />
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
