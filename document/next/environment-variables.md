# Nextjs에서 환경 변수 세팅하기



## 필요 라이브러리

- zod
- server-only



## 환경 변수 파일 설정

`.env`

```bash
DB_HOST=localhost
DB_USER=myuser
DB_PASS=mypassword
NEXT_PUBLIC_ANALYTICS_ID=abcdefghijk
```



## server 환경 변수

`lib/server.ts`

`server-only`패키지를 사용하여 클라이언트에서 실행되지 않도록 설정

```bash
npm install server-only
```

```jsx
import 'server-only'
...
```



```typescript
import 'server-only';
import { z } from 'zod';

const serverEnvSchema = z.object({
  DB_HOST: z.string(),
  DB_USER: z.string(),
  DB_PASS: z.string(),
});

const serverEnv = serverEnvSchema.parse(process.env);

export default serverEnv;

```



## client 환경 변수

`lib/client.ts`

```typescript
import { z } from 'zod';

const clientEnvSchema = z.object({
  NEXT_PUBLIC_ANALYTICS_ID: z.string(),
});

const clientEnv = clientEnvSchema.parse({
  NEXT_PUBLIC_ANALYTICS_ID: process.env.NEXT_PUBLIC_ANALYTICS_ID,
});

export default clientEnv;

```



## 예제 프로젝트

https://stackblitz.com/edit/stackblitz-starters-anjbbm?file=README.md