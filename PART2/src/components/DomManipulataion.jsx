import { useState, useEffect } from "react"

const DomManipulation = () => {
   const [count, setCount] = useState(0);

   useEffect(() => {
    document.title = `Count : ${count}`;
    console.log('Component Re-rendered');
   },[count])

  return (
    <div>
      <h2>Count : {count}</h2>
      <button onClick={() => setCount(count+1)}>Increment</button>
    </div>
  )
}

export default DomManipulation