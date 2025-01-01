// 오름차 순으로 정렬된 두 배열을 입력으로 받아
// 공통 요소들을 오름차 순으로 정렬한 배열을 반홤
function commonElements(arr1, arr2) {
  let i = 0,
    j = 0;

  // 두 배열을 순회하면서 일치하는 값을 출력합니다.
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] === arr2[j]) {
      console.log(arr1[i]);
      i++;
      j++;
    } else if (arr1[i] < arr2[j]) {
      i++;
    } else {
      j++;
    }
  }
}

// 예제 배열을 사용하여 함수 테스트
let arr1 = [1, 3, 4, 6, 7, 9];
let arr2 = [1, 2, 4, 5, 9, 10];
commonElements(arr1, arr2); // 출력: 1, 4, 9
