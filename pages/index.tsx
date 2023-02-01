import Head from 'next/head'

export default function Home() {
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
