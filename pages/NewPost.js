import * as yup from 'yup'
import Editor from '../components/editor'
import { useForm } from 'react-hook-form'
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
  const [errors, setErrors] = useState([])
  const [code, setCode] = useState('//write your code here!')
  const [comments, setComments] = useState([])
  const [description, setDescription] = useState('')
  const [title, setTitle] = useState('')
  const [language, setLanguage] = useState({
    label: 'Javascript',
    value: 'javascript',
  })

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

  const { register, handleSubmit } = useForm()

  let schema = yup.object().shape({
    code: yup.string().required().max(300, 'max length of code can be 300!'),
    description: yup
      .string()
      .required()
      .max(200, 'max length of description can be 200!'),
    title: yup
      .string()
      .required("Can't be blank!")
      .max(50, 'Max length of title can be 50'),
  })

  const checkSchema = () => {
    schema
      .validate({ title, code, description })
      .catch(obj => setErrors(() => obj.errors))
  }

  const onSubmit = data => {
    checkSchema()
    console.log(errors)
  }

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
                languageOptions={languageOptions}
                code={code}
                handleCodeChange={handleCodeChange}
              />
            </ListItem>
          </List>

          <List>
            <ListItem>
              {errors.map(er => (
                <ListItem
                  style={{
                    color: 'red',
                    border: 'solid 1px red',
                    margin: '5px',
                    borderRadius: '5px',
                  }}
                >
                  {er}
                </ListItem>
              ))}
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

export default NewPost
