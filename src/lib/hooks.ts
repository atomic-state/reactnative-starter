import { useValue } from "orange-bird"
import { NAVIGATION } from "atoms"

export function useNavigation() {
  return useValue(NAVIGATION)
}
