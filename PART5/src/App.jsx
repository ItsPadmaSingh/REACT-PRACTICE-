// Example - 1 (UseContext)
// import { createContext, useContext } from "react"

// const UserContext = createContext()

// const App = () => {
//   const user = 'John Doe'

//   return (
//     <>
//       <UserContext.Provider value={user}>
//          <Parent />
//       </UserContext.Provider>
//     </>
//   )
// }

// function Parent(){
//   return <Child />
// }

// function Child(){
//   const user = useContext(UserContext)
//   return(
//     <div>
//       <h2 style={{color: 'blue'}}>Name : {user}</h2>
//       <GrandChild />
//     </div>
//   )
// }

// function GrandChild(){
//   const user = useContext(UserContext)
//   return <h3>My Name is : {user}</h3>
// }

// export default App

//Example - 2 

// import { createContext, useContext } from "react"

// const UserContext = createContext()

// const App = () => {
//   const user = {name : 'John Doe', role : 'Admin'}

//   return (
//     <>
//       <UserContext.Provider value={user}>
//          <Parent />
//       </UserContext.Provider>
//     </>
//   )
// }

// function Parent(){
//   return <Child />
// }

// function Child(){
//   return(
//     <div>
//       <GrandChild />
//     </div>
//   )
// }

// function GrandChild(){
//   const {name, role} = useContext(UserContext)
//   return (
//     <>
//       <h1>Welcome {name}</h1>
//       <h3>Your Role is : {role}</h3>
//     </>  
//   )
  
// }

// export default App

//Example - 3
// import {useState} from 'react'
// import ThemeContext from "./components/ThemeContext"
// import Toolbar from "./components/Toolbar"


// const App = () => {
  
//   const [theme, setTheme] = useState('light')

//   return (
//     <>
//       <ThemeContext.Provider value={{theme, setTheme}}>
//          <Toolbar/>
//       </ThemeContext.Provider>
//     </>
//   )
// }

// export default App

//Example - 4

import { AuthProvider } from "./component2/AuthContext"
import Navbar from "./component2/Navbar"

const App = () => {

  return (
    <>
      <AuthProvider>
         <Navbar/>
      </AuthProvider>
    </>
  )
}

export default App
