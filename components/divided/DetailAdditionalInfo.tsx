import React from 'react'
import { css } from '@emotion/react'
import DetailImage from '../ui/DetailImage'
import DetailTentouPlayingCards from './DetailTentouPlayingCards'
import { WorkData } from '../../types/WorkData.type'

type Props = {
  data: WorkData
}

const DetailAdditionalInfo: React.FC<Props> = (props) => {
  return (
    <React.Fragment>
      {props.data.imageUrlB &&
        <DetailImage src={props.data.imageUrlB.url} />
      }
      {props.data.imageUrlC &&
        <DetailImage src={props.data.imageUrlC.url} />
      }

      {props.data.workId === "tentou-playing-cards" &&
        <DetailTentouPlayingCards />
      }

      {props.data.imageUrlD &&
        <DetailImage src={props.data.imageUrlD.url} />
      }

      {props.data.youtubeLink &&
        <div css={videoContainerStyle}>
          <iframe src={props.data.youtubeLink} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true} css={videoStyle} />
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