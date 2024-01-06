# useFormInput

```tsx
import { useState, ChangeEvent, HTMLProps } from 'react';

export function useFormInput(initialValue: string): {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
} {
  const [value, setValue] = useState(initialValue);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  const inputProps: HTMLProps<HTMLInputElement> = {
    value: value,
    onChange: handleChange,
  };

  return inputProps;
}

```

