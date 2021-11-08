import React from 'react'
import { css } from '@emotion/react'
import TopMessage from '../divided/TopMessaeg'
import TopNews from '../divided/TopNews'
import TopWorks from '../divided/TopWorks'
import Spacer from '../ui/Spacer'
import TopFukuwarai from '../divided/TopFukuwarai'

const IndexPage: React.FC = () => {
  const hasNews = true

  return (
    <div css={layoutStyle}>
      <Spacer y={22} />
      <TopMessage />
      <Spacer y={1} />

      {hasNews &&
        < TopNews />
      }

      <Spacer y={8} />
      <TopWorks />

      <Spacer y={8} />
      <TopFukuwarai />
    </div>
  )
}

const layoutStyle = css`
  min-height: 100vh;
`

export default IndexPage