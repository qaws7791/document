function lowerBound(arr, target, start, end) {
  while (start < end) {
    const mid = parseInt((start + end) / 2)
    if (arr[mid] >= target) end = mid
    else start = mid + 1
  }
  return end
}

function upperBound(arr, target, start, end) {
  while (start < end) {
    const mid = parseInt((start + end) / 2)
    if (arr[mid] > target) end = mid
    else start = mid + 1
  }
  return end
}

function countByRange(arr, left, right) {
  return (
    upperBound(arr, right, 0, arr.length) - lowerBound(arr, left, 0, arr.length)
  )
}
