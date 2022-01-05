import * as api from '../api';

export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        // console.log(data);
        dispatch({ type: 'FETCH_ALL', payload: data });
    }
    catch (err) {
        console.log(err.message)
    }
}

export const createPost = (post) => async (dispatch) => {
    try {

        const { data } = await api.createPost(post);

        dispatch({ type: 'CREATE', payload: data });
    }
    catch (err) {
        console.log(err.message)
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {

        const { data } = await api.deletePost(id);

        dispatch({ type: 'FETCH_ALL', payload: data });
    }
    catch (err) {
        console.log(err.message)
    }
}

export const sendcomment = (obj) => async (dispatch) => {
    try {

        const { data } = await api.commentPost(obj);

        dispatch({ type: 'FETCH_ALL', payload: data });
    }
    catch (err) {
        console.log(err.message)
    }
}