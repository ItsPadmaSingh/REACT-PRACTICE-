// import React from 'react'

// const ArrayObject = () => {
//    const fruits = ['Orange', 'Guava', 'Kiwi'] 
//   return (
//     <div>
//       <h2>Fruits List</h2>
//       <ul>
//         {fruits.map((fruit,index) => (
//             <li>{index} - {fruit}</li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default ArrayObject



// const ArrayObject = () => {
//     const user = {
//         firstName: 'Padma',
//         lastName: 'Singh',
//         age:21
//     }

//     function fullName(user){
//         return user.firstName + " " + user.lastName;
//     }
//   return (
//     <div>
//         <h2>My Details</h2>
//         <p>First Name : {user.firstName}</p>
//         <p>Last Name : {user.lastName}</p>
//         <p>Age : {user.age}</p>
//         <p>Full Name : {fullName(user)}</p>
//     </div>
//   )
// }

// export default ArrayObject

const ArrayObject = () => {
    const users = [
        {firstName: 'John', lastName:'Doe', age:20},
        {firstName: 'Jane', lastName:'Doe', age:21},
        {firstName: 'Johnny', lastName:'Doe', age:19},

    ]

    function fullName(user){
        return user.firstName + " " + user.lastName;
    }

  return (
    <div>
        <h2>Customer Details</h2>
        <ul>
        {users.map((user,index) => (
           <li>{fullName(user)} is {user.age} years old!</li>
        ))}
        </ul>
    </div>
  )
}

export default ArrayObject

