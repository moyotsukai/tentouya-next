import React from 'react'
import { css } from '@emotion/react'
import Title from '../ui/Title'
import Spacer from '../ui/Spacer'
import BackNavigation from '../ui/BackNavigation'
import { worksData } from '../../worksData/works'
import WorkCard from '../ui/WorkCard'
import SectionContainer from '../ui/SectionConteiner'

const WorksPage: React.FC = () => {
  return (
    <div css={layoutStyle}>
      <BackNavigation text="トップ" link="/" />

      <SectionContainer>
        <Title text="グッズ一覧" />
        <Spacer y={10} />

        <div css={cardContainerStyle}>
          {worksData.map((data, index) => (
            <WorkCard data={data} key={index} />
          ))}
        </div>

      </SectionContainer>
    </div>
  )
}

const layoutStyle = css`
  min-height: 100vh;
`
const cardContainerStyle = css`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export default WorksPage