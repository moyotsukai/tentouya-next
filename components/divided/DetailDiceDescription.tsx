import React from 'react'
import { css } from '@emotion/react'
import { Dice } from '../../types/Dice.type'

type Props = {
  data: Dice
}

const DetailDiceDescription: React.FC<Props> = (props) => {
  return (
    <div css={textStyle}>
      <span css={numberStyle}>{props.data.number}</span>&nbsp;
      <span>{props.data.name}</span>
      <p css={descriptionStyle}>{props.data.description}</p>
    </div>
  )
}

const textStyle = css`
  font-size: 12pt;
  text-align: left;
  margin: 20px 0;
  padding: 0 10px;
`
const descriptionStyle = css`
  padding-left: 20px;
  margin: 10px 0;

  @media (max-width: 480px) {
    padding-left: 12px;
  }
`
const numberStyle = css`
  font-weight: 500;
`

export default DetailDiceDescription