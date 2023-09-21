// 정수 배열 nums와 정수 target이 주어질 때,
// 배열에서 4개의 원소 합이 target과 같은 모든 배열을 출력하라
// https://leetcode.com/problems/4sum/description/
// 시간복잡도: O(n^3)
// 공간복잡도: O(1)

function fourSum(nums, target) {
  // 배열 정렬
  nums.sort((a, b) => a - b);
  // 결과 배열 초기화
  const results = [];

  //첫 번째 원소 탐색
  for (let i = 0; i < nums.length - 3; i++) {
    //중복된 첫 번째 원소 건너뛰기
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    // 두 번째 원소 탐색
    for (let j = i + 1; j < nums.length - 2; j++) {
      //중복된 두 번째 원소 건너뛰기
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;

      //두 개의 포인터 초기화
      let left = j + 1; // 두 번째 원소 다음 인덱스
      let right = nums.length - 1; // 마지막 원소 인덱스

      while (left < right) {
        //left와 right로 세 번째, 네 번째 원소를 선택하여 합계 계산
        const sum = nums[i] + nums[j] + nums[left] + nums[right];

        if (sum === target) {
          // 합계가 타겟과 일치하는 경우
          results.push([nums[i], nums[j], nums[left], nums[right]]);

          // 중복 원소 건너 뛰기
          while (left < right && nums[left] === nums[left + 1]) left++;
          while (left < right && nums[right] === nums[right - 1]) right--;

          //left를 증가, right를 감소시켜 범위 축소
          left++;
          right--;
        } else if (sum < target) {
          // 합계가 타겟보다 작은 경우 -> left를 오른쪽으로 이동
          left++;
        } else {
          // 합계가 타겟보다 큰 경우 -> right를 왼쪽으로 이동
          right--;
        }
      }
    }
  }

  return results;
}

console.log(fourSum([1, 0, -1, 0, -2, 2], 0));

/*
  출력: [
         [-2, -1, 1, 2],
         [-2,  0, 0, 2],
         [-1,  0, 0, 1]
       ]
*/

console.log(fourSum([2, 2, 2, 2, 2], 8));
/*
  출력: [
          [2,2,2,2]
        ]
*/
