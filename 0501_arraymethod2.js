// Q. 다음 배열에서 '라'를 모두 제거하라. indexOf와 splice사용.
// '모두'면 반복문이라고 생각하라!! 
const arr = ['가', '라', '다', '라', '마', '라'];
arr.indexOf('라'); //1
arr.splice(1,1); //['가', '다', '라', '마', '라'];
arr.indexOf('라'); //2
arr.splice(2,1); //['가', '다', '마', '라'];
arr.indexOf('라'); //3
arr.splice(3,1); 
console.log(arr); //['가', '다', '마']
// => 이것을 토대로 반복문을 만들어보자.

const arr2 = ['가', '라', '다', '라', '마', '라'];
while (arr2.indexOf('라') > -1) {
  arr.splice(arr2.indexOf('라'), 1);
  console.log(arr2);
}