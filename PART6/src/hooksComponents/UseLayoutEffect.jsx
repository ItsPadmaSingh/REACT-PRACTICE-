import {useLayoutEffect, useRef} from 'react'

const Chat = () => {
    const chatRef = useRef(null)

    useLayoutEffect(() => {
        chatRef.current.scrollTop = chatRef.current.scrollHeight
    },[])

  return (
    <div 
    ref={chatRef} 
    style={{
            height: '150px',
            border:'1px solid #ccc',
            overflowY:'scroll'
    }}>
      <p>Hello</p>
      <p>welcome to Chat</p>
      <p>How are you?</p>
      <p>Testing...</p>
      <p>Hello</p>
      <p>welcome to Chat</p>
      <p>How are you?</p>
      <p>Testing...</p>
    </div>
  )
}

export default Chat


// import {useLayoutEffect, useRef} from 'react'

// const UseLayoutEffect = () => {
//     const boxRef = useRef(null)

//     useLayoutEffect(() => {
//       const el = boxRef.current
//       const width = el.offsetWidth
//       el.style.transform = `translateX(${width}px)`
//     },[])

//   return (
//     <div 
//     ref={boxRef} 
//     style={{padding: '30px', background: 'skyblue', transition:'3s'}}>
//       Animated Box
//     </div>
//   )
// }

// export default UseLayoutEffect


// import {useState,useLayoutEffect, useRef} from 'react'

// const UseLayoutEffect = () => {
//     const boxRef = useRef(null)
//     const [height, setHeight] = useState(0)

//     useLayoutEffect(() => {
//      setHeight(boxRef.current.clientHeight)
//     },[])

//   return (
//    <> 
//     <div ref={boxRef} style={{width: '200px', padding: '20px', background: '#eee'}}>
//       Hello World! Measure Me
//     </div>
//     <p>Height : {height}</p>
//    </> 
//   )
// }

// export default UseLayoutEffect




// import { useState , useLayoutEffect, useEffect } from "react"

// const UseLayoutEffect = () => {

//  useEffect(() => {
//    console.log('UseEffect Message')
//  }, [])

//  useLayoutEffect(() => {
//    console.log('UseLayoutEffect Message')
//  }, [])

//   return (
//     <>
//       <h1>Hello Jee</h1>
//     </>
//   )
// }

// export default UseLayoutEffect
