import React from 'react'
import { css } from '@emotion/react'
import { primaryColor, primarySelectedColor } from '../../styles/colors'

type Props = {
  text: string,
  link: string,
  children?: React.ReactNode
}

const Button: React.FC<Props> = (props) => {
  return (
    <a href={props.link} target="_blank" rel="noopener noreferrer" css={buttonStyle}>
      {props.text}
      {props.children}
    </a>
  )
}

const buttonStyle = css`
  display: inline-block;
  margin: 5px 10px;
  padding: 10px 16px;
  border-radius: 6px;
  text-align: center;
  background-color: ${primaryColor};
  color: #fff;
  font-size: 11pt;
  cursor: pointer;
  vertical-align: middle;

  &:hover {
    background-color: ${primarySelectedColor};
  }
`

export default Button