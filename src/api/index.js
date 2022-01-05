import axios from 'axios';

const API = axios.create({ baseURL: 'https://askus-doubt.herokuapp.com/' })


export const fetchPosts = () => API.get('/posts');
export const createPost = (newPost) => API.post('/posts', newPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const commentPost = (obj) => API.put('/posts/comment', obj);

export const signin = (signinValues) => API.post('/user/signin', signinValues);
export const signup = (signupValues) => API.post('/user/signup', signupValues);