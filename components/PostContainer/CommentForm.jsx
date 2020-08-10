import { useCallback } from 'react'
import { Container, Card, CardActions, CardContent, Button, TextareaAutosize } from '@material-ui/core';

import { useForm } from 'react-hook-form'
import { useAuth0 } from "@auth0/auth0-react";
import { useAccessToken } from 'lib/useAccessToken'

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

const addCodeReviewComment = (rid, data, token) => fetch(`/api/codereview/${rid}/comment`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    authorization: `bearer ${token}`
  },
  body: JSON.stringify(data)
})

const CommentForm = ({ review, value, onSubmitted }) => {
  const classes = useStyles()
  const { user } = useAuth0()
  const { accessToken } = useAccessToken()

  const { register, handleSubmit } = useForm({
    defaultValues: {
      comment: value
    }
  })

  const onSubmit = useCallback(async submission => {
    const { comment } = submission 
    const {
      name, 
      picture,    
      sub
    } = user

    const { rid } = review
    const data = {
      comment,
      contributor: {
        uid: sub,
        name,
        picture
      }
    }

    await addCodeReviewComment(rid, data, accessToken)

    onSubmitted({ rid, data })
  }, [accessToken])

  return (
    <Card className={classes.root}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent>
          <TextareaAutosize
            className="textarea"
            aria-label="minimum height" 
            rowsMin={3} 
            placeholder="Review this code"
            name="comment"
            ref={register}
          />
        </CardContent>
        <CardActions className={classes.actions}>
          <Button
            style={{ backgroundColor: 'lightgray' }}
            onClick={handleSubmit}
            type="submit"
          >
            Save comment
          </Button>
        </CardActions>
      </form>
    </Card>
  )
}

export default CommentForm;