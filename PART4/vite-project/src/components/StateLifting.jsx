import { useState } from "react"

function Parent(){
 const [text, setText] = useState('')

 return (
    <div>
        <InputBox onChange={setText} />
        <h3>Typed : {text}</h3>
    </div>
 )
}

function InputBox({onChange}){
 return <input type="text" onChange={(e) => onChange(e.target.value)}/>
}

const StateLifting = () => {
  return (
    <div>
      <Parent />
    </div>
  )
}

export default StateLifting
