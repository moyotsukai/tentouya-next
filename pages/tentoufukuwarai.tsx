import React from 'react'
import { GetStaticProps } from 'next'
import { client } from '../libs/client'
import TentoufukuwaraiPage from '../components/pages/TentoufukuwaraiPage'
import Meta from '../components/common/Meta'
import { OgpData } from '../types/ogpData.type'

type Props = {
  ogpData: OgpData
}

const Tentoufukuwarai: React.FC<Props> = (props) => {
  return (
    <React.Fragment>
      <Meta title={props.ogpData.title} imageUrl={props.ogpData.ogImage.url} />
      <TentoufukuwaraiPage />
    </React.Fragment>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const metaData = await client.get({ endpoint: "meta" })
  const pageData = await metaData.meta.page.find((item) => (
    item.pageId === "tentoufukuwarai"
  ))
  const ogpData = {
    title: await pageData.title,
    ogImage: {
      url: await pageData.ogImage.url
    }
  }

  return { props: { ogpData: ogpData } }
}

export default Tentoufukuwarai