
// 01. string basic

// 백틱(``): 따옴표 안에서 엔터 출력이 가능함.
console.log(`Hello



World!`); 
// 다른 따옴표에서 엔터 출력을 하려면 \n 사용.
console.log('Hello\n\n\nWorld!')


// 한 문장에서 따옴표는 중복해서 사용이 불가하며, 여러 개의 따옴표를  써야할 경우 따옴표의 종류를 다르게 해야 한다.
console.log("how're you?");
// console.log('how're you?'); Error

// 작은 따옴표 안에서 작은 따옴표를 출력하고 싶다면 \' 사용.
console.log('how\'re you?');


// typeof: 자료의 타입을 보여준다.
console.log(typeof "문자열") //srting
console.log(typeof '') //srting
console.log(typeof '     ') //srting

console.log(typeof 0); //number
console.log(typeof '0');  //string


// ===: 같은 것인지 비교한다.
console.log(' ' === ' '); //true
console.log('' === '   '); //false 


// 01-2. 문자열을 합치는 연산자 
// + (다른 것은 사용하면 NaN 출력.)
console.log('안녕하세요. ' + '제 이름은 ' + '안다혜입니다.');


// 02. Numer basic
console.log(50000 === 5e4); //true -> 맨앞자리숫자e0의갯수
console.log(0.0005 === 5e-4); //true -> 맨끝자리숫자e-0의갯수
console.log(0b111 === 7); //true -> 앞에 0b를 붙이면 이진법
console.log(0111 === 73); //true -> 앞에 0을 붙이면 팔진법
console.log(0x1a1 === 417); //true -> 앞에 0x를 붙이면 16진법 
console.log(typeof 0x1a1); //number -> 16진법이므로.

console.log(typeof NaN); //number -> Not a Number 
console.log(typeof Infinity); //number -> 무한의 숫자


// 문자열을 숫자열로 바꾸기
console.log(Number('124')); //124

const ex1 = '124' + 5;
console.log('124' + 5); //1245 
console.log(typeof(ex1)); //string 

const ex2 = (Number('124') + 5);
console.log(Number('124') + 5); //129
console.log(typeof(ex2)); //number 

// 정수로 바꾸기, 소수로 바꾸기
console.log(parseInt('3.14')); //3
console.log(parseFloat('3.14')); //3.14

// PasreInt와 Number의 차이
console.log(parseInt('3월')); //3 -> 최대한으로 해석해서 출력 
console.log(Number('3월')); //NaN

// 2진법으로 변환하여 출력하기
console.log(111,2); //1111 2
console.log(parseInt(111,2)); //7

// 연산자
// 더하가+ 빼기- 곱하기* 나누기/
console.log(4 % 2); //0 -> 나머지값을 출력
console.log(4 ** 2); //16 -> 거듭제곱 
console.log(2 / 0); //infinity -> 무한.  
console.log(-2 / 0); //-infinity -> -무한.  

// 형 변환
// = 문자열과 다른 자료형을 더하면 다른 자료형이 문자열로 바뀐 후 문자열과 더해진다,.
console.log('string' + 0); //string0 
console.log(1 + 0); //1
console.log('1' + 0); //10

// = 문자열과 다른 자료형을 빼면 문자열의 숫자가 Number로 바뀐 후 숫자와 연산한다.
console.log('string' - 0); //NaN
console.log('3월' - 0); //NaN -> 숫자와 있는 문자열은 기본적으로 Number로 인식 
console.log('9' - 5); //4

// => 더하면 string, 빼면 number가 된다. 


// 03. 연산자 우선순위, 소수 계산 주의점
// 자바스크립트도 수학의 연산자 우선순위를 따르기 때문에 곱셈이 더하기보다 우선순위가 높다.
console.log(1 + 2 * 4); //9
// 더하기를 곱셈보다 먼저 하고 싶다면, 수학에서처럼 소괄호로 감싸준다. 소괄호도 연산자! 
console.log((1 + 2) * 4); //12

// Q. 3 ** 2 + 1을 27로 만드시오.
// -> 연산자 우선순위를 따르면 해당 답은 10. -> 답을 바꾸려면 괄호를 씌워야한다. -> 앞에 씌우냐, 뒤에 씌우냐
// A. 3 ** (2 + 1);


//자바스크립트로 정수 뿐 아니라 실수도 계산할 수 있다. 
console.log(0.5 + 0.5); //1
console.log(0.1 + 0.2); //0.30000000000000004 
console.log(0.3 - 0.1); //0.19999999999999998
// -> 컴퓨터는 0과 1밖에 모르는 이진법 친구. 이진법으로 실수를 표현하면 무한반복되는 실수가 있어서 어쩔 수 없이 근사값으로 저장한다 => 이러한 문제를 '부동소수점 문제'라고 함. 
console.log((0.3 * 10 - 0.1 * 10)/10); //0.2
// -> 이를 교정하는 가장 간단한 방법은, 실수를 정수로 바꿔서 계산한 뒤 다시 실수로 바꾸는 것. 
