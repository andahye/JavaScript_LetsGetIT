// 양쪽 값을 비교하는 연산자
console.log(5>3); //true 
console.log(3>5); //false
console.log(5>=5); //true -> 크거나 같다
console.log(5<=4); //false 

// 양쪽 값이 같은지 비교하는 연산자
console.log(5 == 5); //true 
console.log(5 == 6); //flase 

// 양쪽 값이 다른지 비교하는 연산자
console.log(5 != 6); //true 
console.log(5 != 5); //false 

// NaN과 연산자
console.log(NaN == NaN); //false 
console.log(NaN > NaN); //false 
console.log(NaN >= NaN); //false 
console.log(NaN != NaN); //true 

console.log(true > false); //true = 1 > 0

// 문자열에서의 크기 비교 
console.log('b' > 'a'); //true
console.log('ad' > 'ab'); //true
console.log('ab' > 'a'); //true

console.log('&'.charCodeAt()); //38  
console.log('a'.charCodeAt()); //97
console.log('b'.charCodeAt()); //98
// => 해당 코드의 순서에 따라 크기가 결정됨. 

// 다른 자료형끼리 크기 비교
console.log('3' < 5); //true -> 3 < 5
console.log('abc' < 5); //false -> NaN < 5
console.log('0' < true); //true -> 0 < 1

// ==와 ===의 차이 
console.log('1' == 1); //true
console.log(1 == true); //true
console.log(1 == '1'); //true

console.log('1' === 1); //false
console.log(1 === true); //false
console.log(1 === '1'); //false
console.log(1 === 1); //true
// => 값 뿐만 아니라 자료형까지도 같은지 비교. 

console.log(1 != '1'); //false 
console.log(1 !== '1'); //true
// => 자료형까지도 다른지 비교 