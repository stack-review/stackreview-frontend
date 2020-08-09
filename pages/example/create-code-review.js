import React, { useState } from 'react'
import useSWR, { mutate } from 'swr'

import Editor from '@/components/editor'


import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import { useAccessToken } from 'lib/useAccessToken'
import { fetchWithToken } from 'lib/fetch'

import Layout from '@/components/Layout'

const createCodeReview = (data, token) => fetch('/api/codereview', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    authorization: `bearer ${token}`
  },
  body: JSON.stringify(data)
})

// tet code
const random = Math.floor(100 * Math.random())
const initialState = {
  title: `Code review #${random}`,
  code: `const foo = ${random}`,
  language: 'javascript',
  anonymous: false 
}

export const CodeReviewCreationPage = () => {
  // const { data, error } = useSWR('/api/codereview')
  
  const { user } = useAuth0()
  const { accessToken } = useAccessToken()

  const [codeReview, setCodeReview] = useState(initialState)

  const {
    name, 
    picture,
    sub
  } = user

  return (
    <Layout>
      <Editor />
      <button onClick={() => {
          const data = {
            ...codeReview,
            author: {
              uid: sub,
              name,
              picture
            }
          }
          mutate(['/api/codereview', sub], data, false)
          mutate(['/api/codereview', sub], createCodeReview(data, accessToken))
        }} 
      >
        Send your review
      </button>
    </Layout>
  )
}

export default withAuthenticationRequired(CodeReviewCreationPage)