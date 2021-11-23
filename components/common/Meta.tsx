import React from 'react'
import Head from 'next/head'

type Props = {
  title: string,
  imageUrl: string
}

const Meta: React.FC<Props> = (props) => {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="author" content="てんとうや" />
      <meta name="description" content="てんとうやのホームページ" />
      <meta name="viewport" content="width=device-width" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@tentouya64" />
      <meta name="twitter:title" content={props.title} />
      <meta name="twitter:image" content={props.imageUrl} />
      <meta name="theme-color" content="#fff" />
    </Head>
  )
}

export default Meta