import React from 'react'
import { css } from '@emotion/react'
import Spacer from '../ui/Spacer'
import RoundButton from '../ui/RoundButton'
import SectionContainer from '../ui/SectionConteiner'

const NotFoundPage: React.FC = () => {
  return (
    <div css={layoutStyle}>
      <SectionContainer padding={20}>
        <Spacer y={50} />
        <div css={titleStyle}>404 - Page Not Found</div>
        <Spacer y={50} />
        <RoundButton isOuterLink={false} text="トップに戻る" link="/" />
      </SectionContainer>
    </div>
  )
}

const layoutStyle = css`
  min-height: 100vh;
`
const titleStyle = css`
font-size: 15pt;
font-weight: 500;
text-align: center;
`

export default NotFoundPage