import "../styles/App.css";
import { convertDate } from '../utils/helper';
import ReactStars from 'react-stars'

import Like from './Like';
import Dislike from './Dislike';

interface Props {
    comment: {
        firstName: string
        lastName: string
        date: string
        rate: number
        comment: string
        id: string
        likes: number
        dislikes: number
    }
}

const Comment = ({ comment }: Props) => {
    return (
        <div className="comment">
            <div className="comment_name_date">
                <div className="comment_name">{comment.firstName} {comment.lastName}</div>
                <div className="comment_date">{convertDate(comment.date)}</div>
            </div>
            <div className="comment_verify">
                <span>Comprador Verficado <i className="fa-regular fa-circle-check"></i></span>
            </div>
            <div className="comment_rate">
                <ReactStars
                    count={5}
                    size={20}
                    value={comment.rate}
                    color2={'#5eb3df'}
                />
            </div>
            <div className="comment_description">
                <span>{comment.comment}</span>
            </div>
            <div className="comment_like_dislike">
                <div className="__like">
                    <Like 
                        count={comment.likes}
                    />
                </div>
                <div className="__dislike">
                    <Dislike />
                </div>
            </div>
        </div>
    )
}

export default Comment;