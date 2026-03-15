import { useState, useEffect } from "react"

const UseEffectHook1 = () => {
   const [count, setCount] = useState(0);

   useEffect(() => {
    console.log('Component Re-rendered');
   })

  return (
    <div>
      <h2>Count : {count}</h2>
      <button onClick={() => setCount(count+1)}>Increment</button>
    </div>
  )
}

export default UseEffectHook1
