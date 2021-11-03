import React from 'react'
import Head from 'next/head'

const Meta: React.FC = () => {
  return (
    <Head>
      <title>てんとうや</title>
      <meta name="author" content="てんとうや" />
      <meta name="description" content="てんとうやのホームページ" />
      <meta name="viewport" content="width=device-width" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@tentouya64" />
      <meta name="twitter:title" content="てんとうや" />
      <meta name="twitter:image" content="https://tentouya.netlify.app/static/twitter_card_img.png" />
      <meta name="theme-color" content="#fff" />
    </Head>
  )
}

export default Meta