import React from 'react'
import { css } from '@emotion/react'
import Image from 'next/image'
import Title from '../ui/Title'
import Spacer from '../ui/Spacer'
import BackNavigation from '../ui/BackNavigation'
import { Work } from '../../types/Work.type'
import Button from '../ui/Button'
import DetailContainer from '../ui/DetailConteiner'

type Props = {
  data: Work
}

const WorksPage: React.FC<Props> = (props) => {
  return (
    <div css={layoutStyle}>
      <BackNavigation text="グッズ一覧" link="/works" />
      <Spacer y={10} />

      <DetailContainer padding={20}>
        <div css={containerStyle}>
          <Spacer y={10} />
          <Title text={props.data.title} />
          <Spacer y={20} />

          <div css={imageContainerStyle}>
            <Image src={`/images/thumbnails/${props.data.imageUrl[0]}`} width={600} height={400} layout="responsive" objectFit="cover" />
          </div>

          <Button text="購入ページへ" link={props.data.shopLink} />

          <p css={textStyle}>
            {props.data.descriptionLong}
          </p>

          {props.data.imageUrl.map((image, index) => {
            if (index > 0) {
              return (
                <div css={imageContainerStyle}>
                  <Image src={`/images/thumbnails/${image}`} width={600} height={400} layout="responsive" objectFit="cover" />
                </div>
              )
            }
          })}

          {props.data.youTubeLink !== "" &&
            <div css={videoContainerStyle}>
              <iframe src={props.data.youTubeLink} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true} css={videoStyle}
              />
            </div>
          }

        </div>
      </DetailContainer>
    </div>
  )
}

const layoutStyle = css`
  min-height: 100vh;
`
const containerStyle = css`
  background-color: #ffffff;
  margin: 0 auto;
  max-width: 900px;
  padding: 30px;
  border-radius: 12px;

  @media (max-width: 700px) {
    padding: 10px;
  }
`
const imageContainerStyle = css`
  width: 100%;
  height: 75%;
  margin: 30px 0;
`
const textStyle = css`
  font-size: 12pt;
  text-align: left;
  margin: 30px 0;
  padding: 0 10px;
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

export default WorksPage