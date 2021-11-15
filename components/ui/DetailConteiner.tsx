import React from 'react'
import { css } from '@emotion/react'

type Props = {
  padding: 0 | 20,
  children?: React.ReactNode
}

const DetailContainer: React.FC<Props> = (props) => {
  return (
    <div css={() => containerStyle(props.padding)}>{props.children}</div>
  )
}

const containerStyle = (padding: number) => css`
  margin: 0 auto;
  padding: 0 ${padding}px;
  text-align: center;
  max-width: 1000px;

  @media (max-width: 700px) {
    padding: 0 ${padding / 2}px;
  }
`

export default DetailContainer