import DetailPage from '../../components/pages/DetailPage'
import { GetStaticPaths, GetStaticProps } from 'next'
import { client } from '../../libs/client'
import { WorkData } from '../../types/WorkData.type'

type Props = {
  workData: WorkData
}

const Detail: React.FC<Props> = (props) => {
  return (
    <DetailPage data={props.workData} />
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.get({ endpoint: "works", queries: { limit: 1000 } })
  const paths = data.contents.map((item: WorkData) => (
    { params: { id: item.workId } }
  ))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const data = await client.get({ endpoint: "works", queries: { limit: 1000 } })
  const workData = data.contents.find((item: WorkData) => (
    item.workId === params.id
  ))

  return { props: { workData } }
}

export default Detail