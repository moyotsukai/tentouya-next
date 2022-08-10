import React from 'react'
import { css } from '@emotion/react'
import { primaryColor, primaryDisabledColor, primarySelectedColor } from '../../styles/colors'

type Props = {
  text: string,
  onClick: () => void,
  isEnabeld: boolean,
  children?: React.ReactNode
}

const Button: React.FC<Props> = (props) => {
  return (
    <button onClick={props.onClick} disabled={!props.isEnabeld} css={() => buttonStyle(props.isEnabeld)}>
      {props.text}
      {props.children}
    </button>
  )
}

const buttonStyle = (isEnabled: boolean) => css`
  display: inline-block;
  border: none;
  margin: 5px 10px;
  padding: 10px 16px;
  border-radius: 6px;
  text-align: center;
  background-color: ${isEnabled ? primaryColor : primaryDisabledColor};
  color: #fff;
  font-size: 15px;
  cursor: ${isEnabled ? "pointer" : "default"};
  vertical-align: middle;

  &:hover {
    background-color: ${isEnabled ? primarySelectedColor : primaryDisabledColor};
  }
`

export default Button