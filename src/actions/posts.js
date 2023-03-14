import * as api from '../api';

export const getPosts = () => async (dispatch) => {
    // Action creator 
    // redux thunk specify an additional arrow function
    try {
        // const response = await api.fetchPosts();
        // basically data represents the post
        const { data } = await api.fetchPosts();
    
        dispatch({ type: 'FETCH_ALL', payload: data});
        // return action = dispatch(action);
    //    const action = { type: 'FETCH_ALL', payload: []}
    } catch (error) {
        console.log(error.message);
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);

        dispatch({ type: 'CREATE', payload: { data } });
    } catch (error) {
        console.log(error.message);
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    console.log(id, post);
    try {
        const { data } = await api.updatePost(id, post);

        dispatch({ type: 'UPDATE', payload: { data } });
    } catch (error) {
        console.log(error);
    }
}

export const deletePost = (id) => async (dispatch) => {
    console.log(id);
    try {
    await api.deletePost(id);

    dispatch({ type: 'DELETE', payload: id})
    } catch (error) {
        console.log(error);
    }
}

export const likePost = (id) => async (dispatch) => {
    try {
       const { data } = await api.likePost(id);

        dispatch({ type: 'UPDATE', payload: data});
    } catch (error) {
        console.log(error)
    }
}