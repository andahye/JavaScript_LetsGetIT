// 01. 함수 === 일정한 동작을 수행하는 코드
// function () {}
// () => {} 이것을 '화살표 함수'라고 함.

// 01-2. 함수에 이름 붙이기 === 선언한다(declare)
// function 이름() {} ->  함수 선언문(function 뒤에 함수 이름을 넣어주는 방식)
// const 이름 = function() {}; -> 함수 표현식(상수나 변수에 대입하는 방식)
// const 이름 = () => {}; -> 함수 표현식+화살표 함수. 

// * function 이름() {} 뒤에 세미콜론 안 붙는 이유? 관습임. if, for, while, 함수선언문 뒤에는 관습적으로 붙지X

// 01-3. 함수 사용하기 === 호출한다(call)
// 함수이름(); 
function a() {
    console.log('Hello');
    console.log('Function');
}
a(); 
a(); 
a(); // //Hello <br> Fucntion <br >Hello <br> Fucntion <br >Hello <br> Fucntion
// 여러번 실행도 가능.

// 01-4. 이름이 없는 함수 === 익명 함수
// 익명 함수는 다른 곳에서 사용이 불가하다. 딱 한번 사용할 때만 사용.
// function() {}


// 02. 함수의 반환 이해하기 === return
// 함수를 실행했을 때 반환해주는 값들. return value.
function b() {
    //return undefined; <-디폴트로 생략되어 있는 상태. 즉, 함수 반환의 디폴트는 'undefined' 
}
b(); //undefined

function c() {
    return '반환값'; 
}
c(); //'반환값'

function d() {
    return 'hello';
    console.log('hi');
}
d(); //'hello'
// return은 함수를 종료시킨다. 'hello'를 반환하고 종료하였으므로, 'hi'는 출력되지 않음. 

function e() {
    if (true) { //해당 조건이 참이라면
        return; //함수가 종료된다
    }
    console.log('hello');
    // return undefined; 항상 마지막에는 return undefined이 생략되어 있음을 기억하자. 
}
// return을 직접 써주면 return값을 내가 지정하는 것이고, 그렇지 않으면 return undefined.

function f() {
    return 10;
}
console.log(f()); //10 
// 반환값도 값이므로 다른 식이나 문에 넣어 사용할 수 있다. 

function g() {
    return 10;
}
const h = g();
console.log(h); //10 
// 상수, 변수에 대입할 수도 있다. Why? 반환값도 값이므로!(하락도 락이다..반환값도 값이다...)

function i() {
    // return 1,5; -> 5만 반환됨.
    return [1, 5]; 
}
i(); //(2) [1, 5] 
// 여러개를 반환하고 싶다면 배열을 이용하자. 

function j() {
    console.log('Hello');
    return;
    console.log('Return'); 
}
j(); //Hello
// return은 함수를 종료시킨다.