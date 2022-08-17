import React, { useState } from 'react'
import { css } from '@emotion/react'
import Title from '../ui/Title'
import Spacer from '../ui/Spacer'
import BackNavigation from '../ui/BackNavigation'
import Button from '../ui/Button'
import DetailContainer from '../ui/DetailConteiner'
import OpenInNew from '../icons/OpenInNew'
import SpacerInline from '../ui/SpacerInline'
import DetailAdditionalInfo from '../divided/DetailAdditionalInfo'
import DetailImage from '../ui/DetailImage'
import { supportingTextColor } from '../../styles/colors'
import { breakedText } from '../../utils/breakedText'
import { WorkData } from '../../types/WorkData.type'
import Select from '../ui/Select'

type Props = {
  data: WorkData
}

const WorksPage: React.FC<Props> = (props) => {
  const description = breakedText(props.data.descriptionLong)
  const options = props.data.shopLinks?.shopLink.map((link) => (link.title))
  const [selectedOption, setSelectedOption] = useState<string>("")
  const selectedOptionLink = props.data.shopLinks?.shopLink.find((link) => (link.title == selectedOption))
  const imageUrl = selectedOptionLink?.imageUrl?.url ?? props.data.imageUrlA.url

  const onClickButton = (link: string) => {
    window.open(link, "_blank")
  }

  const hasOptions = (data: WorkData) => {
    if (data.shopLinks?.shopLink) {
      return data.shopLinks.shopLink.length > 0
    }
    return false
  }

  return (
    <div css={layoutStyle}>
      <BackNavigation text="グッズ一覧" link="/works" />
      <Spacer y={10} />

      <DetailContainer padding={20}>
        <div css={containerStyle}>
          <Spacer y={10} />
          <Title text={props.data.title} />

          <DetailImage src={imageUrl} />

          <p css={supportingTextStyle}>
            {props.data.category + " / "}
            <span css={priceStyle}>{props.data.price}</span>
          </p>

          <Spacer y={30} />

          {hasOptions(props.data)
            ?
            <div>
              <div css={selectContainerStyle}>
                <Select placeholder={props.data.shopLinks.placeholder} options={options} selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
              </div>
              <Button text="購入ページへ" onClick={() => onClickButton(selectedOptionLink.shopLink)} isEnabeld={selectedOption !== ""} >
                <SpacerInline x={3} />
                <OpenInNew size={22} />
              </Button>
            </div>
            :
            <Button text="購入ページへ" onClick={() => onClickButton(props.data.shopLink)} isEnabeld={true} >
              <SpacerInline x={3} />
              <OpenInNew size={22} />
            </Button>
          }

          <Spacer y={30} />
          <p css={textStyle}>
            {description}
          </p>
          <Spacer y={30} />

          <DetailAdditionalInfo data={props.data} />

        </div>
        <Spacer y={20} />
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
const selectContainerStyle = css`
  display: block;
`

export default WorksPage