import Head from 'next/head'
import { getAllPosts } from '../lib/api'
import type { Post } from '../types'

type Props = {
  allPosts: Post[]
}

export default function Home({ allPosts }: Props) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)

  return (
    <>
      <Head>
        <title>Coffey Talk</title>
        <meta
          name='description'
          content="I'm a full-stack developer from the United States. I love building new things and writing about them."
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <h1 className='text-5xl'>My Blog</h1>
      </main>
    </>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt'
  ])

  return {
    props: { allPosts }
  }
}
