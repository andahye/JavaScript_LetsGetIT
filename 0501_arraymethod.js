// 01. 배열 뒤에 요소 추가하기: 배열[배열.length] = '추가할 요소';
const target = ['가', '나', '다', '라', '마'];
target[target.length] = '바';
console.log(target); //['가', '나', '다', '라', '마', '바']

// 01-2. 또 다른 방법: 배열.push(추가할 요소);
const target1_2 = ['가','나', '다', '라', '마'];
target1_2.push('바');
console.log(target1_2); //['가','나', '다', '라', '마', '바']

// 02. 배열 앞에 요소 추가하기: 배열.unshift(추가할 요소);
const target2 = ['나', '다', '라', '마', '바'];
target2.unshift('가');
console.log(target2); //['가', '나', '다', '라', '마', '바'];

// 03. 배열의 요소 수정하기: 배열[바꿀인덱스] = '수정할요소';
const target3 = ['가', '나', '다', '라', '마'];
target3[3] = '카';
console.log(target3); //['가', '나', '다', '카', '마']

// 04. 배열에서 마지막 요소 제거하기: 배열.pop();
const target4 = ['가', '나', '다', '라', '마'];
target4.pop(); 
console.log(target4); //['가', '나', '다', '라']

// 05. 배열에서 첫번째 요소 제거하기: 배열.shift();
const target5 = ['가', '나', '다', '라', '마'];
target5.shift();
console.log(target5); //['나', '다', '라', '마']

// 06. 중간 요소 제거하기: 배열.splice(인덱스,갯수)
const target6 = ['가', '나', '다', '라', '마'];
target6.splice(1,1); //인덱스1(=나)로부터 1개
console.log(target6);  //['가', '다', '라', '마']

const target6_2 = ['가', '나', '다', '라', '마'];
target6_2.splice(2,2); //인덱스2(다)로부터 2개
console.log(target6_2); //['가', '나', '마']

const target6_3 = ['가', '나', '다', '라', '마'];
target6_3.splice(1); //인덱스1로부터 전부 다 지운다
console.log(target6_3); //['가']

const target6_4 = ['가', '나', '다', '라', '마'];
target6_4.splice(1, 3, '타', '파'); //인덱스1로부터 3개를 제거하고 제거한 자리에 '타' '파'를 넣는다.
console.log(target6_4); //['가', '타', '파', '마']

const target6_5 = ['가', '나', '다', '라', '마'];
target6_5.splice(2, 0, '바'); //인덱스2로부터 하나도 지우지 않고 그 자리에 '바'를 넣는다
console.log(target6_5); //['가', '나', '바', '다', '라', '마']

// 07. 배열에서 요소가 존재하는지 알아보기: 배열.includes(요소)
const target7 = ['가', '나', '다', '라', '마'];
const result = target7.includes('다');
const result2 = target7.includes('카');
console.log(result); //true
console.log(result2); //false

// 08. 배열에서 요소가 몇번째 인덱스에 위치하는지 알아보기
const target8 = ['라', '나', '다', '라', '다'];
const result3 = target8.indexOf('다');
const result4 = target8.lastIndexOf('라');
const result5 = target8.indexOf('가');
console.log(result3); //2
console.log(result4); //3
console.log(result5); //-1

//09. 배열 반복하기
const target9 = ['가', '나', '다', '라', '마'];
let i = 0;
while (i < target9.length) {
  console.log(target9[i]);
  i++;
} //가 나 다 라 마

const target9_2 = ['가', '나', '다', '라', '마'];
for (let i = 0; i < target9_2.length; i++) {
  console.log(target9_2[i]);
} //가 나 다 라 마