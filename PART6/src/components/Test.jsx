import { useReducer } from "react"

const Test = () => {
    const [checked, toggle] = useReducer((checked) => !checked, false)
  return (
    <div>
      <input type="checkbox" checked={checked} 
      onChange={toggle}/>

      {checked ? 'checked' : 'not checked'}
    </div>
  )
}

export default Test


// import { useState } from "react"


// const Test = () => {
//     const [checked, setChecked] = useState(false)
//   return (
//     <div>
//       <input type="checkbox" checked={checked} 
//       onChange={() => setChecked(!checked)}/>

//       {checked ? 'checked' : 'not checked'}
//     </div>
//   )
// }

// export default Test
