import React from 'react'
import { css } from '@emotion/react'
import { primaryColor, primarySelectedColor } from '../../styles/colors'

type Props = {
  text: string,
  link: string
}

const Button: React.FC<Props> = (props) => {
  return (
    <a href={props.link} target="_blank" rel="noopener noreferrer" css={buttonStyle}>
      {props.text}
    </a>
  )
}

const buttonStyle = css`
  display: inline-block;
  margin: 5px 10px;
  padding: 9px 15px;
  border-radius: 6px;
  text-align: center;
  background-color: ${primaryColor};
  color: #fff;
  font-size: 11pt;
  cursor: pointer;

  &:hover {
    background-color: ${primarySelectedColor};
  }
`

export default Button