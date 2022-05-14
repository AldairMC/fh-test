import axios from 'axios'

// interface Comment {
//     items: {
//         firstName: string
//         lastName: string
//         date: string
//         rate: number
//         comment: string
//         id: string
//         likes: number
//         dislikes: number
//     }[]
//     count: number
//     averageRate: number
//     prevPage: null
//     nextPage: string
// }

export const get_Comment = async () => {
    const { data } = await axios.get("https://fithubtest.free.beeceptor.com/reviews") 
    return data
}