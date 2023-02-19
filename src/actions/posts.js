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
        console.log(error);
    }
}