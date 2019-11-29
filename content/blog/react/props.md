---
title: props
date: 2019-11-29 14:11:80
category: react
---

컴포넌트에 props를 넘겨줄때 속성명과 속성값을 다음과 같이 넘기게 됩니다.

_(같은 디렉토리에 Hello 컴포넌트가 있다는 가정하에 작성을 해보도록 하겠습니다.)_

```
import Hello from './hello';

<Hello name="Kevin" city="Seoul" />
```

위와같이 Hello 컴포넌트에 속성명과 속성값을 넘겨 주었으며 Hello 컴포넌트에서는 다음과 같이 파라미터로 데이터를 받을 수 있습니다.

```
function Hello(props) {
    return <div>
        My name is {props.name}!!! <br />
        I live in {props.city}
    </div>;
}
```

또한, props를 다음과 같이 객체로 받아올 수 있고 파라미터의 순서(객체이기 때문에)를 고려하지 않아도 됩니다. 그리고 props의 변수명을 생략할 수 있습니다.

```
function Hello({city, name}) {
    return <div>
        My name is {name}!!! <br />
        I live in {city}
    </div>;
}
```

