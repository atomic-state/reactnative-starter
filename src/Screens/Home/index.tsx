import { Image, StyleSheet, Text, View } from "react-native"

import UpdateTouchComponent from "components/Home/UpdateTouchComponent"
import Touched from "components/Home/Touched"
import DoubleTouched from "components/Home/DoubleTouched"
import GetDataButton from "components/Home/GetDataButton"
import FormattedText from "components/Home/FormattedText"

export default function Home() {
  return (
    <View style={styles.home}>
      <Text style={styles.mainText}>Welcome to React Native</Text>
      <Touched />
      <DoubleTouched />
      <FormattedText />
      <UpdateTouchComponent>
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
      </UpdateTouchComponent>
      <GetDataButton />
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
