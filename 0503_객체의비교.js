// 01. 객체 간의 비교 

// {} === {} false
// 새로운 객체 === (또) 새로운 객체. 
// 객체끼리는 비교하면 false가 나온다. 모양이 같다고 true라고 생각하면 안됨. 

'str' === 'str'; //true
123 === 123; //true
false === false; //true
null === null; //true
undefined === undefined; //true
// 객체가 아닌 숫자, 문자열, 불값, null, undefined는 모두 true 반환. 

const a = { name: 'andahye' };
const array = [1, 2, a];
console.log(a === array[2]); //true
// 객체는 모양이 같아도 생성할 때마다 새로운 객체가 생성된다. 따라서 같은 객체인지 비교하고 싶다면 기존 객체를 변수에 저장해두어야. 

const a2 = { name: 'andahye' };
const array2 = [1, 2, a2];
console.log(array2 === [1, 2, a2]); //false
// ===에 객체 리터럴을 만나는 순간 새로운 배열이 생성됨
// let a = 1, let b = 1은 '대입' 개념으로 결국 a===b true이나, let c = [], let d = []와 같은 객체는 각각 생성되는 것이므로 false.  


// 02. 참조(reference)와 복사(copy)
const a3 = { name: 'andahye' };
const b3 = a3; 
a3.name = 'hero';
console.log(b3.name); //hero
// 변수 b3에 a3을 대입한 상황. a3 변수의 name 속성값을 변경했는데, b변수도 같이 변경됨. 객체를 저장한 변수를 다른 변수에 대입하면 두 변수 모두 같은 객체를 저장하는 셈이 된다. a3와 b3 변수 모두 같은 객체를 저장하고 있는 것이므로 객체의 속성값을 바꾸면 변수 a3와 b3 모두 바뀌는 것처럼 보인다. 이러한 상황일 때 변수 a3과 b3가 같은 객체를 참조하고 있다고 표현. 

let c = 'andahye';
let d = c;
c = 'hero';
console.log(d); //andahye
// 그러나, 객체가 아닌 값을 변수에 저장한 경우에는 참조 관계가 생기지 않는다. 객체가 아닐 때는 별도의 메모리에 따로 저장되기 때문. 이러한 상황을 복사(copy)라고 함. 객체를 변수에 담아야 참조 관계가 생긴다는 것을 기억할 것!!


// Q. 객체 안에 객체가 있을 때, '안'값에 접근하는 방법은 무엇일까?
const andahye = {
    name: {
        first: '다혜',
        last: '안',
    },
    gender: 'F',
};
console.log(andahye.name.last);
// andahye의 속성은 name과 gender. andahye.name이 다시 객체. 