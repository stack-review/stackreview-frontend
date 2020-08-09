import React from 'react'
import useSWR from 'swr'

import { withAuthenticationRequired } from "@auth0/auth0-react";
import { useAccessToken } from 'lib/useAccessToken'
import { fetchWithToken } from 'lib/fetch'

import Layout from '@/components/Layout'

export const LanguageListPage = () => {
  const { accessToken } = useAccessToken()

  const { data, error } = useSWR(['/api/languages', accessToken], fetchWithToken)
  
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return (
    <Layout>
      <ul>
        {data.map(language => <li key={language.value}>{language.label}</li>)}
      </ul>
    </Layout>
  )
}

export default withAuthenticationRequired(LanguageListPage)
