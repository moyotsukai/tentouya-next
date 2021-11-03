import React from 'react'
import { css } from '@emotion/react'
import Link from 'next/link'
import { primaryColor } from '../../styles/colors'

type Props = {
  isOuterLink: boolean,
  text: string,
  link: string
}

const RoundOutlineButton: React.FC<Props> = (props) => {
  if (props.isOuterLink) {
    return (
      <a href={props.link} target="_blank" rel="noopener noreferrer" css={buttonStyle}>
        {props.text}
      </a>
    )

  } else {
    return (
      <Link href={props.link}>
        <a css={buttonStyle}>
          {props.text}
        </a>
      </Link>
    )
  }
}

const buttonStyle = css`
  display: inline-block;
  margin: 10px;
  padding: 10px 15px;
  border-radius: 200px;
  text-align: center;
  border: solid 2px #000;
  color: #000;
  font-size: 11pt;
`

export default RoundOutlineButton