// 01. 객체 리터럴 === 배열이나 함수가 아닌 객체
// 객체는 여러 개의 변수를 하나의 변수로 묶을 때 사용한다. 
// const 객체 = { 속성1 이름: 속성1 값 ... }
const name = '안다혜';
const year = 1991;
const month = 10;
const date = 14;
const gender = 'F'; 
// 이와 같이 '안다혜'라는 사람의 정보가 있다고 하자. 언뜻 보기에는 문제가 없는 것 같지만, 다른 사람의 정보를 추가로 표현하고 싶을 때는 문제가 생긴다. 이미 변수를 선언했으므로, 다른 사람을 표현할 때는 이 변수들을 재사용할 수 없다는 것. 

const andahye = {
    name: '안다혜',
    year: 1991,
    month: 10,
    date: 14,
    gender: 'F', 
}
// 이때, 객체를 사용하면 여러 개의 변수를 하나로 묶을 수 있다.
// * 객체는 요소의 이름을 지정하여 묶음 가능, 배열은 이름 지정 없이 묶음. 필요에 따라 쓰자.
// * 에러를 방지하기 위해 속성값 뒤에 ,를 붙여줍시다.

console.log(andahye.name); //안다혜
console.log(andahye['name']); //안다혜 -> 대괄호 안에 따옴표 필수. 실수가 많이 나서 이 방법은 추천하지X
console.log(andahye.job); //undefined -> 없는 것을 찾을 때는 undefuned 출력됨. 

const obj = { // ''로 감싸줘야 하는 경우
    bc: 'hello',
    '2bc': 'hello1', // 숫자로 시작할 때
    'c a': 'hello2', // 띄어쓰기가 있을 때
    'c-a': 'hello2', // 특수문자를 사용할 때 
}


// 02. 객체 속성 수정하기 === 변수.속성 = 값; 
andahye.date = 07;
console.log(andahye.date); //7


// 03. 객체 속성 제거하기 === delete 변수.속성;
delete andahye.year;
console.log(andahye.year); //undefined;


// * 배열과 함수가 객체인 이유. 
// 객체의 성질을 모두 다 사용할 수 있기 때문. 
function hello() {}
hello.a = 'really?';
const array = [];
array.b = 'wow';
console.log(hello.a); //really? 
console.log(array.b); //wow 
// 배열과 함수에도 속성들을 추가할 수도, 수정 및 제거할 수도 있다. 객체는 함수와 배열을 포함하는 개념이라서 {}를 사용해 만든 객체를 객체 리터럴이라고 따로 부르는 것. 
// 다만, 함수와 배열은 주로 객체 리터럴과는 다른 목적으로 사용하기에 함수와 배열에 임의 속성을 넣는 경우는 드물다. 임의 속성을 넣을 것이라면 처음부터 객체 리터럴을 사용하지 굳이 함수와 배열을 사용할 이유X (배열은 배열대로, 함수는 함수대로, 리터럴은 리터럴대로 목적에 맞게 사용해야.)


// 메서드 === 객체의 속성 값으로 함수를 넣었을 때의 속성. 객체 안에 있는 함수. 
const debug = {
    log: function(value) {
        console.log(value);
    },
};
debug.log('Hello, Method');
// log는 debug 객체의 메서드. 
// console.log와 비슷한데요? -> 지금까지 콘솔창에 결과를 출력하려고 사용했던 함수가 바로 console 객체의 log 메서드 였기 때문! console 객체와 log 메서드는 웹 브라우저가 기본으로 만들어둔 객체이므로 따로 선언하지 않아도 사용 가능. 