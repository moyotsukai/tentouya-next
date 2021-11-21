import React from 'react'
import { css } from '@emotion/react'
import Image from 'next/image'
import Link from 'next/link'
import { Fukuwarai } from '../../types/Fukuwarai.type'

type Props = {
  data: Fukuwarai
}

const Specimen: React.FC<Props> = (props) => {
  return (
    <Link href={`/tentoufukuwarai/${props.data.id}`} passHref>
      <a css={cardStyle}>

        <div css={backgroundImageContainerStyle}>
          <Image src="/images/fukuwarai/specimen_label.png" width={380} height={190} layout="responsive" objectFit="cover" />

          <div css={imageContainerStyle}>
            <Image src={`/images/fukuwarai/${props.data.id}/${props.data.imageUrls.top}`} width={300} height={300} layout="responsive" objectFit="cover" />
          </div>
        </div>

        <p css={titleStyle}>{props.data.name}</p>
        <div css={coverStyle} />
      </a>
    </Link>
  )
}

const cardStyle = css`
  padding: 10px;
  margin: 20px 10px;
  width: 300px;
  height: 190px;
  border-radius: 6px;
  overflow: hidden;
  filter: drop-shadow(0 5px 8px rgba(0, 0, 0, 0.05));
  text-align: center;
  position: relative;

  &:hover{
    cursor: pointer;
  }
`
const backgroundImageContainerStyle = css`
  width: 100%;
  height: auto;
  position: relative;
`
const imageContainerStyle = css`
  width: 120px;
  position: absolute;
  top: 5px;
  left: 75px;
  text-align: center;
`
const titleStyle = css`
  font-size: 12pt;
`
const coverStyle = css`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0);

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`

export default Specimen