type Props = {
    count: number
}

const Like = ({ count }: Props) => {
  return (
    <span>
        <i className="fa-regular fa-thumbs-up"></i> {count}
    </span>
  )
}

export default Like;