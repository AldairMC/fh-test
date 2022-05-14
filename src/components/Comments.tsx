import "../styles/App.css";
import Comment from "./Comment";

interface Props {
    comment: Array<{
        firstName: string
        lastName: string
        date: string
        rate: number
        comment: string
        id: string
        likes: number
        dislikes: number
    }>
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