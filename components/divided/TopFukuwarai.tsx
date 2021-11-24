import React from 'react'
import SectionContainer from '../ui/SectionConteiner'
import Title from '../ui/Title'
import TopCard from '../ui/TopCard'
import { WorkData } from '../../types/WorkData.type'

const TopFukuwarai: React.FC = () => {
  const data: WorkData = {
    workId: "tentoufukuwarai",
    title: "テントウ福笑い",
    price: "",
    category: "",
    descriptionShort: "Web上で遊べるテントウムシの福笑いを作ってみました。",
    descriptionLong: "バラバラになった模様を元の位置に戻してテントウムシを完成させよう！",
    shopLink: "/tentoufukuwarai",
    ogImage: {
      url: ""
    },
    isPickedUp: true,
    imageUrlA: {
      url: "/images/thumbnails/fukuwarai_thumbnail.jpg"
    }
  }

  return (
    <SectionContainer padding={20}>
      <Title text="テントウ福笑い" />

      <TopCard data={data} isWorksStyle={false} />

    </SectionContainer>
  )
}

export default TopFukuwarai