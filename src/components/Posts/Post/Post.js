import { Button, Card, CardMedia, Typography } from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import React from 'react'
import useStyles from './styles'

function Post({ post }) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardMedia image={post.selectedFile} title={post.title} />
      <div className={classes.overlay}>
        <Typography variant='h6'>{post.creator}</Typography>
        <Typography variant='body2'>{moment(post.createdAt).fromNow()}</Typography>
      </div>
      <div className={classes.overlay2}>
        <Button style={{ color: "white" }} size='small' onClick={() => { }}>
        
        </Button>
      </div>
    </Card>
  )
}

export default Post