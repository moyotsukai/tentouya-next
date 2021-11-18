import React from 'react'
import { css } from '@emotion/react'
import Title from '../ui/Title'
import Spacer from '../ui/Spacer'
import BackNavigation from '../ui/BackNavigation'
import SectionContainer from '../ui/SectionConteiner'
import Specimen from '../ui/Specimen'
import { fukuwaraiData } from '../../worksData/fukuwaraiData'

const TentoufukuwaraiPage: React.FC = () => {
  return (
    <div css={layoutStyle}>
      <BackNavigation text="トップ" link="/" />

      <SectionContainer padding={20}>
        <Title text="テントウ福笑い" />
        <Spacer y={10} />
        <p css={textStyle}>バラバラになった模様を元の位置に戻してテントウムシを完成させよう！</p>

        <div css={containerStyle}>
          {fukuwaraiData.map((data, index) => (
            <Specimen data={data} key={index} />
          ))}
        </div>
      </SectionContainer>
    </div>
  )
}

const layoutStyle = css`
  min-height: 100vh;
`
const containerStyle = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
const textStyle = css`
  font-size: 12pt;
  text-align: center;
  padding: 0 10px;
`

export default TentoufukuwaraiPage