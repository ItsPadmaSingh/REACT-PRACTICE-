// import React from 'react'

// const ConditionalRendering = () => {
//     const isLoggedIn = false;
//   if(isLoggedIn){
//     return <h1>Welcome User!</h1>
//   }else{
//     return <h1>Please Login!</h1>
//   }
// }

// export default ConditionalRendering

//  const ConditionalRendering = () => {
//      const isLoggedIn = false;
//      let message;

//    if(isLoggedIn){
//     message =  <h1>Welcome User!</h1>
//    }else{
//      message = <h1>Please Login!</h1>
//    }

//    return <div>{message}</div>
// }
//  export default ConditionalRendering



import '../App.css'

 const ConditionalRendering = () => {
    const isLoggedIn = true;
    const hasMessage = true;
    const isVisible = false;

    const visibility = isVisible ? 'visible' : 'invisible';

   return (
     <div> 
        {isLoggedIn ? <h1>Welcome User</h1> : <h1>Please Login</h1>}  
        {hasMessage && <p>You have new messages</p>} 
        <h1>Conditional Rendering</h1>
        <p className={visibility}>Lorem ipsum dolor sit amet.</p>
        {/* <h1>Conditional Rendering</h1>
        <p className={isVisible ? 'visible' : 'invisible'}>Lorem ipsum dolor sit amet.</p> */}
     </div>
   )
}
 export default ConditionalRendering

