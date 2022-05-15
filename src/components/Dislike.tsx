import { useState } from "react";
import { useMutation } from "react-query";
import { postDislike } from "../api/api";

type Props = {
  id: string
}

const Dislike = ({ id }: Props) => {
  const [ dislike, setDislike ] = useState(false)
  const { mutate } = useMutation(() => postDislike(id))

  const handleLike = () => {
    mutate()
    setDislike(!dislike)
  }

  return (
    <span onClick={handleLike}>
      {
        dislike? <i className="fa-solid fa-thumbs-down"></i> : <i className="fa-regular fa-thumbs-down"></i>
      }
    </span>
  )
}

export default Dislike;