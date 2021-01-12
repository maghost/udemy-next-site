import Head from 'next/head'

// COMPONENTS
import Header from '@components/Header'
import Navigation from '@components/Navigation'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navigation />
        <Header />
      </main>
    </>
  )
}
