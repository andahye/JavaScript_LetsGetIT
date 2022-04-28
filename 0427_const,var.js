// 01. 상수 만들기
// const === constant의 줄임말. 변하지 않는 수.
const value = '상수입니다';
// value = '바꿀 수 없습니다'; -> let과 달리 에러뜸!

// 02. var 
// 최근에는 거의 쓰지 않음. 그러나, 옛 코드에서 자주 발견되기 때문에 특성은 알아두자.
var variable = '다시 선언할 수 있습니다';
var variable; var variable; // 연속 선언 가능
var let ='const' // 예약어 사용 가능
// => 이처럼 나사가 하나 빠진 듯한 변수라서 최근에는 거의 사용하지 않는다. 

// Q. a와 b라는 변수에 어떠한 값이 들어있다. 두 변수의 값을 서로 바꿔라.
let a = 5;
let b = 3;
console.log(a); //5 
console.log(b); //3

let c = a;
a = b;
b = c;
console.log(a); //3
console.log(b); //5
