import React from 'react'
import { css } from '@emotion/react'
import Title from '../ui/Title'
import Spacer from '../ui/Spacer'
import BackNavigation from '../ui/BackNavigation'
import { Fukuwarai } from '../../types/Fukuwarai.type'
import SectionContainer from '../ui/SectionConteiner'
import FukuwaraiCards from '../divided/FukuwaraiCards'

type Props = {
  data: Fukuwarai
}

const FukuwaraiPage: React.FC<Props> = (props) => {
  return (
    <div css={layoutStyle}>
      <BackNavigation text="テントウ福笑い" link="/tentoufukuwarai" />

      <SectionContainer padding={20}>
        <Title text={`${props.data.name}を作ってみよう！`} />
        <Spacer y={10} />
        <p css={textStyle}>パーツをドラッグすることでイラストに重ねられます。出来上がったら下の完成図と照らし合わせてみましょう！</p>
      </SectionContainer>
      <Spacer y={10} />

      <FukuwaraiCards data={props.data} />
    </div>
  )
}

const layoutStyle = css`
  min-height: 100vh;
`
const textStyle = css`
  font-size: 12pt;
  text-align: left;
  padding: 0 10px;
`

export default FukuwaraiPage