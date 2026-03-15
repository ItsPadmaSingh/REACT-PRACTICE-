import { useParams } from "react-router-dom";

const User = () => {
   console.log(useParams());
   const {id} = useParams(); 
  return (
    <h2>User Profile for ID : {id}</h2>
  )
}

export default User
