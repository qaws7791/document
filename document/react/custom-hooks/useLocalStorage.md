# useLocalstorage

```tsx
// use useSyncExternalStore
import { useSyncExternalStore } from "react";

export default function useLocalStorage(key: string, defaultValue?: string) {
  return useSyncExternalStore(
    (callback) => subscribe(key, callback),
    () => getSnapshot(key),
    () => defaultValue
  );
}

function getSnapshot(key: string) {
  return window.localStorage.getItem(key);
}

function subscribe(key: string, callback: () => void) {
  const handler = (event: StorageEvent) => {
    if (event.key === key) {
      callback();
    }
  };

  window.addEventListener("storage", handler);
  return () => {
    window.removeEventListener("storage", handler);
  };
}

```

