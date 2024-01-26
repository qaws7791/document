# firebase auth



## 이메일 기반 회원가입

회원가입 시 입력 정보

- 닉네임
- 이메일
- 비밀번호

1. `createUserWithEmailAndPassword()`함수 를 통해 이메일 사용자 생성
2. `updateProfile()` 함수를 통해  `displayName` 업데이트
3. `sendEmailVerification()` 함수를 통해 이메일 확인을 위한 메일 전송

```typescript
interface SignupDto {
  email: string;
  password: string;
  username: string;
}
```

```typescript
export const signupWithEmail = async ({
  email,
  password,
  username,
}: SignupDto) => {
  if (!email || !password || !username) return;

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );

    await Promise.all([
      sendEmailVerification(userCredential.user),
      updateProfile(userCredential.user, {
        displayName: username,
      }),
    ])

    return { success: true, user: userCredential.user };
  } catch (error) {
    console.log(error);
    return { success: false, error };
  }
};
```



🔴 이메일 사용자를 생성한 순간부터 로그인이 가능하다

🟠 이메일 인증이 되었는지 여부는  `user[emailVerified]`  Boolean 속성을 통해 확인 할 수 있다

![image-20240120201457329](assets/image-20240120201457329.png)