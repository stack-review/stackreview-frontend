import React from 'react'
import useSWR from 'swr'

import Layout from '@/components/Layout'
import PostContainer from '@/components/PostContainer'

import { Button, List, ListItem } from "@material-ui/core";
import Link from 'next/link'

const Content = () => {
  const { data, error } = useSWR('/api/codereview')

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return (
    <List>
      {data.map(codereview => (
        <ListItem key={codereview.rid}>
          <PostContainer 
            review={codereview} 
            editable={false} 
            toolbar={
              <>
                <Button>
                  <Link href='/post/[id]' as={`/post/${codereview.rid}`} passHref>
                    <a>See code snippet</a>
                  </Link>
                </Button>
                <Button>
                  <Link href='/post/[id]/comment' as={`/post/${codereview.rid}/comment`} passHref>
                    <a>Review code snippet</a>
                  </Link>
                </Button>
              </>
            }
          />
 
        </ListItem>
      ))}
    </List>
  )
}

export const IndexPage = () => {
  
  return (
    <Layout>
      <Content />
    </Layout>
  )
}

export default IndexPage