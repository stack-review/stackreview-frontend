import React, { useState, useEffect } from 'react'
import useSWR, { mutate } from 'swr'

import Layout from '@/components/Layout'
import PostContainer from '@/components/PostContainer'
import CommentForm from '@/components/PostContainer/CommentForm'
import Comment from '@/components/PostContainer/Comment'
import { useRouter } from 'next/router'

import { fetcher } from 'lib/fetch'

import { Container, Button, List, ListItem } from "@material-ui/core";
import { useAuth0 } from "@auth0/auth0-react";
import Loader from '@/components/Loader'

import { makeStyles } from '@material-ui/core/styles';
import isEmpty from 'lodash/isEmpty'

const useStyles = makeStyles(() => ({
  section: {
    fontSize: 16,
    fontFamily: 'Courier New, Courier, monospace',
    marginTop: '2rem',
    marginBottom: '1rem'
  }
}))

const $fetch = (url, id) => fetcher(`${url}/${id}`)

const Content = ({ rid, initialData }) => {
  const classes = useStyles()

  const { user, isAuthenticated, loginWithPopup} = useAuth0() 
  const [editing, setEditing] = useState(false)
  const { data, error } = useSWR(['/api/codereview', rid], $fetch, { initialData })

  if (error) return <div>failed to load</div>
  if (!data) return (<Loader />)

  const comments = data.comments || []

  return (
    <Container maxWidth="md" >
      <List>
        <ListItem key={rid}>
          <PostContainer 
            key={rid} 
            review={data} 
            toolbar={editing ? null : (
              <Button onClick={() => {
                if (!isAuthenticated) {
                  return loginWithPopup()
                }

                setEditing(true)
              }}>
                Review code snippet
              </Button>
            )}
          />
        </ListItem>

        {editing && isAuthenticated && (
          <ListItem key='add-comment'>
            <CommentForm
              review={data}
              onSubmitted={() => {
                setEditing(false)
              }}
            />
          </ListItem>
        )}
      
        <div className={classes.section}>Review comments</div>
        {isEmpty(comments) ? 'No comments.' : comments.map(comment => (
          <ListItem key={comment.cid}>
            <Comment comment={comment} user={user} />
          </ListItem>
        ))}
      </List>
    </Container>
  )
}

export const ReviewPage = props => {
  const { query: { rid } } = useRouter()

  return (
    <Layout>
      <Content 
        rid={rid}
        initialData={props.codereview || {}}
      />
    </Layout>
  )
}

export async function getStaticProps(context) {
   try {
    // hack with PUBLIC_URL to fix issue with preview URL not found
    const codereview = await fetcher(`${process.env.VERCEL_URL || process.env.PUBLIC_URL}/api/codereview/${context.params.rid}`)
  
    return { 
      props: { 
        codereview 
      } 
    }
  } catch (e) {
    return { 
      props: {} 
    } 
  }
}

export async function getStaticPaths() {
  const { getReviewCollection } = require('@/lib/db') // node code import
  const collection = await getReviewCollection()
  const ids = await collection.find({}, { projection: { _id: 0, rid: 1 }}).toArray()

  return {
    paths: ids.map(({ rid }) => ({ params: { rid } })),
    fallback: true,
  }
}

export default ReviewPage