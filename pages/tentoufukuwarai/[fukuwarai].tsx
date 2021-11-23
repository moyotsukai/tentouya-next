import React from 'react'
import { client } from '../../libs/client'
import FukuwaraiPage from '../../components/pages/FukuwaraiPage'
import { GetStaticPaths, GetStaticProps } from 'next'
import { fukuwaraiData } from '../../worksData/fukuwaraiData'
import { Fukuwarai } from '../../types/Fukuwarai.type'
import { OgpData } from '../../types/ogpData.type'
import Meta from '../../components/common/Meta'

type Props = {
  fukuwaraiData: Fukuwarai,
  ogpData: OgpData
}

const fukuwarai: React.FC<Props> = (props) => {
  return (
    <React.Fragment>
      <Meta title={props.ogpData.title} imageUrl={props.ogpData.ogImage.url} />
      <FukuwaraiPage data={props.fukuwaraiData} />
    </React.Fragment>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = fukuwaraiData.map((data) => (
    { params: { fukuwarai: data.id } }
  ))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const data = fukuwaraiData.find((data) => (
    data.id === params.fukuwarai
  ))
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

  return { props: { fukuwaraiData: data, ogpData: ogpData } }
}

export default fukuwarai