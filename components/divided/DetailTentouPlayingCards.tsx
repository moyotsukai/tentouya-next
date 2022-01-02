import React from 'react'
import { css } from '@emotion/react'
import { tentouPlayingCardsData } from '../../worksData/tentouPlayingCardsData'
import DetailPlayingCardsDescription from './DetailPlayingCardsDescription'
import Head from 'next/head'

const DetailTentouPlayingCards: React.FC = () => {
  return (
    <React.Fragment>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Serif:ital@0;1&display=swap" rel="stylesheet" key="fontLinkNotoSerif" />
      </Head>
      <p css={textStyle}>
        <p css={titleStyle}>テントウトランプ解説</p>
        カタカナ表記が和名、アルファベットが学名（イタリック体）と記載者・記載年です。学名とは世界共通の名前です。記載（新種記載）とは、その種が新種であることを論文で示すことです。<br />レア度：&#9733;1～5（多いほど珍しい） 作者の独断と偏見によります。
      </p>

      {tentouPlayingCardsData.map((data, index) => (
        <DetailPlayingCardsDescription data={data} key={index} />
      ))}
    </React.Fragment>
  )
}

const titleStyle = css`
  font-weight: 700;
  margin: 10px 0;
`
const textStyle = css`
  font-size: 12pt;
  text-align: left;
  margin: 30px 0;
  padding: 0 10px;
`

export default DetailTentouPlayingCards