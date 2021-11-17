import React from 'react'
import { css } from '@emotion/react'
import Title from '../ui/Title'
import Spacer from '../ui/Spacer'
import BackNavigation from '../ui/BackNavigation'
import SectionContainer from '../ui/SectionConteiner'

const TentoufukuwaraiPage: React.FC = () => {
  return (
    <div css={layoutStyle}>
      <BackNavigation text="トップ" link="/" />

      <SectionContainer padding={0}>
        <Title text="テントウ福笑い" />
        <Spacer y={10} />

      </SectionContainer>
    </div>
  )
}

const layoutStyle = css`
  min-height: 100vh;
`

export default TentoufukuwaraiPage