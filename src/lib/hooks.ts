import { useValue } from "atomic-state"
import { NAVIGATION } from "states/atoms"

export function useNavigation() {
  return useValue(NAVIGATION)
}
