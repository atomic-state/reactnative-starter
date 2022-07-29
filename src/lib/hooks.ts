import { useValue } from "atomic-state"
import { navigationState } from "states/atoms"

export function useNavigation() {
  return useValue(navigationState)
}
