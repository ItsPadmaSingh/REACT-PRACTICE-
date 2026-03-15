import { useState } from "react"

function Parent(){
 const [text, setText] = useState('')

 return (
    <div>
        <InputBox onChange={setText} />
        <Display value={text} />
    </div>
 )
}

function InputBox({onChange}){
  return <input type="text" onChange={(e) => onChange(e.target.value)}/>
}

function Display({value}){
 return <h3>Typed : {text}</h3>
}


const SharedState = () => {
  return (
    <div>
      <Parent />
    </div>
  )
}

export default SharedState

