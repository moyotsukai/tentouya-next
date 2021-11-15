import React from 'react'
import { css } from '@emotion/react'
import { PlayingCard } from '../../types/PlayingCard.type'

type Props = {
  data: PlayingCard
}
const DetailPlayingCardsDescription: React.FC<Props> = (props) => {
  return (
    <div css={textStyle}>
      <span>{props.data.number}</span>
      <span>{props.data.mark}</span>
      <span>{props.data.name}</span>
      <span>{props.data.scientificNameItalic}</span>
      <span>{props.data.scientificNameUpright}</span>
      <span>{props.data.rarity}</span>
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
  padding-left: 25px;
  margin: 10px 0;

  @media (max-width: 480px) {
    padding-left: 12px;
  }
`

export default DetailPlayingCardsDescription