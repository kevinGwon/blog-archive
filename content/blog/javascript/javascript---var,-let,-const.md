---
title: Javascript - var, let, const
date: 2019-12-15 22:12:93
category: javascript
---

Babel을 통하여 국내에서 ES6의 문법을 적극 활용하고 있는 시대를 걷고있습니다. Babel이 없었다면 ES5에 여전히 발목 잡혀 있는 개발자들이 많았을 것이라 생각이 듭니다. ES6이전 부터 Javascript의 개발의 길을 걷고 있다면 변수(var, let, cont)를 혼용해서 사용할 수 있다고 생각이 듭니다. 그래서 각 변수의 특징을 알아도록 하겠습니다.

##Scope

###var (function scope)

if문을 사용하여 block scope 처리 하였지만 block scope에 영향을 받지 않고 외부에서 접근이 가능합니다.

```js
(function(){
  if(true) {
    var getVariable = 'function scope';
  }
  console.log(getVariable) // function scope
});
````

함수 안에서 정의 되었기 때문에 function scope에 의해 접근이 불가능하여 variable is not defined 가 출력이 됩니다. 

```js
(function(){
  function runTest() {
    var getVariable = 'function scope';
  }
  console.log(getVariable) // Uncaught ReferenceError: variable is not defined
});
````   

###let, const (block scope)

if문의 block scope에 의해서 외부에서 변수에 접근할 수 없습니다.

```js
(function(){
  if(true) {
    let getVariable = 'function scope'; // const 동일
  }
  console.log(getVariable) // variable is not defined
});
````

block scope의 내부에서 접근이 가능하기때문에 다음과 같이 출력이 가능합니다.

```js
(function(){
  if(true) {
    let getVariable = 'function scope'; // const 동일
    console.log(getVariable) // function scope
  }
});
````
##Hoisting
Javscript에서 Hoisting이란 선언된 변수(or 함수)를 정의하면 스코프의 실행 환경에 진입하면서 미리 모든 변수(or 함수)를 찾아 실행환경 최상단에 정의하고 초기화 상태를 가지는 것 입니다. var와 let/const는 다음과 같이 다른 특징을 가집니다.

###var
```js
(function() {
  console.log(getVariable); // undefined
  var getVariable = 'kevin';
})();
````
변수를 선언하기 전에 출력문을 통해 미리 변수를 사용하니 오류가 아닌 undefiend을 출력하고 있습니다. 이는 Hoisting을 거치면서 해당 스코프의 변수를 찾아 최상단에 정의하여 undefined로 초기화 과정을 거치는데 이것이 바로 var의 특징입니다.

###let/const
```js
````

##let, const를 지향해야 하는 이유
var변수는 다음과 같은 특징을 가집니다.
- 헷갈리는 함수 레벨 스코프
- 중복 선언 가능
- 생략 가능
- 호이스팅

```js
(function() {
  function runTest() {

    getVariable = 'kevin';
  }
  runTest();
  console.log(getVariable); 
})();
```

https://medium.com/sjk5766/var-let-const-%ED%8A%B9%EC%A7%95-%EB%B0%8F-scope-335a078cec04
https://medium.com/korbit-engineering/let%EA%B3%BC-const%EB%8A%94-%ED%98%B8%EC%9D%B4%EC%8A%A4%ED%8C%85-%EB%90%A0%EA%B9%8C-72fcf2fac365