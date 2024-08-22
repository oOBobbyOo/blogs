---
title: React Hook
date: 2024-08-21T02:50:00.000+00:00
lang: zh
duration: 10min
art: particles
---

## useState

> [useState](https://react.dev/reference/react/useState)：用来声明状态变量。可以在函数组件中使用 state，而不需要编写类组件。

```jsx
const [state, setState] = useState(initialState)

// or
const [state, setState] = useState(() => initialState)
```

## useEffect

> [useEffect](https://react.dev/reference/react/useEffect)：用来处理副作用（side effects），如数据获取、订阅、或手动更改 React 组件中的 DOM。

```jsx
useEffect(() => {
  // 在组件挂载后执行
  return () => {
    // 在组件卸载前执行
  }
}, [dependencies])
```

## useCallback

> [useCallback](https://react.dev/reference/react/useCallback)：用来缓存函数，避免每次渲染时都创建新的函数实例。

```jsx
const memoizedCallback = useCallback(() => {
  doSomething(a, b)
}, [a, b])
```

## useMemo

> [useMemo](https://react.dev/reference/react/useMemo)：用来缓存计算结果，避免每次渲染时都重新计算。

```jsx
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b])
```

## useRef

> [useRef](https://react.dev/reference/react/useRef)：用来创建一个可变的 ref 对象，其 .current 属性被初始化为传入的参数（initialValue）。返回的 ref 对象将在组件的整个生命周期内保持不变。通常用于存储对 DOM 元素或其他任意值的引用，而不会触发组件重新渲染。

```jsx
const refContainer = useRef(initialValue)
```

## useImperativeHandel

> [useImperativeHandle](https://react.dev/reference/react/useImperativeHandle)：用来自定义暴露给父组件的实例值。通常与 forwardRef 一起使用。

```jsx
useImperativeHandle(ref, () => ({
  focus: () => {
    ref.current.focus()
  }
}), [dependencies])
```

## useLayoutEffect

> [useLayoutEffect](https://react.dev/reference/react/useLayoutEffect)：用来在所有 DOM 变更后同步调用 effect。在浏览器绘制之前，useLayoutEffect 内部的更新计划将被同步刷新。

```jsx
useLayoutEffect(() => {
  // 在所有 DOM 变更后同步调用 effect
  return () => {
    // 在组件卸载前执行
  }
}, [dependencies])
```

## useContext

> [useContext](https://react.dev/reference/react/useContext)：用来在函数组件中订阅 React context。

```jsx
const value = useContext(MyContext)
```

## useReducer

> [useReducer](https://react.dev/reference/react/useReducer)：用来管理复杂的状态逻辑，类似于 Redux 的 reducer。

```tsx
interface IState {
  count: number
}

interface IAction {
  type: 'increment' | 'decrement'
  payload: number
}

const initialState: IState = { count: 0 }

function reducer(state: IState, action: IAction) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + action.payload }
    case 'decrement':
      return { count: state.count - action.payload }
    default:
      return state
  }
}

const [state, dispatch] = useReducer(reducer, initialState)
```

## useDebugValue

> [useDebugValue](https://react.dev/reference/react/useDebugValue)：用来在 React 开发者工具中显示自定义 hook 的标签。

```jsx
useDebugValue(value)
```

## useDeferredValue

> [useDeferredValue](https://react.dev/reference/react/useDeferredValue)：用来创建一个延迟更新的值，当渲染优先级较低时，该值会延迟更新。

```jsx
const deferredValue = useDeferredValue(value)
```

## useTransition

> [useTransition](https://react.dev/reference/react/useTransition)：用来创建一个过渡状态，当渲染优先级较低时，该状态会延迟更新。

```jsx
const [isPending, startTransition] = useTransition()
```

## useId

> [useId](https://react.dev/reference/react/useId)：用来生成一个稳定的 ID，可以在服务器端和客户端之间保持一致。

```jsx
const id = useId()
```

## useSyncExternalStore

> [useSyncExternalStore](https://react.dev/reference/react/useSyncExternalStore)：用来订阅外部存储，并在存储更新时同步更新组件。

```jsx
const state = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
```

## useInsertionEffect

> [useInsertionEffect](https://react.dev/reference/react/useInsertionEffect)：主要是解决 CSS-in-JS 在渲染中注入样式的性能问题。useInsertionEffect 执行 -> useLayoutEffect 执行 -> useEffect 执行，可以看到 useInsertionEffect 执行时机要比 useLayoutEffect 提前，useLayoutEffect 执行的时候 DOM 已经更新了，但是在 useInsertionEffect 的执行的时候，DOM 还没有更新。

```jsx
useInsertionEffect(() => {
  // ... inject <style> tags here ...
}, [dependencies])
```

## useOptimistic

> [useOptimistic](https://react.dev/reference/react/useOptimistic)：用来创建一个乐观更新状态，当渲染优先级较低时，该状态会延迟更新。

```jsx
const optimisticValue = useOptimistic(value, dependencies)
```

## useActionState

> [useActionState](https://react.dev/reference/react/useActionState)：用来创建一个可变的 action 状态，可以用来处理异步操作。

```jsx
const [state, formAction] = useActionState(fn, initialState, permalink)
```

## 自定义 Hook

> 自定义 Hook 是一个函数，其名称以 “use” 开头，可以调用其他的 Hook。

```jsx
function useCustomHook() {
  // 自定义 Hook 的逻辑
}
```
