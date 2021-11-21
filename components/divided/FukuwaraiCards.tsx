import React from 'react'
import { css } from '@emotion/react'
import Image from 'next/image'
import { Fukuwarai } from '../../types/Fukuwarai.type'
import FukuwaraiParts from '../ui/FukuwaraiParts'

type Props = {
  data: Fukuwarai
}

const FukuwaraiCards: React.FC<Props> = (props) => {
  return (
    <div css={containerStyle}>

      <div css={baseContainerStyle}>
        <div css={tentouImageContainerStyle}>
          <Image src={`/images/fukuwarai/${props.data.id}/${props.data.imageUrls.base}`} width={400} height={400} layout="responsive" objectFit="cover" />
        </div>
      </div>

      <div css={partsContainerStyle}>
        {props.data.imageUrls.partsLarge.map((imageUrl, index) => (
          <FukuwaraiParts id={props.data.id} imageUrl={imageUrl} size="l" key={index} />
        ))}
        {props.data.imageUrls.partsSmall.map((imageUrl, index) => (
          <FukuwaraiParts id={props.data.id} imageUrl={imageUrl} size="s" key={index} />
        ))}
      </div>

      <details css={answerContainerStyle}>
        <summary css={asnwerSummaryStyle}>完成図</summary>
        <div css={tentouImageContainerStyle}>
          <Image src={`/images/fukuwarai/${props.data.id}/${props.data.imageUrls.top}`} width={400} height={400} layout="responsive" objectFit="cover" />
        </div>
      </details>

    </div>
  )
}

const containerStyle = css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
`
const baseContainerStyle = css`
  width: 53vw;
  max-width: 600px;
  padding: 1vw;
  margin: 0.5vw;
  border-radius: 12px;
  background-color: #fff;
  filter: drop-shadow(0 5px 8px rgba(0, 0, 0, 0.05));

  @media(max-width: 480px) {
    width: 90vw;
    margin: 3vw 1vw;
  }
`
const tentouImageContainerStyle = css`
  width: 100%;
  height: 75%;
  margin: 20px 0;
`
const partsContainerStyle = css`
  margin: 0.5vw;
  width: 40vw;
  padding: 1vw;
  border-radius: 12px;
  background-color: #fff;
  filter: drop-shadow(0 5px 8px rgba(0, 0, 0, 0.05));
  max-width: 453px;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  @media(max-width: 480px) {
    margin: 3vw 1vw;
    width: 90vw;
  }
`
const answerContainerStyle = css`
  width: 53vw;
  margin: 0.5vw;
  padding: 1vw;
  text-align: left;
  filter: drop-shadow(0 5px 8px rgba(0, 0, 0, 0.05));
  border-radius: 12px;
  background-color: #fff;
  max-width: 600px;

  @media(max-width: 480px) {
    width: 90vw;
    margin: 3vw 1vw;
  }
`
const asnwerSummaryStyle = css`
  margin: 1vw;

  &:hover {
    cursor: pointer;
    color: #4d4d4d;
  }

  @media(max-width: 480px) {
    margin: 3vw 1vw;
  }
`

export default FukuwaraiCards