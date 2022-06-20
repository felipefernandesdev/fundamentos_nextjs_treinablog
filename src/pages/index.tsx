import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import useIndex from '../data/Hooks/pages/useIndex.page'
import PostList from '../ui/components/PostList/PostList'
import styles from '../ui/styles/Home.module.css'

const Home: NextPage = () => {
  const { posts } = useIndex();

  return (   
    <div>
      <Head>
        <title>TreinaBlog - NextJS Fundamentos</title>
      </Head>
      <main>
        <PostList posts={ posts } />
      </main>
      </div>      
  )
}

export default Home
