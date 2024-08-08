import { TouchableOpacity } from 'react-native'
import { touchedActions } from '@/states'

export default function UpdateTouchComponent({ children }: any) {
  return (
    <TouchableOpacity
      onLongPress={touchedActions.reset}
      activeOpacity={0.85}
      onPress={touchedActions.increase}
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
