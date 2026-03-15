// import React from 'react'

// const Props = (props) => {
//   return (
//     <div>
//       <h2>Hello {props.name}</h2> 
//       <p>Age: {props.age}</p>
//       <p>City : {props.city}</p>
//     </div>
//   )
// }

// export default Props

{/* <></> These are called fragment div */}




 const Props = (props) => {
 //   const {name, age , city} = props;  
   const {name='Guest', age=18 , city='Unknown', hobbies} = props;  
   return (
     <div>
       <h2>Hello {name}</h2> 
       <p>Age: {age}</p>
       <p>City : {city}</p>
       <ul>
        {hobbies.map((hobby, index) =>(
            <li key={index}>{hobby}</li>
        ))}
       </ul>
     </div>
   )
 }
 export default Props


// const Props = ({name, age , city}) => {
 
//   return (
//     <div>
//       <h2>Hello {name}</h2> 
//       <p>Age: {age}</p>
//       <p>City : {city}</p>
//     </div>
//   )
// }

// export default Props
