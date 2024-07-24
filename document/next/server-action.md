# server action

`server action`: 서버 측에서 실행되는 비동기 함수. 양식 제출이나 데이터 변형 처리 등에 사용



## "use server"

서버 컴포넌트에서는 함수 맨 위에서 사용하거나 가져오기를 통해 사용

```tsx
// Server Component
export default function Page() {
  // Server Action
  async function create() {
    'use server'
 
    // ...
  }
 
  return (
    // ...
  )
}
```

클라이언트 컴포넌트에서는 가져오기를 통해서만 사용 가능

```tsx
import { create } from '@/app/actions'
 
export function Button() {
  return (
    // ...
  )
}
```



## 1. Create queries

nextjs 서버 측에서 사용할 쿼리 작성

```typescript
import "server-only";
import { db } from "@/drizzle/db";

export async function insertUser(data: InsertUser) {
  const result = await db.insert(usersTable).values(data).returning();
  return result[0];
}
```

## 2. Create `<form>` actions

form에 연결할 `action` 함수 작성

```tsx
"use server";
import { AccountFormState } from "@/lib/types";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";
import { SignupFormSchema } from "@/lib/schemas";
import { insertUser, existingUser } from "@/drizzle/queries";

export async function signupAction(
  state: AccountFormState,
  formData: FormData
): Promise<AccountFormState> {
  // 1. FormData 유효성 검사
  const validatedData = SignupFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });
  if (!validatedData.success) {
    return {
      errors: validatedData.error.flatten().fieldErrors,
    };
  }

  // 2. 데이터 베이스에 저장하기 전 처리
  const { email, password } = validatedData.data;

  const existUser = await existingUser(email);

  if (existUser) {
    return {
      errors: { email: ["Email already exists"] },
    };
  }

  // 3. 데이터 베이스에 저장

  const hashedPassword = await bcrypt.hash(password, 10);

  const data = await insertUser({
    email: email,
    password: hashedPassword,
  });

  await createSession(data.id);
  redirect("/");
}
```

## 3. create and use the `<form>` components

 `useFormState`을 사용하여 `action`함수를 form에 연결하고,`useFormStatus`를 사용하여 폼의 상태를 추적

```tsx
import { useFormState, useFormStatus } from "react-dom";

export function AccountForm() {
  const [state, formAction] = useFormState(signupAction, undefined);

  return (
    <form onSubmit={formAction}>
      <div>
        <input type="email" name="email" />
        <p>{state?.error?.email}</p>
      </div>
      <div>
        <input type="password" name="password" />
        <p>{state.error?.password}</p>
      </div>
      <p>{state?.message}</p>
      <SubmitButton />
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button disabled={pending}>{pending ? "Submitting..." : "Submit"}</button>
  );
}
```