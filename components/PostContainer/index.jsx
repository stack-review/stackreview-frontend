import { Card, CardActions, CardContent } from '@material-ui/core';
import Highlight from 'react-highlight'

import AuthorAvatar from './Avatar'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column'
  },
  actions: {
    justifyContent: 'flex-end'
  }
}))

const PostContainer = ({ review, toolbar = null }) => {
    const classes = useStyles()

    return (
        <Card className={classes.root}>
            <CardContent>
                <div className="title">{review.title}</div>
<!--                 <AuthorAvatar {...review.author} />
 -->
                {review.description && (<div className="description">{review.description}</div>)}
                <div className="code" >
                    <Highlight className={review.language}>
                        {review.code}
                    </Highlight>
                </div>
            </CardContent>
            {toolbar && <CardActions className={classes.actions}>{toolbar}</CardActions>}
        </Card>
    )
}

export default PostContainer;
