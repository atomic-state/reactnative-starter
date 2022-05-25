import { useValue } from "orange-bird"
import { NAVIGATION } from "atoms"
import { useState } from "react"

export function useBoolean(initialValue = false) {
  const [state, setState] = useState(initialValue)

  const actions = {
    toggle() {
      setState((s) => !s)
    },
    off() {
      setState(false)
    },
    on() {
      setState(true)
    }
  }

  const end = [state, actions] as [
    boolean,
    {
      toggle(): void
      off(): void
      on(): void
    }
  ]

  return end
}

export function useObject<T>(initialValue: T) {
  const [state, setState] = useState(initialValue)

  const actions = {
    write(f: T | ((e: T) => T)) {
      const n = typeof f === "function" ? (f as any)(state) : { ...state, ...f }
      const tm = setTimeout(() => {
        setState((s) => ({
          ...s,
          ...n
        }))
        clearTimeout(tm)
      }, 0)
    },
    replace(f: T | ((e: T) => T)) {
      const n = typeof f === "function" ? (f as any)(state) : f
      setState(n)
    },

    reset() {
      setState(initialValue)
    }
  }

  const end = [state, actions] as [
    T,
    {
      write(f: T | ((e: T) => T)): void
      replace(f: T | ((e: T) => T)): void
      /**
       * Reset to initial value
       */
      reset(): void
    }
  ]

  return end
}

export function useNavigation() {
  return useValue(NAVIGATION)
}
