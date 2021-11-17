import React from 'react'
import { css } from '@emotion/react'
import Head from 'next/head'
import Title from '../ui/Title'
import Spacer from '../ui/Spacer'
import BackNavigation from '../ui/BackNavigation'
import { Work } from '../../types/Work.type'
import Button from '../ui/Button'
import DetailContainer from '../ui/DetailConteiner'
import OpenInNew from '../icons/OpenInNew'
import SpacerInline from '../ui/SpacerInline'
import DetailAdditionalInfo from '../divided/DetailAdditionalInfo'
import DetailImage from '../ui/DetailImage'
import { supportingTextColor } from '../../styles/colors'

type Props = {
  data: Work
}

const WorksPage: React.FC<Props> = (props) => {
  return (
    <React.Fragment>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div css={layoutStyle}>
        <BackNavigation text="グッズ一覧" link="/works" />
        <Spacer y={10} />

        <DetailContainer padding={20}>
          <div css={containerStyle}>
            <Spacer y={10} />
            <Title text={props.data.title} />

            <DetailImage src={`/images/thumbnails/${props.data.imageUrl[0]}`} />

            <p css={supportingTextStyle}>
              {props.data.category + " / "}
              <span css={priceStyle}>{props.data.price}</span>
            </p>

            <Spacer y={30} />

            <Button text="購入ページへ" link={props.data.shopLink} >
              <SpacerInline x={3} />
              <OpenInNew size={22} />
            </Button>

            <Spacer y={30} />
            <p css={textStyle}>
              {props.data.descriptionLong}
            </p>
            <Spacer y={30} />

            <DetailAdditionalInfo data={props.data} />

          </div>
          <Spacer y={20} />
        </DetailContainer>
      </div>
    </React.Fragment>
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
const textStyle = css`
  font-size: 12pt;
  text-align: left;
  padding: 0 10px;
`
const supportingTextStyle = css`
  font-size: 10pt;
  text-align: left;
  padding: 0 10px;
  color: ${supportingTextColor};
`
const priceStyle = css`
  font-size: 11pt;
  font-weight: 500;
`


export default WorksPage