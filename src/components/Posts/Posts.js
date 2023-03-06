import { CircularProgress, Grid } from '@material-ui/core';
import React from 'react'
import { useSelector } from 'react-redux';
import Post from './Post/Post';
import useStyles from './styles'

function Posts({ setCurrentId}) {
  const posts = useSelector((state) => state.posts)
  const classes = useStyles();

  // how can we get posts steps: 
  // (1) we fetch data/posts in api(index.js) from backend 
  // (2) actions -> posts.js -> we collect our all post/data from api and return/dispatch data/posts 
  // (3) reducers -> index.js(call posts.js) -> posts.js -> get a action(type, payload) -> return act.pay = means(posts[]) 
  // (4) Posts -> posts.js -> useSelector(state = global store so we access state.posts)
  console.log('posts', posts)  
  return (
    !posts.length ? <CircularProgress /> : 
          <Grid container alignItems='stretch' spacing={3}>
            
            {posts.map((post) => (
              <Grid key={post._id} item xs={12} sm={6}>
                  <Post post={post} setCurrentId={setCurrentId} />
              </Grid>
            ))}
          </Grid>
    
  )
}

export default Posts