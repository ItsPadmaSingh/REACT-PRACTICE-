import { useState, useEffect } from "react"

const UseEffectHook3 = () => {
   const [count, setCount] = useState(0);
   const [name , setName] = useState('Max');

   useEffect(() => {
    console.log('Component Re-rendered');
   },[count, name])

  return (
    <div>
      <h2>Count : {count}</h2>
      <button onClick={() => setCount(count+1)}>Increment</button>
      <h4>Name: {name}</h4>
      <button onClick={() => setName('John')}>Change Name</button>
    </div>
  )
}

export default UseEffectHook3