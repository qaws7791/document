const arr = [1, 6, 765, 532, 856342, 634, 8645, 3248]
const strArr = ['grej', 'xce', 'feighnm', 'aejpo']
function ascending(a, b) {
  return a - b
}
function descending(a, b) {
  return b - a
}

console.log(arr.sort(ascending))
console.log(arr.sort(descending))

console.log(strArr.sort())
