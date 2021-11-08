import React from 'react'
import { css } from '@emotion/react'
import SectionContainer from '../ui/SectionConteiner'
import Title from '../ui/Title'
import TopCard from '../ui/TopCard'

const TopFukuwarai: React.FC = () => {
  const data = {
    title: "テントウ福笑い",
    descriptionShort: "Web上で遊べるテントウムシの福笑いを作ってみました。",
    descriptionLong: "バラバラになった模様を元の位置に戻してテントウムシを完成させよう！",
    imageUrl: [
      "fukuwarai_thumbnail.jpg"
    ],
    shopLink: "/tentoufukuwarai",
    detailLink: "",
    ogpUrl: "",
    isPickedUp: true
  }

  return (
    <SectionContainer>
      <Title text="テントウ福笑い" />

      <TopCard data={data} isWorksStyle={false} />

    </SectionContainer>
  )
}

export default TopFukuwarai