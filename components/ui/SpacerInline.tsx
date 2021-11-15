import React from 'react'
import { css } from '@emotion/react'

type Props = {
  x?: number
  y?: number
}

const SpacerInline: React.FC<Props> = (props) => {
  const x = props.x ? props.x : 0
  const y = props.y ? props.y : 0

  return (
    <div css={() => layoutStyle(x, y)}></div>
  )
}

const layoutStyle = (x: number, y: number) => css`
  display: inline;
  margin: ${y}px ${x}px;
`

export default SpacerInline