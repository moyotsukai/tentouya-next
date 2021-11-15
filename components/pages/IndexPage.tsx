import React from 'react'
import { css } from '@emotion/react'
import TopMessage from '../divided/TopMessage'
import TopNews from '../divided/TopNews'
import TopWorks from '../divided/TopWorks'
import Spacer from '../ui/Spacer'
import TopFukuwarai from '../divided/TopFukuwarai'

const IndexPage: React.FC = () => {
  const hasNews = true

  return (
    <div css={layoutStyle}>
      <Spacer y={30} />
      <TopMessage />
      <Spacer y={1} />

      {hasNews &&
        <React.Fragment>
          <Spacer y={25} />
          < TopNews />
        </React.Fragment>
      }

      <Spacer y={50} />
      <TopWorks />

      <Spacer y={50} />
      <TopFukuwarai />
    </div>
  )
}

const layoutStyle = css`
  min-height: 100vh;
`

export default IndexPage