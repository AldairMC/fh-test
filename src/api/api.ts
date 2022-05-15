import axios from 'axios'

export const getComment = async () => {
    const { data } = await axios.get("https://fithubtest.free.beeceptor.com/reviews") 
    return data
}

export const postLike = async (id: any) => {
    const { data } = await axios.post(`https://fithubtest.free.beeceptor.com/reviews/${id}/like`)
    return data
}

export const postDislike = async (id: any) => {
    const { data } = await axios.post(`https://fithubtest.free.beeceptor.com/reviews/${id}/dislike`)
    return data
}