// 01. 중첩 반복문: 반복문 안에 반복문이 들어있는 경우
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(i,j);
    }
}
// i==0 j==0 console.log(0,0);
// i==0 j==1 console.log(0,1);
// i==0 j==2 console.log(0,2);
// i==0 j==9 console.log(0,9);
// i==0 j==10 조건X
// i==1 j==0 console.log(1,0);
// i==1 j==9 console.log(1,9);
// i==1 j==10 조건X

for (let i = 0; i < 5; i++) {
    if (i % 2 === 0) continue;
    for (let j = 0; j < 5; j++) {
        if (j % 2 === 0) continue;
        for (let k = 0; k < 5; k++) {
            if (k % 2 === 0) continue;
            console.log(i, j ,k);
        }
    }
}
// i==0 continue
// i==0 j==0 continue
// i==1 j==1 k==0 continue
// i==1 j==1 k==1 console.log(1,1,1)
// i==1 j==1 k==2 continue
// i==1 j==1 k==3 console.log(1,1,3)
// i==1 j==1 k==4 continue
// i==1 j==1 k==5 조건X
// i==1 j==2 continue
// i==1 j==3 k==0 continue
// i==1 j==3 k==1 console.log(1,3,1)


// Q. 구구단을 출력하되, 결과에 짝수가 하나도 나오지 않게 해보세요. 
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) continue;
    for (let j = 0; j < 10; j++) {
        if (j % 2 === 0) continue;
        console.log(i,j,i*j);
    }
}

// for(let i = 0; i < 10; i++) {
//     for(let j = 0; j < 10; j++) {
//         if(i % 2 === 0 || j % 2 === 0) continue;
//         console.log(i, j, i * j)
//     }
// }

// for (let i = 0; i < 10; i = i + 2) {
//     for (let j = 0; j < 10; j = j + 2) {
//         console.log(i,j,i*j);
//     }
// }

// for (let i = 0; i < 10; i += 2) {
//     for (let j = 0; j < 10; j += 2) {
//         console.log(i,j,i*j);
//     }
// }

// => 모두 같은 결과