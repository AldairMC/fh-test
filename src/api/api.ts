import axios from 'axios'
const { REACT_APP_URI } = process.env

export const getComment = async () => {
    const { data } = await axios.get(`${REACT_APP_URI}/reviews`) 
    return data
}

export const postLike = async (id: any) => {
    const { data } = await axios.post(`${REACT_APP_URI}/reviews/${id}/like`)
    return data
}

export const postDislike = async (id: any) => {
    const { data } = await axios.post(`${REACT_APP_URI}/reviews/${id}/dislike`)
    return data
}