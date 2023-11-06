# useMediaQuery

```typescript
import { useSyncExternalStore } from 'react'

type Query = string
type CallBack = () => void

export default function useMediaQuery(query: Query) {
  const matches = useSyncExternalStore(
    (callback) => subscribe(query, callback),
    () => getSnapshot(query),
    getServerSnapshot
  )

  return matches
}

function getSnapshot(query: Query) {
  return window.matchMedia(query).matches
}

function subscribe(query: Query, callback: CallBack) {
  console.log(callback)
  const mql = window.matchMedia(query)
  mql.addEventListener('change', callback)
  return () => {
    mql.removeEventListener('change', callback)
  }
}

function getServerSnapshot() {
  return false
}

```

```typescript
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const isDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  ...
}
```

