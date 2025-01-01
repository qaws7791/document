// https://ko.wikipedia.org/wiki/%EC%9A%94%EC%84%B8%ED%91%B8%EC%8A%A4_%EB%AC%B8%EC%A0%9C
// f(1,k) = 1
// f(n,k) = (f(n-1,k)+k-1)%n+1
function solution(N, K) {
  return N === 1 ? 1 : ((solution(N - 1, K) + K - 1) % N) + 1;
}

console.log(solution(7, 3)); // 4
console.log(solution(41, 2)); // 19
