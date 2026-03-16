import React , { useState, useEffect, useMemo } from "react"

const Parent = () => {
   const [count, setCount] = useState(0)

   const user = useMemo(() => ({name: 'John Doe', age : 20}), [])

   console.log('Parent Rendered')

  return (
    <div>
      <h2>Parent Count : {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <Child user={user} />
    </div>
  )
}

 const Child = React.memo(({user}) =>  {
 console.log('Child Rendered')
 return <h3>User : {user.name}</h3>
})
export default Parent
