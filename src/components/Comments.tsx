import "../styles/App.css";
import Comment from "./Comment";
import { IComment } from "../utils/types"

interface Props {
    comment: Array<IComment>
}

const Comments = ({ comment }: Props) => {
    return (
        <div className="comments">
            {
                comment.map(i => (
                    <Comment 
                        comment={i}
                    />
                ))
            }
        </div>
    )
}

export default Comments;