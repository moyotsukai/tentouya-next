import React from 'react'
import { css } from '@emotion/react'
import Image from 'next/image'
import SectionContainer from '../ui/SectionConteiner'
import RoundButton from '../ui/RoundButton'
import twitterImg from '../../public/images/logo/Twitter_Logo_Blue.png'

const TopMessage: React.FC = () => {
  return (
    <SectionContainer>
      <p css={textStyle}>テントウムシを中心に昆虫グッズを作っています。</p>
      <div css={imageContainer}>
        <Image src={twitterImg} width="50" height="50" css={imgStyle} />
      </div>
      <RoundButton isOuterLink={true} text="@tentouya64をフォロー" link="https://twitter.com/tentouya64?lang=ja" />
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

export default TopMessage