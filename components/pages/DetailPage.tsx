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
            <Spacer y={10} />

            <Button text="購入ページへ" link={props.data.shopLink} >
              <SpacerInline x={3} />
              <OpenInNew size={22} />
            </Button>

            <p css={textStyle}>
              {props.data.descriptionLong}
            </p>

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
  margin: 30px 0;
  padding: 0 10px;
`


export default WorksPage