import React from 'react'
import { css } from '@emotion/react'

type Props = {
  children?: React.ReactNode
}

const SectionContainer: React.FC<Props> = (props) => {
  return (
    <div css={containerStyle}>{props.children}</div>
  )
}

const containerStyle = css`
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
  max-width: 1000px;
`

export default SectionContainer