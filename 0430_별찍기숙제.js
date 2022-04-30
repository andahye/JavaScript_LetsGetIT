
// Q. * -> *****까지 별찍기
for(let i = 0; i < 5; i++) {
  console.log('*'.repeat(i + 1)) // 어쩌구.repeat() => 어쩌구반복 
}
console.log('밑줄');

// Q. ***** -> *까지 별찍기
for(let i = 5; i > 0; i-=1) {
  console.log('*'.repeat(i))
}
for(let i = 5; i >= 1; i--) {
  console.log('*'.repeat(i))
}
console.log('밑줄');

// Q. 역순별을 i=0으로 해서 찍기
for(let i = 0; i < 5; i++) {
  console.log('*'.repeat(5 - i))
}
// 0 5 => 5-0 5
// 1 4 => 5-1 4
// 2 3 => 5-2 3
// 3 2 => 5-3 2
// 4 1 => 5-4 1
console.log('밑줄');

// Q. 1,3,5,7,9 별찍기
for(let i = 0; i < 10; i++) {
  if(i % 2 === 0) continue;
  console.log('*'.repeat(i))
}
console.log('밑줄');

// Q. 홀수 역순 별찍기
for(let i = 0; i < 10; i++) {
  if(i % 2 === 0) continue; 
  console.log('*'.repeat(9 - i))
}
console.log('밑줄');

// Q. 앞에 공백이 있는 역순 별찍기 
for(let i = 0; i < 5; i++) {
  console.log(' '.repeat(i), '*'.repeat(5 - i))
}
console.log('밑줄');

// Q. 앞에 공백이 있는 별찍기
for(let i = 0; i <= 5; i++) {
  console.log(' '.repeat(5 - i), '*'.repeat(i))
}
console.log('밑줄');

// Q. 크리스마스 트리 별찍기
for(let i = 0; i <= 9; i++) {
  if(i % 2 === 0) continue; 
  console.log(' '.repeat((9 - i) / 2), '*'.repeat(i))
}
// 공백의 수는 4 3 2 1. 9와 연관지어 수식을 만들어 완성한다.