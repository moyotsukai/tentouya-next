import React from 'react'
import { css } from '@emotion/react'
import Link from 'next/link'
import { primaryColor, primarySelectedColor } from '../../styles/colors'

type Props = {
  isOuterLink: boolean,
  text: string,
  link: string
}

const RoundButton: React.FC<Props> = (props) => {
  if (props.isOuterLink) {
    return (
      <a href={props.link} target="_blank" rel="noopener noreferrer" css={buttonStyle}>
        {props.text}
      </a>
    )

  } else {
    return (
      <Link href={props.link} passHref>
        <a css={buttonStyle}>
          {props.text}
        </a>
      </Link>
    )
  }
}

const buttonStyle = css`
  display: inline-block;
  margin: 5px 10px;
  padding: 9px 15px;
  border-radius: 200px;
  text-align: center;
  background-color: ${primaryColor};
  color: #fff;
  font-size: 11pt;
  cursor: pointer;

  &:hover {
    background-color: ${primarySelectedColor};
  }
`

export default RoundButton