---
title: useCreation

group:
  title: Advance
nav:
  title: '自定义hooks'
  path: /hooks
 
---

 # useCreation
  >[详细源码解析](https://www.yuque.com/wuchanongmo/wseknh/lvgdvy)
 `useCreation` 是 `useMemo` 或 `useRef` 的替代品。

 因为 `useMemo` 不能保证被memo的值一定不会被重计算，而 `useCreation` 可以保证这一点。

 相比于 `useRef`，你可以使用 `useCreation` 创建一些常量，这些常量和 `useRef` 创建出来的 ref 有很多使用场景
上的相似，但对于复杂常量的创建，`useRef` 却容易出现潜在的性能隐患。

 ```javascript
const a = useRef(new Subject()) // 每次重渲染，都会执行实例化Subject的过程，即便这个实例立刻就被扔掉>了
const b = useCreation(() => new Subject(), []) // 通过factory函数，可以避免性能隐患
```

 ## 代码演示

 <code src="./demo/demo1.tsx" />

 ## API

 ```javascript
function useCreation<T>(factory: () => T, deps: any[]): T ;
```
 ### 参数
 | 参数    | 说明                                         | 类型                   | 默认值 |
|---------|----------------------------------------------|------------------------|--------|
| factory | 用来创建所需对象的函数  | () => (void ) | () => void \| undefined | -      |
| deps | 传入依赖变化的对象  | array \| undefined | -      |