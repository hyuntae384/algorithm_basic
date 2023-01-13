function transformFirstAndLast(arr) {
  // TODO: 여기에 코드를 작성합니다.
  //배열에서 첫번째와 마지막 요소 리턴
  if(arr.length === 0){
    return {}
  }

  const firstWord = arr[0]
  const lastWord = arr[arr.length - 1]
  const result = {}

  result[firstWord] = lastWord

  return result
}
