function computeWhenDouble(interestRate) {
  // TODO: 여기에 코드를 작성합니다.
  // (100 + 이율) / 100 을 한 값을 변수에 대입
  // 해당변수를 while로 반복하면서 2보다 커질때 count 계산
  let num = 1
  let realRate = ( 100 + interestRate ) / 100
  let count = 0;

  while(num < 2){
    num = num * realRate
    count++;
  }

  return count
}
