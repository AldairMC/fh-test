import { useState } from "react"
import { useMutation } from "react-query";
import { postLike } from "../api/api";

type Props = {
    count: number
    id: string
}

const Like = ({ count, id }: Props) => {
  const [ like, setLike ] = useState(false)
  const { mutate } = useMutation(() => postLike(id))

  const handleLike = () => {
    mutate()
    setLike(!like)
  }

  return (
    <span onClick={handleLike}>
      {
        like? <i className="fa-solid fa-thumbs-up"></i> : <i className="fa-regular fa-thumbs-up"></i>
      } {count}
    </span>
  )
}

export default Like;