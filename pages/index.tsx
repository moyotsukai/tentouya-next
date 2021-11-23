import React from 'react'
import IndexPage from '../components/pages/IndexPage'
import { GetStaticProps } from 'next'
import { client } from '../libs/client'
import { WorkData } from '../types/WorkData.type'
import Meta from '../components/common/Meta'
import { OgpData } from '../types/ogpData.type'

type Props = {
  worksData: WorkData[],
  ogpData: OgpData
}

const Index: React.FC<Props> = (props) => {
  return (
    <React.Fragment>
      <Meta title={props.ogpData.title} imageUrl={props.ogpData.ogImage.url} />
      <IndexPage worksData={props.worksData} />
    </React.Fragment>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const worksData = await client.get({ endpoint: "works", queries: { limit: 1000 } })
  const metaData = await client.get({ endpoint: "meta" })
  const pageData = await metaData.meta.page.find((item) => (
    item.pageId === "index"
  ))
  const ogpData = {
    title: await pageData.title,
    ogImage: {
      url: await pageData.ogImage.url
    }
  }

  return { props: { worksData: worksData.contents, ogpData: ogpData } }
}

export default Index