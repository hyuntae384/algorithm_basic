function ABCheck(str) {
  // code goes here
  // for문으로 하나씩 검사
  // 문자열 길이 초과하면 break 13 8 5
  // for문이 종료될 때가지 없으면 false
  let lowerStr = str.toLowerCase()

  for(let i=0; i<lowerStr.length - 4; i++){
    if(lowerStr[i] === 'a' && lowerStr[i+4] === 'b'){
      return true
    } else if(lowerStr[i] === 'b' && lowerStr[i+4] === 'a'){
      return true
    }
  }
  return false
}
