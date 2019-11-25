---
title: path of svg 2차 곡선, 3차 곡선
date: 2019-11-25 17:11:55
category: html
---

path의 속성중 호를 그리기 위한 속성은 Q(Quadratic Bezier Curves), C(Cubic Bezier Curves)가 존재한다.

이 둘의 차이점은 2차 곡선(Q), 3차 곡선(C) 표현할 수 있는 차이를 가지고 있다.

- 2차 곡선(Q)은 첫번째 매개변수로 값의 호 위치를 지정
- 3차 곡선(C)은 첫번째, 두번째 매개변수로 호의 위치를 상세하게 지정

---

`Q(Quadratic Bezier Curves)`



```
<path class="path" d="M0 50 Q25 40, 50 50"/>
```

M0 50(start)

Q25 40(curve), 50 50(end)

---

`C(Cubic Bezier Curves)`

```
<path class="path" d="M20 50 C30 20, 70 20, 80 50"/>
```

M20 50(start)

C30 20(start point), 70 20(end point), 80 50(end)

---

`Q(S line)`

현재 포인트에서 x, y까지의 2차 베지어 곡선을 그린다. 시작점은 이전 곡선의 끝점과 동일하다.

```
<path class="path" d="M0 50 Q25 40, 50 50 T100 50"/>
```

T100 50(end)

---

`C(S line)`

현재 포인트에서 x, y까지의 3차 베지어 곡선을 그린다. 시작점은 이전 곡선의 끝점과 동일하다.

```
<path class="path" d="M0 50 C0 70, 50 70 50, 50 S100 30, 100 50"/>
```

S100 30(add point), 100 50(end)

---

example )

[https://codepen.io/kevinGwon/pen/jKRQyX?editors=1010](https://codepen.io/kevinGwon/pen/jKRQyX?editors=1010)
