import React from 'react'
import { css } from '@emotion/react'
import Link from 'next/link'
import ArrowBack from '../icons/ArrowBack'
import { supportingTextColor, supportingTextHoverColor } from '../../styles/colors'

type Props = {
  text: string,
  link: string
}

const BackNavigation: React.FC<Props> = (props) => {
  return (
    <Link href={props.link}>
      <a css={buttonStyle}>
        {"< " + props.text}
      </a>
    </Link>
  )
}

const buttonStyle = css`
  display: inline-block;
  margin: 2px 10px;
  padding: 6px;
  border-radius: 200px;
  text-align: left;
  color: ${supportingTextColor};
  font-size: 11pt;
  cursor: pointer;

  &:hover {
    color: ${supportingTextHoverColor};
  }
`

export default BackNavigation