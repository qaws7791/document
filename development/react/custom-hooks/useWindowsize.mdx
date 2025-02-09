# useWindowsize

```ts
import { useEffect, useState } from "react";

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const callback = (e: Event) => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", callback);
    return () => window.removeEventListener("resize", callback);
  });

  return windowSize;
}

```

```ts
import { useSyncExternalStore } from "react";

type Callback = () => void;

let store = {
  width: 0,
  height: 0,
};

function getServerSnapshot() {
  return store;
}

function getSnapshot() {
  return store;
}

function subscribe(callback: Callback) {
  const handleResize = () => {
    callback();
    store = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  };

  handleResize();
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}

export default function useWindowSize() {
  const windowSize = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  return windowSize;
}
```

