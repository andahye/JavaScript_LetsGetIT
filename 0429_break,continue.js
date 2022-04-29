// 03. break문으로 반복문 멈추기
let i = 0;
while (true) {
    if (i === 5) break;
    i++;
}
console.log(i); //5 


// 04. continue문으로 반복문 멈추기
while (i < 10) {
    i++;
    if (i % 2 === 0) { //2로 나눴을 때 나머지가 0인 것 === 짝수만
        continue; //출력하지 않는다(건너뛴다)
    }
    console.log(i);
} 