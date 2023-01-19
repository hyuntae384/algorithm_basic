function convertListToObject(arr) {
  // TODO: 여기에 코드를 작성합니다.
  // 새로운 객체을 만들고
  // for문으로 돌아가면서 먼저 새로운 객체에 해당 키 값이 있는지 검사(if)
  // 있으면 넘어가고 없으면 새로운 키,값의 객체 형태로 데이터 추가
  const newObject = {}

  for(let el of arr){
    if(el[0] in newObject || el.length === 0){
      continue
    } else {
      newObject[el[0]] = el[1]
    }
    
  }

  return newObject

}
