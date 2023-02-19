import React from 'react'
import { useSelector } from 'react-redux';
import useStyles from './styles'



function Posts() {
  const posts = useSelector((state) => state.posts)
  const classes = useStyles();

  // how can we get posts steps: 
  // (1) we fetch data/posts in api(index.js) from backend 
  // (2) actions -> posts.js -> we collect our all post/data from api and return/dispatch data/posts 
  // (3) reducers -> index.js(call posts.js) -> posts.js -> get a action(type, payload) -> return act.pay = means(posts[]) 
  // (4) Posts -> posts.js -> useSelector(state = global store so we access state.posts)
  console.log('posts', posts)  
  return (
    <div>Posts</div>
  )
}

export default Posts