import React from 'react'
import { css } from '@emotion/react'
import TopMessage from '../divided/TopMessaeg'
import TopWorks from '../divided/TopWorks'
import Spacer from '../ui/Spacer'

const IndexPage: React.FC = () => {
  return (
    <div css={layoutStyle}>
      <Spacer y={10} />
      <TopMessage />
      <Spacer y={5} />
      <TopWorks />
    </div>
  )
}

const layoutStyle = css`
  min-height: 100vh;
`

export default IndexPage