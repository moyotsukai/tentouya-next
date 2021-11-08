import React from 'react'
import { css } from '@emotion/react'
import TopMessage from '../divided/TopMessaeg'
import TopWorks from '../divided/TopWorks'
import Spacer from '../ui/Spacer'

const WorksPage: React.FC = () => {
  return (
    <div css={layoutStyle}>
      グッズ
    </div>
  )
}

const layoutStyle = css`
  min-height: 100vh;
`

export default WorksPage