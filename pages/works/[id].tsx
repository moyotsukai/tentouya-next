import DetailPage from '../../components/pages/DetailPage'
import { GetStaticPaths, GetStaticProps } from 'next'
import { worksData } from '../../worksData/works'
import { Work } from '../../types/Work.type'

type Props = {
  data: Work
}

const Detail: React.FC<Props> = ({ data }) => {
  return (
    <DetailPage data={data} />
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = worksData.map((data) => (
    { params: { id: data.id } }
  ))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const data = worksData.find((data) => (
    data.id === params.id
  ))

  return { props: { data } }
}

export default Detail