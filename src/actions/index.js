import axios from 'axios'

export const FETCH_POSTS = 'fetch_posts'

const URL = 'http://reduxblog.herokuapp.com/api'
const API_KEY = '?key=silvestrevivo'

export function fetchPosts () {
  const request = axios.get(`${URL}/posts${API_KEY}`)

  return {
    type: FETCH_POSTS,
    payload: request
  }
}
