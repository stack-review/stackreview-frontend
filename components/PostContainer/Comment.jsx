import { Card, CardActions, CardContent } from '@material-ui/core';
import Highlight from 'react-highlight'

import { makeStyles } from '@material-ui/core/styles';

import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Tooltip from '@material-ui/core/Tooltip';

import AuthorAvatar from './Avatar'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column'
  },
  buttons: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  actions: {
    justifyContent: 'flex-end'
  }
}));

const Comment = ({ comment, user }) => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardContent>
        <AuthorAvatar {...comment.contributor} />

        <div className="code" >
          <Highlight className='text'>
            {comment.comment}
          </Highlight>
        </div>
      </CardContent>
        
      <CardActions className={classes.actions}>
        {user && user.sub === comment.contributor.uid && (
          <div className={classes.buttons}>
            <Tooltip title="TODO : an user should delete its own comments">
              <IconButton aria-label="delete" disabled color="primary" size="small">
                <DeleteIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="TODO : an user should edit its own comments">
              <IconButton aria-label="edit" disabled color="primary" size="small">
                <EditIcon />
              </IconButton>
            </Tooltip>
          </div>
        )}
      </CardActions>
    </Card>
  )
}

export default Comment;