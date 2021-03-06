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

export const CREATE_POST = 'create_post'

export function createPost (values, callback) {
  const request = axios.post(`${URL}/posts${API_KEY}`, values)
    .then(() => callback())

  return {
    type: CREATE_POST,
    payload: request
  }
}

export const SINGLE_POST = 'single_post'

export function singlePost (id, callback) {
  const request = axios.get(`${URL}/posts/${id}${API_KEY}`)

  return {
    type: SINGLE_POST,
    payload: request
  }
}

export const DELETE_POST = 'single_post'

export function deletePost (id, callback) {
  const request = axios.delete(`${URL}/posts/${id}${API_KEY}`)
    .then(() => callback())

  return {
    type: DELETE_POST,
    payload: request
  }
}
