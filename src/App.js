import React, { useEffect, useState } from 'react';
import { Container, AppBar, Typography, Grow, Grid, Toolbar} from '@material-ui/core';
import { useDispatch} from 'react-redux'

import { getPosts} from './actions/posts'
import memories2 from './images/memories2.png'
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './styles' 

function App() {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getPosts());
  },[currentId, dispatch])
  return (
    <Container maxwidth= 'lg' >
      

      <AppBar className={classes.appBar} position="static" color='inherit'>
      <Toolbar >
        <Typography className={classes.heading} variant='h2' align='center'>Memories</Typography>
        <img className={classes.image} src={memories2} alt="Logo" height='60' />
      </Toolbar>
    </AppBar>
      <Grow in>
        <Container>
          <Grid className={classes.mainContainer} container justify='space-between' alignItems='stretch' spacing={3}>
            <Grid item xs={12} sm={7} >
              <Posts currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4} >
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  )
}

export default App