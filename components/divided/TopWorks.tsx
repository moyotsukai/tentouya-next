import React from 'react'
import { css } from '@emotion/react'
import { worksData } from '../../worksData/works'
import SectionContainer from '../ui/SectionConteiner'
import RoundOutlineButton from '../ui/RoundOutlineButton'
import Title from '../ui/Title'
import TopCard from '../ui/TopCard'

const TopWorks: React.FC = () => {
  const pickedUpWorksData = worksData.filter((data) => (
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