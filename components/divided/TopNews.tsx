import React from 'react'
import { css } from '@emotion/react'
import SectionContainer from '../ui/SectionConteiner'
import { cautionColor } from '../../styles/colors'
import TextLink from '../ui/TextLink'

const TopNews: React.FC = () => {
  return (
    <SectionContainer padding={20}>
      <div css={newsStyle}>
        <p css={textStyle}>
          2022年10月1(土) 2(日)、
          <TextLink href="https://www.hakubutufes.info/">
            博物ふぇすてぃばる！
          </TextLink>
          に出展します！
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