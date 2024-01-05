// 최소 거리 쌍 찾기(1차원)
// 실수 배열을 입력으로 받아 가장 가까운 숫자 쌍을 반환
// 시간 복잡도:  O(nlogn)

function closestPair(arr) {
  arr.sort((a, b) => a - b);
  let pair = [arr[0], arr[1]];
  let smallestDiff = Math.abs(arr[1] - arr[0]);

  for (let i = 2; i < arr.length; i++) {
    const diff = Math.abs(arr[i] - arr[i - 1]);
    if (diff < smallestDiff) {
      smallestDiff = diff;
      pair = [arr[i - 1], arr[i]];
    }
  }

  return pair;
}

const arr = [2.3, 10.1, 5.2, 15.2, 16.3, 24.2];
console.log(closestPair(arr)); // [ 15.2, 16.3 ]
