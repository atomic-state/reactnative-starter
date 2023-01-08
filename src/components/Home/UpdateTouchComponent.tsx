import { TouchableOpacity } from 'react-native'

import { useAppAtom } from 'shared/hooks'

export default function UpdateTouchComponent({ children }: any) {
  const touchedActions = useAppAtom('touched').actions

  return (
    <TouchableOpacity
      onLongPress={() =>
        touchedActions.change({
          type: 'reset'
        })
      }
      activeOpacity={0.85}
      onPress={() => {
        touchedActions.change({
          type: '+'
        })
      }}
      style={{
        width: '80%',
        height: 200,
        marginVertical: 32,
        borderRadius: 10
      }}
    >
      {children}
    </TouchableOpacity>
  )
}
