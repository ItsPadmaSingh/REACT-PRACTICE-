import { useState, useCallback} from "react"
import Child from "./Child" 

const Parent = () => {
    const [count, setCount] = useState(0)

    const handleClick = useCallback(() => {
        console.log('Button Clicked')
    },[count])

  return (
    <div>
      <h2>Count : {count}</h2>
      <button onClick={() => setCount(count+1)}>Parent Button</button>
      <Child click = {handleClick} />
    </div>
  )
}


export default Parent


// import { useState, useCallback} from "react"

// const UseCallbackHook = () => {
//     const [count, setCount] = useState(0)

//     const increment = useCallback(() => {
//         setCount((prev) => prev + 1)
//     },[])

//   return (
//     <div>
//       <h2>Count : {count}</h2>
//       <button onClick={increment}>Increase</button>
//     </div>
//   )
// }

// export default UseCallbackHook
