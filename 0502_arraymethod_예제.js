// Q. 다음 배열에서 '라'를 모두 제거하세요. indexOf와 splice를 사용하세요.
// '모두'가 들어가면 반복문을 쓴다고 생각하라! 
const arr = ['가', '라', '다', '라', '마', '라'];
arr.indexOf('라'); //1 
arr.splice(1,1); //['가', '다', '라', '마', '라']
arr.indexOf('라'); //2
arr.splice(2,1); //['가', '다', '마', '라']
arr.indexOf('라'); //3
arr.splice(3,1); //['가', '다', '마']
arr.indexOf('라') //-1 => '라'가 없는 상태. 
// => 이것을 반복문으로 만들어보자. 
// -> 언제까지 반복해야할까? '라'가 있을 때까지.
// 반복문의 핵심은 조건문. 반복하고 싶을 때는 true가 되게 하고, 멈출 때는 false로 되게 해야 한다. 
// -> 실행문의 규칙을 찾아보자. 이 경우, arr.indexOf('라')가 n / arr.splice(n,1)로 n의 숫자가 동일. 이것을 실행문으로 그대로 가져간다!  

while (arr.indexOf('라') !== -1) { //반복한다 ('라'의 indexOf가 -1이 아닐때까지) 
    arr.splice(arr.indexOf('라'), 1) //splice를 실행한다('라'의 indexOf자리에서,1개) 
}
console.log(arr);

// -> 그런데, indexOf('라')가 중복되네.. 이걸 변수로 지정해서 넣어볼까? 
const arr2 = ['가', '라', '다', '라', '마', '라'];
let index = arr2.indexOf('라');
// while (index > -1) {
//     arr2.splice(index, 1)
// } 이렇게만 하면 무한반복문이 되어 멈춰버린다. 
// Why? let index = arr.indexOf('라')는 '라'의 첫번째 인덱스, 반환값이 1이다. 반복문 바깥에 위치하기 때문에 재선언을 해주지 않는 이상 index=1이므로, 계속 true가 되어 무한반복이 된다. 

while (index > -1) {
    arr2.splice(index, 1)
    index = arr2.indexOf('라');
}
console.log(arr2);
// => 반복문이 돌아가는 동안 새로운 값을 매번 할당 받을 수 있도록 index = arr.indexOf('라')를 선언해주는 것. 
