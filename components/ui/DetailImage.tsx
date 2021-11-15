import React from 'react'
import { css } from '@emotion/react'
import Image from 'next/image'

type Props = {
  src: string
}

const DetailImage: React.FC<Props> = (props) => {
  return (
    <div css={imageContainerStyle}>
      <Image src={props.src} width={600} height={400} layout="responsive" objectFit="cover" />
    </div>
  )
}

const imageContainerStyle = css`
  width: 100%;
  height: 75%;
  margin: 20px 0;
`

export default DetailImage