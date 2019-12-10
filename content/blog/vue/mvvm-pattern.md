---
title: Vue - mvvm pattern
date: 2019-11-25 17:11:06
category: vue
---

Vue.js 2 에서는 data에 상속된 값이 변경될 때 즉각 반응형(reactivity) 역할을 한다. MVVM 형태는 다음과 같으며 반응형 역할이 어떻게 작동 되는지 살펴보자.

형태
```
Vue.data = model (m)
↑↓
{{ Vue.attribute }}= view (v)
↑↓
Vue({ attributes}) = Vue 인스턴스
↑↓
{{ Vue.attribue }}= view (v)
↑↓
Vue.data = model (m)
```

작동원리

```
Object.defineProperty(obj, prop, descriptor)
```

Object.defineProperty 함수의 get, set 메소드가 활용된다.
- get - return으로 값을 지정한다
- set - 인자로 변경된 값을 받아 그 값을 타겟에 할당한다.

```
let obj = {},
    text = '';
let h = document.createElement('h1');

document.body.appendChild(h);
Object.defineProperty(obj, 'test', {
    get: function() {
        return text;
    },
    set: function(val) {
        text = val;
        //target
        h.innerHTML = text;
    }
});
obj.test = "kevin"
```
