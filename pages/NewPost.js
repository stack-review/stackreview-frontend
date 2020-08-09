import { useFormik } from 'formik'
import Editor from '../components/editor'
import CodeDescriptionBox from '../components/CodeDescriptionBox'
import Layout from '../components/Layout'
import {
  Button,
  Collapse,
  List,
  ListSubheader,
  ListItem,
  ListItemText,
  Typography,
  TextField,
} from '@material-ui/core'
import { useState } from 'react'
import * as regex from '../utils/CommentRegex'

const NewPost = () => {
  const [code, setCode] = useState('//write your code here!')
  const [comments, setComments] = useState([])
  const [description, setDescription] = useState('')
  const [title, setTitle] = useState('')
  const [language, setLanguage] = useState({ label: 'C/C++', value: 'c_cpp' })

  const languageOptions = [
    { label: 'C/C++', value: 'c_cpp' },
    { label: 'Javascript', value: 'javascript' },
    { label: 'Java', value: 'java' },
    { label: 'Python', value: 'python' },
    { label: 'Go', value: 'golang' },
  ]

  const changeLanguage = lang => {
    setLanguage(lang)
    if (lang.value === 'python' && code === '//write your code here!') {
      setCode('#write your code here!')
    } else if (lang.value !== 'python' && code === '#write your code here!') {
      setCode('//write your code here!')
    }
  }

  const handleDescriptionChange = event => {
    setDescription(event.target.value)
  }

  const handleCodeChange = newCode => {
    setCode(newCode)
    setComments(code.match(regex[language.value]))
  }

  const handleSubmit = event => {
    console.log({ code, title, description, comments })
  }

  return (
    <Layout>
      <List style={{ width: '700px', marginLeft: '100px' }}>
        <ListItem>
          <Typography variant="h4" style={{ color: 'purple' }}>
            Create New Code Review
          </Typography>
        </ListItem>

        <ListItem>
          <Typography variant="h6">Title</Typography>
        </ListItem>

        <List component="div" disablePadding>
          <ListItem>
            <textarea
              value={title}
              onChange={event => setTitle(event.target.value)}
              rows={1}
              style={{
                fontSize: '14px',
                fontFamily: 'serif',
                padding: '20px',
                width: '100%',
                resize: 'none',
                borderRadius: '10px',
                border: 'none',
              }}
            />
          </ListItem>
        </List>

        <ListItem>
          <Typography variant="h6">Description</Typography>
        </ListItem>

        <List component="div" disablePadding>
          <ListItem>
            <CodeDescriptionBox
              description={description}
              handleDescriptionChange={handleDescriptionChange}
            />
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
              languageOptions={languageOptions}
              code={code}
              handleCodeChange={handleCodeChange}
            />
          </ListItem>
        </List>
        <List>
          <ListItem style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button
              style={{ backgroundColor: 'lightBlue' }}
              onClick={handleSubmit}
              type="submit"
            >
              Post
            </Button>
          </ListItem>
        </List>
      </List>
    </Layout>
  )
}

export default NewPost
