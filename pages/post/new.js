<<<<<<< HEAD:pages/NewPost.js
import * as yup from 'yup'
import Editor from '../components/editor'
=======
import Editor from '../../components/editor'
>>>>>>> b3292b6... feat(post): add creation page:pages/post/new.js
import { useForm } from 'react-hook-form'
import Layout from '../../components/Layout'
import {
  Button,
  List,
  ListItem,
  Typography,
  TextField,
  Checkbox
} from '@material-ui/core'
import { useState, useCallback } from 'react'
import * as regex from '../../utils/CommentRegex'

import languages from '@/config/languages'

import { mutate } from 'swr'
import { useAuth0 } from "@auth0/auth0-react";
import { useAccessToken } from 'lib/useAccessToken'
import { useRouter } from 'next/router'

const createCodeReview = (data, token) => fetch('/api/codereview', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    authorization: `bearer ${token}`
  },
  body: JSON.stringify(data)
})


const NewPostPage = () => {
  const { user, isAuthenticated, loginWithPopup } = useAuth0()

  if (!isAuthenticated) {
    return loginWithPopup()
  }
  const { accessToken } = useAccessToken()
  const router = useRouter()

  const [code, setCode] = useState('//write your code here!')
  const [description, setDescription] = useState('')
  const [title, setTitle] = useState('')
  const [anonymous, setAnonymous] = useState(false)
  const [language, setLanguage] = useState({
    label: 'Javascript',
    value: 'javascript',
  })

  const changeLanguage = lang => {
    setLanguage(lang)
    if (lang.value === 'python' && code === '//write your code here!') {
      setCode('#write your code here!')
    } else if (lang.value !== 'python' && code === '#write your code here!') {
      setCode('//write your code here!')
    }
  }

  const handleAnonymousChange = event => {
    setAnonymous(!!anonymous)
  }

  const handleDescriptionChange = event => {
    setDescription(event.target.value)
  }

  const handleCodeChange = newCode => {
    setCode(newCode)
    // setComments(code.match(regex[language.value]))
  }

  const { register, handleSubmit } = useForm()

  const onSubmit = useCallback(async submission => {
    const { title, description } = submission
    const {
      name, 
      picture,
      sub
    } = user

    const data = {
      title,
      language: language.value,
      description,
      code,
      anonymous,
      author: {
        uid: sub,
        name,
        picture
      }
    }

    try {
      await createCodeReview(data, accessToken)
  
      mutate('/api/codereview')
  
      router.push('/')

    } catch (e) {
      // TODO handle error case
    }
  }, [accessToken, code, anonymous])

  return (
    <Layout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <List style={{ width: '700px', marginLeft: '100px' }}>
          <ListItem>
            <Typography variant="h4" style={{ color: 'grey' }}>
              Create New Code Review
            </Typography>
          </ListItem>

          <ListItem>
            <Typography variant="h6">Title</Typography>
          </ListItem>

          <List component="div" disablePadding>
            <ListItem>
              <input
                name="title"
                type="text"
                value={title}
                onChange={event => setTitle(event.target.value)}
                rows={1}
                ref={register}
                style={{
                  fontSize: '20px',
                  fontFamily: 'sans-serif',
                  padding: '15px',
                  width: '100%',
                  resize: 'none',
                  borderRadius: '10px',
                  border: 'solid 2px grey',
                  backgroundColor: 'whitesmoke',
                  outline: 'none',
                }}
              />
            </ListItem>
          </List>

          <ListItem>
            <Typography variant="h6">Description</Typography>
          </ListItem>

          <List component="div" disablePadding>
            <ListItem>
              <textarea
                type="text"
                name="description"
                ref={register}
                value={description}
                onChange={handleDescriptionChange}
                style={{
                  fontSize: '16px',
                  fontFamily: 'sans-serif',
                  padding: '20px',
                  width: '100%',
                  resize: 'none',
                  borderRadius: '10px',
                  border: 'solid 2px grey',
                  backgroundColor: 'whitesmoke',
                  outline: 'none',
                  width: '900px',
                  height: '150px',
                }}
              />
              {/* <CodeDescriptionBox
                ref={register}
                description={description}
                handleDescriptionChange={handleDescriptionChange}
              /> */}
            </ListItem>
          </List>

          <ListItem>
            <Typography variant="h6">Code</Typography>
          </ListItem>

          <List component="div" disablePadding>
            <ListItem>
              <Editor
                language={language}
                changeLanguage={changeLanguage}
                languageOptions={languages}
                code={code}
                handleCodeChange={handleCodeChange}
              />
            </ListItem>
          </List>

          <ListItem>
            <Typography variant="h6">Do you want to share it anonymously ?</Typography>
          </ListItem>

          <List component="div" disablePadding>
            <ListItem>
              <Checkbox
                name='anonymous'
                ref={register}
                // checked={anonymous}
                value={anonymous}
                onChange={handleAnonymousChange}
                inputProps={{ 'aria-label': 'anonymous-snippet' }}
              />
            </ListItem>
          </List>

          <List>
            <ListItem style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button
                style={{ backgroundColor: 'lightgray' }}
                onClick={handleSubmit}
                type="submit"
              >
                Post
              </Button>
            </ListItem>
          </List>
        </List>
      </form>
    </Layout>
  )
}

// export default withAuthenticationRequired(NewPostPage)
export default (NewPostPage)
