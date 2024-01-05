// 배열에서 값이 같은 쌍의 수를 헤아리는 함수
function countPairs(arr) {
  // 숫자 값들을 정렬합니다.
  arr.sort((a, b) => a - b); //O(nlogn)

  // 값이 같은 쌍의 수를 저장할 변수를 선언합니다.
  let count = 0;
  let i = 0;

  // 각 숫자 값을 비교하여, 값이 같은 쌍의 수를 증가시킵니다.
  while (i < arr.length - 1) {
    let currentCount = 0;
    while (arr[i] === arr[i + 1]) {
      // 같은 숫자면 진행
      i++;
      currentCount++;
    }
    count += (currentCount * (currentCount + 1)) / 2;
    i++;
  }

  // 값이 같은 쌍의 수를 반환합니다.
  return count;
}

// 예제 배열을 사용하여 함수 테스트
let arrayOfNumbers = [1, 1, 1, 2, 2, 4, 4, 4, 5, 6, 7, 8];
console.log(countPairs(arrayOfNumbers)); // 출력: 3(1)+1(2)+3(4)=7
