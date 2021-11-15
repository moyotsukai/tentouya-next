import React from 'react'
import { css } from '@emotion/react'
import { Work } from '../../types/Work.type'
import DetailImage from '../ui/DetailImage'
import DetailTentouPlayingCards from './DetailTentouPlayingCards'

type Props = {
  data: Work
}

const DetailAdditionalInfo: React.FC<Props> = (props) => {
  return (
    <React.Fragment>
      {props.data.imageUrl.map((image, index) => {
        if (index >= 1 && index < 3) {
          return (
            <DetailImage src={`/images/thumbnails/${image}`} key={index} />
          )
        }
      })}

      {props.data.id === "tentou-playing-cards" &&
        <DetailTentouPlayingCards />
      }

      {props.data.imageUrl.map((image, index) => {
        if (index >= 3) {
          return (
            <DetailImage src={`/images/thumbnails/${image}`} key={index} />
          )
        }
      })}

      {props.data.youTubeLink !== "" &&
        <div css={videoContainerStyle}>
          <iframe src={props.data.youTubeLink} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true} css={videoStyle} />
        </div>
      }
    </React.Fragment>
  )
}

const imageContainerStyle = css`
  width: 100%;
  height: 75%;
  margin: 30px 0;
`
const videoContainerStyle = css`
  ${imageContainerStyle}
  position: relative;
  padding-bottom: 56.25%;
`
const videoStyle = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

export default DetailAdditionalInfo