// 01. 변수
// 프로그램을 만들 때는 잠깐 동안 특정한 값을 저장해야 하는 상황이 자주 발생한다. 이때 사용하는 것이 변수. 변수를 사용하면 값을 저장할 수 있다. 
// let 변수이름 / = / 저장할 값;
// 선언했다 / 대입했다,할당했다 / 초기화했다
let total = 5000 + 8000 + 10000 + 9000; // > undefined 변수를 선언하면 항상 결괏값은 undefined.(콘솔 노출과는 다름) 왜 이러는지는 아직 감이 안 잡힐텐데, 하다보면 감이 잡힘... 
// => 32000을 total에 대입한다. 같다X 넣는다O 
console.log(total); //32000;


// 02. 변수 이름 짓기
let empty; //undefined. 
console.log(empty); //undefined. 값을 대입하지 않은 변수를 입력하면 undefined가 출력. 
// => undefined은 기본값의 역할을 한다. 이렇게 변수를 선언할 때 값을 대입하지 않으면 기본으로 값이 undefined가 출력.

// let empty; let empty; 
// => 같은 변수를 연속으로 두번 선언할시 에러가 뜸.

let $_ = '$과 _는 이름으로 쓸 수 있습니다. 특수한 의미가 있다거나 하는 것은 X';
let 한글 = '한글도 됩니다만, 전세계적으로 쓰는 것을 생각하여 영어로 짓는 것이 좋습니다.';
let apple2 = '숫자를 집어넣는 것도 OK';
let IAmDahye = '띄어쓰기가 안되므로, 대신 첫단어마다 대문자를 사용. camelcase라고 함.';


// 03. 변수값 수정하기
// 변수는 '변하는 숫자'라는 의미이지만, 숫자 자료형 외에도 다양한 자료형의 값을 저장한다. 여기에서 주목할 부분은 '변하는' 이다. 한번 저장한 값을 바꿀 수 있다는 뜻이다.

// 수정하는 방법: 변수명 = 새로운 값;
let change = '바꿔';
change = '모든 걸 다 바꿔';
console.log(change); //모든 걸 다 바꿔 

// 변수에 넣은 값을 비울 때: null 사용.
// *undefined은 기본값이라는 의미도 내포되어 있으므로, 의도적으로 값을 비울 때는 null을 사용하도록 하자.
let change2 = '사랑도 다 바꿔';
change2 = null;
console.log(change2); //null


// 03-2. 변수 활용
// 변수에 다른 변수 대입
let string = '나는 문자다';
let string2 = string;
console.log(string); //나는 문자다
console.log(string2); //나는 문자다

let number = 5;
number = number + 3;
console.log(number); //8

// 중복을 줄이기 위한 변수 사용
console.log('사랑하는사랑하는온곡온곡초등학교초등학교여러분여러분');
console.log('사랑하는사랑하는온곡온곡초등학교초등학교여러분여러분');
console.log('사랑하는사랑하는온곡온곡초등학교초등학교여러분여러분');
// -> 앗, 그런데 온곡초가 아니라 은곡초였다.
console.log('사랑하는사랑하는은곡은곡초등학교초등학교여러분여러분');
console.log('사랑하는사랑하는은곡은곡초등학교초등학교여러분여러분');
console.log('사랑하는사랑하는은곡은곡초등학교초등학교여러분여러분');
// -> 일일이 수정해야 되는 불편함...

let speach = '사랑하는사랑하는온곡온곡초등학교초등학교여러분여러분';
console.log(speach);
console.log(speach);
console.log(speach);
// -> 변수로 지정한 후 수정한다면?
speach = '사랑하는사랑하는은곡은곡초등학교초등학교여러분여러분'
// -> 변수의 값만 수정해주면 OK. 