import { useValue } from 'atomic-state'
import { navigationState } from 'shared/states'

export function useNavigation() {
  return useValue(navigationState)
}
