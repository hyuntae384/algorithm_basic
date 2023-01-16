function firstCharacter(str) {
  // TODO: 여기에 코드를 작성합니다.
  // split을 이용해서 각 배열에 대입
  if(str === ''){
    return ''
  }

  let arr = str.split(' ')
  let newStr = ''

  for(let i=0; i<arr.length; i++){
    newStr = newStr + arr[i][0]
  }
  return newStr
}
