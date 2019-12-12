---
title: React - useReducer and dispatch context
date: 2019-12-12 14:12:27
category: react
---

useReducer와 useState는 state 상태를 관리하는 목적에서 매우 유사합니다. 다만 Setter함수에 state를 정의하는 방식이 useReducer가 더 명확하게 보입니다. useReducer와 useState의 차이점이 크게 와닿지 않을 수 있으나 useReducer와 createContext가 같이 사용될 경우 얘기가 달라지게 됩니다. useState와 useReducer의 코드를 다음과 같이 살펴보겠습니다.  
  
&nbsp;  
__useState__
```js 
import React, {useState, useCallback} from 'react';
import CreateUser from "./CreateUser";

function App() {
  
  // 새로 입력받을 정보 초기화
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });
  
  const onChange = useCallback((e) => {
    const {name, value} = e.target;
    
    // setInputs 함수에 inputs객체를 복사하여 inputs객체에 할당.
    setInputs({
      ...inputs,
      [name]: value
    });
  }, [inputs]);
  
  return (
    <>
      <CreateUser 
        username={username} 
        email={email} 
        onChange={onChange}
      />
    </>
  );
}

export default App;
```
onChange변수에 익명함수를 선언하여 Setter함수인 setInputs를 통해 state를 컨트롤 합니다. 다음으로 useReducer를 이어서 보겠습니다.  
  
&nbsp;  
__useReducer__
```js
import React, {useCallback, useReducer} from 'react';
import CreateUser from "./CreateUser";

const inputs = {
    username: '',
    email: ''
};

function reducer(state, action) {
  switch (action.type) {
      case 'CHANGE_INPUT':
      return {
          ...state,
          username: action.username,
          email: action.email
      };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, inputs);
  const {username, email} = state;
  const onChange = useCallback((e) => {
    const {name, value} = e.target;
    dispatch({
      type: 'CHANGE_INPUT',
        ...state,
        [name]: value
    });
  }, [state]);
  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
      />
    </>
  );
}

export default App;
```

useReducer는 다음과 같은 특징을 가집니다.
- useState처럼 state를 업데이트를 할 수 있으며 객체를 통해 타입을 명시하여 액션을 정의할 수 있다. 또한 상태 업데이트 로직을 컴포넌트 밖으로 분리가 가능하다.
- dispacth는 두개의 파라미터를 받는다. 첫번째 파라미터는 기존 state의 값, 두번째 파라미터는 변경 될 값(action)을 받는다.
- reducer 함수에서 반환하는 형태는 컴포넌트가 가질 새로운 상태가 된다.
- 새로운 상태를 만들때는 항상 불변성을 유지시켜준다 - return {...spread}

useReducer를 사용하기 위해 준비단계가 다소 복잡해 보인다. 또한 useState와 다를게 없이 state를 업데이트하기 위한 기능일 뿐이다.
