import React from 'react'
import { css } from '@emotion/react'
import { PlayingCard } from '../../types/PlayingCard.type'
import Head from 'next/head'

type Props = {
  data: PlayingCard
}

const Mark: React.FC<Props> = (props) => {
  switch (props.data.mark) {
    case "spade":
      return <span>&#9824;</span>
    case "heart":
      return <span>&#9829;</span>
    case "club":
      return <span>&#9827;</span>
    case "diamond":
      return <span>&#9830;</span>
    default:
      return <span />
  }
}

const ScientificNameItalic: React.FC<Props> = (props) => {
  if (props.data.scientificNameItalic === "Sticholotis sp.") {
    return (
      <React.Fragment>
        <span css={scientificNameItalicStyle}>Sticholotis</span>&nbsp;<span css={scientificNameUprightStyle}>sp.</span>
      </React.Fragment>
    )
  } else {
    return (
      <span css={scientificNameItalicStyle}>{props.data.scientificNameItalic}</span>
    )
  }
}

const ScientificNameUpright: React.FC<Props> = (props) => {
  if (props.data.scientificNameUpright === "未記載") {
    return <span>{props.data.scientificNameUpright}</span>
  } else {
    return <span css={scientificNameUprightStyle}>{props.data.scientificNameUpright}</span>
  }
}

const Rarity: React.FC<Props> = (props) => {
  const star = "\u2605"
  let rarity = (
    star.repeat(props.data.rarity)
  )
  if (props.data.name === "トホシテントウ") {
    rarity += `（関西では${star.repeat(4)}）`
  }

  return (
    <span>{rarity}</span>
  )
}

const DetailPlayingCardsDescription: React.FC<Props> = (props) => {
  return (
    <React.Fragment>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Serif:ital@0;1&display=swap" rel="stylesheet" key="fontLink" />
      </Head>
      <div css={textStyle}>
        <span css={numberStyle}>{props.data.number}</span>
        <Mark data={props.data} />&nbsp;
        <span>{props.data.name}</span>&nbsp;&nbsp;
        <ScientificNameItalic data={props.data} />&nbsp;
        <ScientificNameUpright data={props.data} />&nbsp;&nbsp;
        <Rarity data={props.data} />
        <p css={descriptionStyle}>{props.data.description}</p>
      </div>
    </React.Fragment>
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
const scientificNameItalicStyle = css`
  font-family: 'Noto Serif';
  font-style: italic;
`
const scientificNameUprightStyle = css`
  font-family: 'Noto Serif';
  font-style: normal;
`

export default DetailPlayingCardsDescription