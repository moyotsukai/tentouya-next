import React from 'react'
import { css } from '@emotion/react'
import SectionContainer from '../ui/SectionConteiner'
import { cautionColor } from '../../styles/colors'

const TopNews: React.FC = () => {
  return (
    <SectionContainer padding={20}>
      <div css={newsStyle}>
        <p css={textStyle}>
          2021年11月23(火)、大手町インセクトフェアに出展します！
        </p>
      </div>
    </SectionContainer>
  )
}

const newsStyle = css`
  width: 100%;
  max-width: 1000px;
  padding: 10px 15px;
  background-color: ${cautionColor};
  border-radius: 6px;
  text-align: center;
`

const textStyle = css`
  font-weight: 400;
  font-size: 12pt;
`

export default TopNews