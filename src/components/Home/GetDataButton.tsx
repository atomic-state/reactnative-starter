import { useValue } from "atomic-state"
import { useFetch } from "http-react-fetcher"
import { Button } from "react-native"

import { touchedState } from "states/atoms"

export default function GetDataButton() {
  const touched = useValue(touchedState)

  const { reFetch: getSomeData } = useFetch("/todos/[id]", {
    config: {
      params: {
        id: touched
      }
    },
    auto: false,
    onResolve(data) {
      alert(JSON.stringify(data, null, 2))
    },
    onError() {
      alert("An error ocurred")
    }
  })

  return <Button title="Fetch some data" onPress={getSomeData} />
}
