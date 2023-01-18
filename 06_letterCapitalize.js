function letterCapitalize(str) {
  // TODO: 여기에 코드를 작성합니다.
  // 공백을 기준으로 나누고
  // 단어별 첫글자를 대문자화하고 다시 join
  // 공백이 연속된 경우는 크게 신경쓰지 않아도 됨! 
  const strArr = str.split(' ')
  let upperStr = ''
  
  for(let i=0; i<strArr.length; i++){
    if(strArr === ''){
      upperStr = upperStr + ' '
    } else {
      let firstChar = strArr[i].charAt(0)
      let restChars = strArr[i].slice(1)
      upperWord = firstChar.toUpperCase() + restChars
      upperStr = upperStr + upperWord + ' '
    }
  }
  return upperStr.slice(0,-1)
}
