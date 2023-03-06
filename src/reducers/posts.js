export default  ( posts = [], action) => {
    // state and action 
    // For example, an authentication reducer can take an initial state of an application in form of an empty object and an action that tells it that a user has logged in and returned a new application state with a logged-in user.
    // if(action.type === 'CREATE'){
    //     return action;
    // }
    // so many condition we must create but it is critical so we use switch case 
    switch (action.type) {
        case 'UPDATE':
            return posts.map(post => post._id == action.payload._id ? action.payload : post);
        case 'FETCH_ALL' :
            // action.payload is actual posts , act.pay.. = data -> posts
            return action.payload;     
        case 'CREATE':
            // ... posts = before all posts
            // action.playload = newPost
            return [...posts, action.payload];
        default:
            return posts;
    }
}