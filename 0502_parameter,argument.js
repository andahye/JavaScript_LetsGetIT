// 01. 매개 변수(parameter)와 인수(argument)
// 함수를 선언할 때는 parameter, 함수를 호출할 때는 argument. 헷갈리니까 외워두세요. 
// function 함수이름(parameter) { console.log(parameter) };
// 함수이름(argumnet); 

function a(w, x, y, z) {
    console.log(w, x, y, z);
    console.log(arguments);
}
// 인수 'Hello', 'Parameter', 'Argument'가 각각 w, x, y, z로 연결된다. 
// -> 짝이 없는 z는 undefined이 된다.
a('Hello', 'Parameter', 'Argument'); //Arguments(3) ['Hello', 'Parameter', 'Argument']
// -> 매개변수는 여러개일 수 있고, 꼭 인수와 짝이 맞지 않아도 된다. 

function add(x,y) {
    return x + y;
}
add(5, 3); //8
add(5, undefined); //NaN
add(5); //NaN

function b(w, x) {
    console.log(w, x);
}
b('Hello', 'Parameter', 'Argumet'); //Hello Parameter
// 매개변수보다 인수가 많을 경우, 나머지 인수는 자동으로 무시된다.


// Q. 매개변수로 x,y,z를 받아 곱한 값을 반환하는 multiply 함수를 만들어보세요. 단, 화살표 함수로 만드세요.
const multiply = (x, y, z) => { return x * y * z; }
// const multiply = (x, y, z) => x * y * z; 중괄호 옆에 바로 return이 나올 경우 생략 가능
console.log(multiply(2,3,4)); //24


// 02. 다른 변수 사용하기
// 함수 내부에서 매개변수 외에도 변수나 상수를 선언할 수도 있다. 또한 함수 바깥에 있는 변수나 상수를 사용할 수 있다. 
function minus1(x,y) {
    const a = 100;
    return (x - y) * a;
}
console.log(minus1(5,3)); //200
// 함수 안에서 상수 a를 선언한 후 return문에서 사용. 이와 같이 함수 내부에 새로운 변수나 상수를 선언해도 된다. 

const c = 100;
function minus2(x,y) {
    return (x - y) * c;
}
console.log(minus2(5,3)); //200
// 상수 c가 함수를 선언하기 전에 이미 선언되어 있고, 이를 return값에서 사용. 