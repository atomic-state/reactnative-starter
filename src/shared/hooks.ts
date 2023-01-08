import { atomProvider, filterProvider } from 'atomic-state'

import { appAtoms, appFilters } from 'shared/states'

export const useAppAtom = atomProvider(appAtoms)

export const useAppFilter = filterProvider(appFilters)

export function useNavigation() {
  return useAppAtom('navigation').value
}
