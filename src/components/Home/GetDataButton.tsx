import { useValue } from "atomic-state"
import { useError, useFetch, useResolve } from "http-react-fetcher"
import { Button } from "react-native"

import { touchedState } from "shared/states"

export default function GetDataButton() {
  const timesTouched = useValue(touchedState)

  const { reFetch } = useFetch("/todos/[id]", {
    id: "todo",
    config: {
      params: {
        id: timesTouched
      }
    },
    auto: false
  })

  // Each useResolve call works as a 'useEffect' that only runs when a request completes
  useResolve("todo", (data) => {
    alert(JSON.stringify(data, null, 2))
  })

  // Same for error. Each useError call only runs once after a request fails
  useError("todo", () => {
    alert("An error ocurred")
  })

  return <Button title="Fetch some data" onPress={reFetch} />
}
