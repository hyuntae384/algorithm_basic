function firstReverse(str) {
  // TODO: 여기에 코드를 작성합니다.
    const strArr = str.split('')
    let reverseStr = ''
  
    for(let i = strArr.length - 1; i>=0; i--){
      reverseStr = reverseStr + strArr[i]
    }
  
    return reverseStr
  }
  