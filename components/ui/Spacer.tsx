import React from 'react'
import { css } from '@emotion/react'

type Props = {
  x?: number
  y?: number
}

const Spacer: React.FC<Props> = (props) => {
  const x = props.x ? props.x : 0
  const y = props.y ? props.y : 0

  return (
    <div css={() => layoutStyle(x, y)}></div>
  )
}

const layoutStyle = (x: number, y: number) => css`
  width: ${x}px;
  height: ${y}px;
`

export default Spacer