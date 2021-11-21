import React from 'react'
import { css } from '@emotion/react'
import Image from 'next/image'
import Draggable from 'react-draggable'

type Props = {
  id: string,
  imageUrl: string,
  size: "s" | "l"
}

const FukuwaraiParts: React.FC<Props> = (props) => {
  if (props.size === "l") {
    return (
      <Draggable>
        <div>
          <div css={largeImageContainerStyle}>
            <Image src={`/images/fukuwarai/${props.id}/${props.imageUrl}`} width={150} height={150} layout="responsive" objectFit="cover" />
          </div>
          <div css={coverStyle} />
        </div>
      </Draggable>
    )
  } else {
    return (
      <Draggable>
        <div>
          <div css={smallImageContainerStyle}>
            <Image src={`/images/fukuwarai/${props.id}/${props.imageUrl}`} width={100} height={100} layout="responsive" objectFit="cover" />
          </div>
          <div css={coverStyle} />
        </div>
      </Draggable>
    )
  }
}

const largeImageContainerStyle = css`
  border-radius: 6px;
  border: 2px solid rgba(255, 255, 255, 0);
  width: 10vw;
  max-width: 113px;
  position: relative;

  @media(max-width: 480px) {
    border: 2px solid rgba(255, 255, 255, 0);
    width: 17vw;
  }
`
const smallImageContainerStyle = css`
  border-radius: 6px;
  border: 2px solid rgba(255, 255, 255, 0);
  width: 6.7vw;
  max-width: 76px;
  position: relative;

  @media(max-width: 480px) {
    border: 2px solid rgba(255, 255, 255, 0);
    width: 11vw;
  }
`
const coverStyle = css`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0);
  border-radius: 6px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }

  &:hover {
    cursor: pointer;
    border: 2px solid rgb(200, 200, 200);
  }
`

export default FukuwaraiParts