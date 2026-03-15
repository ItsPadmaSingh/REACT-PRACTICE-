import { useState } from "react"

const LikeButton = () => {
    const [liked, setLiked] = useState(false);

  return (
    <div>
      <button onClick={() => setLiked(!liked)}>
        {liked ? "❤️ Liked" : " 🤍 Like"}
      </button>
    </div>
  )
}

export default LikeButton
