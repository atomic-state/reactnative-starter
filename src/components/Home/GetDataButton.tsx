import { useValue } from "atomic-state"
import { useError, useFetch, useFetchId, useResolve } from "http-react-fetcher"
import { Button } from "react-native"

import { touchedState } from "states/atoms"

export default function GetDataButton() {
  const touched = useValue(touchedState)

  const { reFetch } = useFetch("/todos/[id]", {
    id: "todo",
    config: {
      params: {
        id: touched
      }
    },
    auto: false
  })

  useResolve("todo", (data) => {
    alert(JSON.stringify(data, null, 2))
  })

  useError("todo", () => {
    alert("An error ocurred")
  })

  return <Button title="Fetch some data" onPress={reFetch} />
}
