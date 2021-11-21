import FukuwaraiPage from '../../components/pages/FukuwaraiPage'
import { GetStaticPaths, GetStaticProps } from 'next'
import { fukuwaraiData } from '../../worksData/fukuwaraiData'
import { Fukuwarai } from '../../types/Fukuwarai.type'

type Props = {
  data: Fukuwarai
}

const fukuwarai: React.FC<Props> = ({ data }) => {
  return (
    <FukuwaraiPage data={data} />
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

  return { props: { data } }
}

export default fukuwarai