import { useState } from "react"

const UserProfile = () => {
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(18);

  return (
    <div>
        <h2>Name : {name}</h2>
        <h2>Age : {age}</h2>
      <button onClick={() => setName("Random")}>Change Name</button>
      <button onClick={() => setAge(age + 1)}>Change Age</button>
    </div>
  )
}

export default UserProfile
