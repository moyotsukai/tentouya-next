import React from 'react'
import { css } from '@emotion/react'
import Image from 'next/image'
import RoundOutlineButton from '../ui/RoundOutlineButton'
import RoundButton from '../ui/RoundButton'

type Props = {
  data: {
    title: string,
    descriptionShort: string,
    descriptionLong: string,
    imageUrl: string[],
    shopLink: string,
    detailLink: string,
    ogpUrl: string
  },
  isWorksStyle: boolean
}

const TopCard: React.FC<Props> = (props) => {
  const worksButtons = (
    <React.Fragment>
      <RoundOutlineButton isOuterLink={false} text="詳しく" link={props.data.detailLink} />
      <RoundButton isOuterLink={true} text="購入する" link={props.data.shopLink} />
    </React.Fragment>
  )

  const fukuwaraiButtons = (
    <React.Fragment>
      <RoundButton isOuterLink={false} text="あそぶ" link={props.data.shopLink} />
    </React.Fragment>
  )

  return (
    <div css={cardStyle}>
      <div css={imageContainerStyle}>
        <Image src={`/images/thumbnails/${props.data.imageUrl[0]}`} width={600} height={400} layout="intrinsic" objectFit="cover" />
      </div>
      <div css={textBoxStyle}>
        <p css={titleStyle}>{props.data.title}</p>
        <p css={descriptionStyle}>{props.data.descriptionShort}</p>
        <div css={buttonBoxStyle}>
          {props.isWorksStyle
            ? worksButtons
            : fukuwaraiButtons
          }
        </div>
      </div>
    </div>
  )
}

const cardStyle = css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
  background-color: #fff;
  border-radius: 7px;
  border: 1px solid rgb(200, 200, 200);
  overflow: hidden;
  transform: translate3d(0, 0, 0);
`
const imageContainerStyle = css`
  width: 60%;
  line-height: 0;

  @media(max-width: 820px) {
    width: 100%;
  }
`
const textBoxStyle = css`
  width: 40%;
  display: block;
  margin: 0;
  padding: 10px;
  border-radius: 6px;
  text-align: left;

  @media(max-width: 820px) {
    width: 100%;
  }
`
const titleStyle = css`
  font-size: 14pt;
  font-weight: 500;
  margin: 10px 0;
  padding: 0 10px;
`
const descriptionStyle = css`
  font-size: 12pt;
  margin: 10px 0;
  padding: 0 10px;
`
const buttonBoxStyle = css`
  text-align: right;
`

export default TopCard