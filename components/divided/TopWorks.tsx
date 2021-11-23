import React from 'react'
import { css } from '@emotion/react'
import SectionContainer from '../ui/SectionConteiner'
import RoundOutlineButton from '../ui/RoundOutlineButton'
import Title from '../ui/Title'
import TopCard from '../ui/TopCard'
import { WorkData } from '../../types/WorkData.type'

type Props = {
  worksData: WorkData[]
}

const TopWorks: React.FC<Props> = (props) => {
  const pickedUpWorksData = props.worksData.filter((data) => (
    data.isPickedUp === true
  ))

  return (
    <SectionContainer padding={20}>
      <Title text="グッズ" />

      {pickedUpWorksData.map((data, index) => (
        <TopCard data={data} isWorksStyle={true} key={index} />
      ))}

      <RoundOutlineButton isOuterLink={false} text="もっとみる" link="/works" />
    </SectionContainer>
  )
}



export default TopWorks