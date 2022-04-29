// 01. while 반복문: 조건식이 참인 동안 반복해서 동작문을 실행
// while (조건식) 동작문;
// while (조건식) 동작문; 동작문; 동작문; -> 반복도 가능
// *무한반복문은 브라우저를 멈추게 합니다(이럴땐 창을 끄거나 Shift+Tab 눌러서 꺼주기)!

// while 문으로 Hello, while! 100번 출력하기 
let i = 0; // => 프로그래밍은 0부터 시작. 
while (i < 100) {
    console.log('Hello, while!');
    i++; // i = i + 1
} // => i는 100보다 작아야 true -> i++; i에 계속 1이 더해짐 -> i가 100보다 커지면 false가 됨 -> 멈춤! 


// 02. for 반복문
// for (시작; 조건식; 종료식) 동작문;
for (let i = 0; i < 100; i++) {
    console.log('Hello, for!');
}

// for문의 시작, 조건, 종료식은 생략할 수 있다. 
// for (;;) {} -> 무한반복(이거 실행하면 브라우저 멈춰요...!)

// Q. 1부터 100까지 출력하는 코드를 for문으로 바꿔보세요.
for (let i = 1; i < 101; i++) {
    console.log(i);
}
for (let i = 0; i < 100; i++) {
    console.log(i+1); 
}

// 다르게도 써봅시다
for (let i = 0; i < 100; i = i + 2) {
    console.log(i + 1);
}
// i == 0, i + 1 == 1,
// i == 2, i + 1 == 3,
// i == 4, i + 1 == 5,
// i == 98, i + 1 == 99,
// i == 100, 조건 false 끝 