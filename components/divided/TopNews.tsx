import React from 'react'
import { css } from '@emotion/react'
import SectionContainer from '../ui/SectionConteiner'

const TopNews: React.FC = () => {
  return (
    <SectionContainer>
      <div css={newsStyle}>
        <p css={textStyle}>
          2021年11月23(火)、大手町インセクトフェアに出展します！
        </p>
      </div>
    </SectionContainer>
  )
}

const newsStyle = css`
  display: inline-block;
  margin: 0 auto;
  padding: 10px 15px;
  max-width: 1000px;
  background-color: #fff0c8;
  border-radius: 6px;
`

const textStyle = css`
  font-weight: 400;
  font-size: 12pt;
`

export default TopNews