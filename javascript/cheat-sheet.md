# Cheat Sheet

1. 속성값 안전하게 가져오기 obj?.value ⇒ obj가 있으면 value를 가져옴
2. 없을 때 보여주기 user ?? ‘없습니다’
3. 있을 때 보여주기 user && ‘있습니다’
4. 나눗셈 몫 구하기 Math.floor(num1/num2)
5. 나머지 구하기 num1%num2
6. 문자열을 리스트로 String.split(’’)
7. 문자 리스트를 문자열로 Array.join(’’)
8. 알파벳을 소문자로 String.toLowerCase()
9. 두 배열의 공통 원소 개수 arr1.filter(x=> arr2.includes(x)).length
10. 배열 모든 원소의 곱 arr1.reduce((a,c)=>a\*c)
11. 자연수합: 1부터 n까지의 합 n\*(n+1)/2
12. 제곱합: 1^2부터 n^2까지의 합 (n(n+1)(2n+1)) / 6
13. 입력받은 숫자중 최대값 Math.max(…array) array.reduce((a,c)=> a > c ? a : c)
14. myString에서 부분 문자열 pat 찾기 new RegExp(pat,'i').test(myString) // true or false
15. 리스트에서 조건을 처음 만족하는 원소의 인덱스 array.findIndex(x⇒x>10)
16. 배열에서 홀수 짝수 개수 구하기 arr.reduce((a,c) ⇒ (c%2 ===0 ? a\[0]++ : a\[1]++, a),\[0,0])
17. 배열에서 특정 값 포함 여부 확인 array.includes(5); // true or false
18. 정수인지 확인 Number.isInteger(n) // true or false
19. 제곱근 구하기 Math.sqrt(n) // root(n)
20. 홀수인지 확인 const isOdd = (x) => x%2!==0
21. 짝수인지 확인 const isEven = (x) => x%2===0
22. 절댓값 구하기 Math.abs(n)
23. 문자열에서 조건에 맞는 문자만 모아서 반환 string.split('').filter((v,i)=>i%2===0).join('')
24. 문자열에서 특정 문자만 대문자로 바꾸기 string.split('').reduce((a,c)=> a+(c===s? c.toUpperCase():c) ,'') my\_string.replaceAll(s,s.toUpperCase())
25. 값 1:1매칭 → 객체 활용 (ex.가위바위보)
26. 이진수 → 쉬프트 활용
27. 문자열의 접두사인지 확인하기 new RegExp(`^${is_prefix}`).test(my\_string)
28. 배열 원소 두개 서로 자리 바꾸기 \[arr\[0],arr\[1]] = \[arr\[1],arr\[0]]
29. 숫자 to 문자 String.fromCharCode(97) // ‘a’
30. 배열에서 요소의 인덱스 찾기 array.findIndex(x⇒x===8) array.indexOf(8)
31. 배열에서 중복 원소 제거 \[...new Set(\[3,2,2])] // \[3,2]
32. 문자열에서 중복 문자 제거 \[...new Set(my\_string)].join('');
33. 특정 위치부터 등장하는 처음 원소 인덱스 찾기 arr.indexOf(1,idx);
34. 숫자가 아닌 연속 문자열을 기준으로 문자열 나누기 my\_string .split(/\D+/g)
35. 문자열에서 특정 문자 대소문자 구분 없이 개수 구하기 str.match(/a/ig).length
36. 배열에서 두 값 교환하기 \[arr\[i],arr\[j]] = \[arr\[j],arr\[i]]
37. 2차원 배열에서 원소 바로 꺼내기 for(const \[s,e] of arr){}
38. 문자열에서 특정 문자열의 인덱스 구하기 str.indexof(’a’) // 처음 등장하는 일치 값의 인덱스 str.lastIndexOf(’a’) // 마지막에 등장하는 일치 값의 인덱스
39. 주어진 수가 2의 거듭제곱인지 판별 Math.log2(arr.length)%1===0
40. 구분자 여러 개로 문자열 분리하기 myStr.match(/\[^a-c]+/g)
41. 두배열 동등 비교 JSON.stringify(a) === JSON.stringify(b);
42. 문자 아스키 코드 A:65\~Z:90 a:97\~z:122
43. 매우 큰 숫자 다루기 `BigInt(number)`
44. "abcabcabc".match(new RegExp(".{1,3}", "g"))
45. 문자열 뒤집기 str.split('').reverse().join('')
46. 여러 문자열을 공백으로 대체하기 str.replace(/aya|ye|woo|ma/g,'’)
47. 해당 문자(5 또는 0)가 아닌 문자가 들어 있는지 확인 /\[^50]/.text(str)
48. 이진수 문자열을 숫자로 변환 Number(’0b’ + str) parseInt(str,2)
49. 10진수를 이진수 문자열로 변환 num.toString(2)
