import React from 'react'
import { css } from '@emotion/react'
import Image from 'next/image'
import SectionContainer from '../ui/SectionConteiner'
import RoundOutlineButton from '../ui/RoundOutlineButton'
import Title from '../ui/Title'

const TopWorks: React.FC = () => {
  return (
    <SectionContainer>
      <Title text="グッズ" />
      <RoundOutlineButton isOuterLink={false} text="もっとみる" link="/works" />
    </SectionContainer>
  )
}

const textStyle = css`
  margin: 5px 0;
  font-size: 12pt;
`
const imgStyle = css`
  display: inline-block;
  vertical-align: middle;
`
const imageContainer = css`
  display: inline-block;
  vertical-align: middle;
`

export default TopWorks