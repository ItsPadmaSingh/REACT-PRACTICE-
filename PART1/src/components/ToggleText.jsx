import { useState } from "react"

const ToggleText = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
    <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide" : "Show"} Text
    </button>
    {isVisible &&  <p>This is a secret message.</p>}
    </>
  )
}

export default ToggleText

// Windows + . is used to add emojis in vs code
