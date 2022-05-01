// 00. 객체
// 자료형의 일종으로, 다양한 값을 모아둔 또 다른 값. 
// 배열(array), 함수(function), 배열이나 함수가 아닌 객체.


// 01. 배열(array)
const apple = '사과'; 
const orange = '오렌지'; 
const pear = '배'; 
const strawberry = '딸기';
// 모든 과일에 변수 이름을 붙이는 건 번거로움. 이런 경우, 배열을 사용해 값들을 하나로 묶는다. 
const fruits = ['사과', '오렌지', '배', '딸기'];
console.log(fruits[0]); //사과 
console.log(fruits[1]); //오렌지
console.log(fruits[2]); //배
console.log(fruits[3]); //딸기
// => 배열 내부의 값을 개별적으로 불러올 수도 있다.

const arrayOfArray = [[1, 2, 3], [4, 5]];
console.log(arrayOfArray[0]); //[1,2,3]

const a = 10;
const b = 20;
const variableArray = [a, b, 30];
console.log(variableArray[1]); //20

const everything = ['사과', 1, undefined, true, '배열', null]; // => 빈값도 유효하므로 개수에 포함
const duplicated = ['가', '가', '가', '가', '가']; // => 중복OK
const empty = []; // => 아무 값이 없어도 OK

// 배열의 요소 개수를 활용하여 원하는 인덱스의 요소 찾기
const emptyValue = [null, undefined, false, '', NaN];
console.log(emptyValue[4]); //NaN
console.log(emptyValue.length); //5 
// => NaN의 index는 4, 요소의 개수는 5. 배열의 요소 개수에서 1을 빼면 마지막 요소의 인덱스가 된다. 이를 활용하여 마지막 요소의 값을 찾을 수 있다.
const findLastElement = ['a', 'b', 'c', 'd', 'e'];
console.log(findLastElement[findLastElement.length - 1]); //e

// Q. arr라는 배열이 있을 때 배열의 마지막에서 세번째 요소를 찾아라.
const arr = [1,2,3,4,5];
console.log(arr[arr.length - 3]);

// * const인데 수정 가능한 이유?
// const에 객체가 대입된 경우, 객체 내부의 속성이나 배열의 요소는 수정 가능하다.
const target4 = ['a', 'b', 'c', 'd', 'e'];
// target4 = ['f', 'g']; 불가능.
target4[0] = 'h'; // 가능.
console.log(target4); //['h', 'b', 'c', 'd', 'e']
// => const는 선언 이후 =를 쓸 수 없다. 단, 객체 내부에는 사용 가능하다.

