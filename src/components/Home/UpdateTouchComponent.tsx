import { TouchableOpacity } from "react-native"
import { useActions } from "atomic-state"

import { touchedState } from "states/atoms"

export default function UpdateTouchComponent({ children }: any) {
  const touchedActions = useActions(touchedState)

  return (
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
      {children}
    </TouchableOpacity>
  )
}
