# TypeScript

```typescript
const Locales = ["ko", "en"] as const

type Locale = (typeof Locales)[number] // type Locale = "ko" | "en"
```

