// 01. if: if (조건식) 동작문;
if (true) {
    console.log('Hello, if!');
} //Hello, if!
if (false) {
    console.log('Hello, if!');
} //출력X(undefined)

// 동작문이 하나 이상일 때: if (조건식) { 동작문1; 동작문2; 동작문3; }
if (true) {
    console.log('Hello, if!');
    console.log('Hello, again!');
} //Hello, if! <br> Hello, again!

let value = '사과';
    let condition = true;
        if (condition) {
            value = '바나나';
        }
        console.log(value); //바나나


// 02. else
let fruits = '망고';
let condition2 = false; //else문이 실행됨
if (condition2) {
    fruits = '멜론';
} else {
    fruits = '수박';
}
console.log(fruits); //수박


// 03. else if 
const score = 90;
    if (score >= 90) {
        console.log('A+');
    } else if (score >= 80) {
        console.log('A');
    } else if (score >= 70) {
        console.log('B+');
    } else if (score >= 60) {
        console.log('B');
    } else {
        console.log('F');
    }; //A+ 


// 04. 중첩 if문: if문 안에 if문이 들어가있는 것.
// 콜백 지옥
let first = true;
let second = false;
if (first) {
    console.log('첫번째 조건 충족!');
    if (second) {
        console.log('두번째 조건도 충족!');
    } else {
        console.log('두번째 조건은 불충족!');
    }
} else {
    console.log('첫번째 조건 불충족!');
}

// 같은 코드라도 가독성 좋게.
if(first && second) { //first, second 모두 true
    console.log('첫번째 조건 충족!');
    console.log('두번째 조건도 충족!');
} else if(first) { //first만 true
    console.log('첫번째 조건 충족!');
    console.log('두번째 조건은 불충족!');
} else { //둘 다 false
    console.log('첫번째 조건 불충족!');
}


//05. switch
// switch (조건식) { case 비교조건식: 동작문; }
// switch 옆 조건식의 값이 case값과 일치하면 해당 동작문 실행.
// 보통 조건식에 변수를 넣고, 비교조건식에는 변수와 비교할 값을 넣는다.
let StringA = 'A';
switch (StringA) {
    case 'A':
        console.log('A');
}

// else if처럼 여러 방향으로 분기 가능. case를 여러번 사용하면 된다.
let StringB = 'B';
switch (StringB) {
    case 'A':
        console.log('A');
    case 'B':
        console.log('B');
    case 'C':
        console.log('C');
} //B C => switch는 중간에 걸리면 그 밑에 있는 것까지 실행됨.

switch (StringB) {
    case 'A':
        console.log('A');
        break;
    case 'B':
        console.log('B');
        break;
    case 'C':
        console.log('C');
        break;
} // B => break를 걸어주면 밑으로 내려가지 X

// else와 동일한 default
let StringF = 'F';
switch (StringF) {
    case 'A':
        console.log('A');
        break;
    case 'B':
        console.log('B');
        break;
    case 'C':
        console.log('C');
        break;
    default:
        console.log('아무것도 일치하지 않습니다');
} //아무것도 일치하지 않습니다


// 06. if문과 switch의 비교 
let animal = '강아지';
if (animal === '강아지') {
    console.log('멍멍');
} else if (animal === '고양이') {
    console.log('야옹');
} else if (animal === '호랑이') {
    console.log('어흥');
} else { //else는 항상 마지막에 와야 한다.
    console.log('어떻게 울어요?');
} //멍멍

switch (animal) {
    default: //default가 가장 위에 있어도 된다. 
        console.log('어떻게 울어요?');
        break;
    case '강아지':
        console.log('멍멍');
        break;
    case '고양이':
        console.log('야옹');
        break;
    case '호랑이':
        console.log('어흥');
        break;
} //멍멍 