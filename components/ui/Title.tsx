import React from 'react'
import { css } from '@emotion/react'

type Props = {
  text: string
}

const Title: React.FC<Props> = (props) => {
  return (
    <p css={textStyle}>{props.text}</p>
  )
}

const textStyle = css`
  font-size: 20pt;
  font-weight: 700;
  margin: 5px 0;
  padding: 0 10px;
  text-align: center;
`

export default Title