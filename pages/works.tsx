import WorksPage from '../components/pages/WorksPage'
import { client } from '../libs/client'
import { GetStaticProps } from 'next'
import { WorkData } from '../types/WorkData.type'
import { OgpData } from '../types/ogpData.type'

type Props = {
  worksData: WorkData[],
  ogpData: OgpData
}

const Works: React.FC<Props> = (props) => {
  return (
    <WorksPage worksData={props.worksData} />
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.get({ endpoint: "works", queries: { limit: 1000 } })
  const metaData = await client.get({ endpoint: "meta" })
  const pageData = await metaData.meta.page.find((item) => (
    item.pageId === "works"
  ))
  const ogpData = {
    title: await pageData.title,
    ogImage: {
      url: await pageData.ogImage.url
    }
  }

  return { props: { worksData: data.contents, ogpData: ogpData } }
}

export default Works