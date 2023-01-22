function convertDoubleSpaceToSingle(str) {
  // TODO: 여기에 코드를 작성합니다.
  // split으로 배열로 나눈 후 
  // 해당 배열에서 ''값을 탐색 후 제거
  //join으로 다시 붙인다.

  let strArr = str.split(' ')
  
  for(let i=0; i<strArr.length; i++){
    if(strArr[i] === ''){
      strArr.splice(i,1)
    }
  }
  return strArr.join(' ')
}
