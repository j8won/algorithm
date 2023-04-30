### 자바스크립트의 출력

- 일반적인 알고리즘 문제를 풀 때, 표준 출력으로 `console.log()`을 사용한다
- 자바스크립트 프로그래밍 언어에서는 기본적인 사칙 연산 기능을 제공한다
- 출력 시간을 단축하기 위해, 하나의 문자열에 결과를 저장한 후 한꺼번에 출력하는 것이 대게 더 빠르게 수행된다

### 자바스크립트 기본 입력 - fs 모듈

- 입력 데이터가 텍스트 파일 형태로 주어지는 경우, 파일 시스템 모듈을 사용한다
- 예를 들어 `/dev/stdin` 파일에 적힌 텍스트를 읽어오는 경우
    
    ```jsx
    let fs = require('fs');
    let input = fs.readFileSync('/dev/stdin').toString().split('\n');
    
    console.log(input);
    ```
    

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c49eff9b-e266-46bc-b731-898502d33c1f/Untitled.png)

### 자바스크립트 기본 입력 - readline 모듈

- 한 줄씩 입력을 받아서 처리해 정답을 출력할 때는 `readline` 모듈을 사용할 수 있다
    
    ```jsx
    const rl = require('readline').createInterface({
    	input: process.stdin,
    	output: propcess.stout
    });
    
    let input = [];
    rl.on('line', function(line){
    	// 콘솔 입력창에서 줄바꿈을 입력할 때마다 호출
    	input.push(line);
    }).on('close', function(){
    	// 콘솔 입력창에서 Cmd + D를 입력하면 호출 (입력의 종료)
    	console.log(input);
    	process.exit();
    });
    ```
    

### 조건문

```jsx
if (condition1) 
	statement1
else if (condition2)
	statement2
else
	statement3 
```

### for 반복문

```jsx
for (초기문; 조건문; 증감문) {
	// statement
}
```

### while 반복문

```jsx
while (조건문) {
	// 실행되는 코드
}
```

### Number와 String 형태 변환

```jsx
// Int -> String
let a = "777";
let b = Number(b);

// String -> Int
let a = 777;
let b = String(a);
```

### Array.prototype.reduce()

- 배열의 모든 원소에 대해 특정한 연산을 순차적으로 적용할 때 사용

```jsx
/*
reduce() 메서드는 배열의 각 요소에 대해 reducer 함수를 실행한 뒤 하나의 결과 반환
reducer의 형태: (accumulator, currentValue) => (반환값)
- 배열의 각 원소를 하나씩 확인하며 각 원소는 currentValue에 해당
- 반환값은 그 이후의 우너소에 대해 accumulator에 저장
*/

let data = [5, 2, 9, 8, 4];

//minValue
let minValue = data.reduce((a, b) => Math.min(a, b));

// 합계
let summary = data.reduce((a, b) => a + b);
```

### 배열 초기화

```jsx
let arr = new Array(5).fill(0);
```

### 집합 자료형

- 특정한 원소의 등장 여부를 파악할 때 효과적

```jsx
let mySet = new Set();

mySet.add(3);
mySet.add(5);

console.log(`원소의 개수: ${mySet.size}`);
console.log(`원소 5를 포함하는가? ${mySet.has(5)}`);

mySet.delete(5);
```

### 소수점 아래 특정 자리에서 반올림

```jsx
let x = 123.456;
console.log(x.toFixed(2));
```

### 이스케이프 시퀀스

- 예약 문자 혹은 특수 문자를 출력하기 위해 사용

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/76aaaed2-dcc8-4a4c-b03c-f7369e2d42ff/Untitled.png)