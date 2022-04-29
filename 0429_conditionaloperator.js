// 01. 조건부 연산자
// 조건식 ? 참일 때 실행되는 식 : 거짓일 때 실행되는 식
// 문이 아니라 식이기 때문에 결과값이 나온다. 
let ex1 = 5 > 0 ? '참입니다' : '거짓입니다';
console.log(ex1); //참입니다 

// 조건부 연산자도 if문으로 변환 가능 하다.
let condition = true;
let ex2 = condition ? '참' : '거짓';
console.log(ex2); //참

if (condition) {
    ex2 = '참';
} else {
    ex2 = '거짓';
}
console.log(ex2); //참

// 조건부 연산자도 중첩 가능: 조건이 참인 경우
let condition1 = true;
let condition2 = false;
let ex3 = condition1 ? condition2 ? '둘 다 참' : 'condition1만 참' : 'condition1이 거짓';
let ex4 = condition1 ? (condition2 ? '둘 다 참' : 'condition1만 참') : 'condition1이 거짓';
ex3 = ex4; // => 헷갈린다면 소괄호를 적극 이용하자. 
console.log(ex3); //condition1만 참

// 조건이 거짓인 경우의 중첩 
let condition3 = false;
let condition4 = true;
let ex5 = condition1 ? 'condition1이 참' : condition2 ? 'condition2가 참' : '둘 다 거짓';
let ex6 = condition1 ? 'condition1이 참' : (condition2 ? 'condition2가 참' : '둘 다 거짓');
console.log(ex5); //condition1이 참


// Q. if문을 switch문과 조건부 연산자로 바꿔보세요.
let cond = true;

let value = cond ? '참' : '거짓';

if (cond) {
    value = '참';
} else {
    value = '거짓';
}

switch (cond) {
    case true :
        value = '참';
        break;
    case false: 
        value = '거짓';
        break;
}