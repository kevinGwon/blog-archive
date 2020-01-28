import React from 'react'
import { Layout } from '../layout'
import { Profile } from '../components/profile'

function Home(props) {
  return (
    <Layout {...props}>
      <Profile />
    </Layout>
  )
}

export default Home
