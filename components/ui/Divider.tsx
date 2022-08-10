import React from 'react'
import { css } from '@emotion/react'
import { dividerColor } from '../../styles/colors'
import { breakpoints } from '../../styles/constants'

type Props = {
  hideMargin?: boolean
}

const Divider: React.FC<Props> = (props) => {
  return (
    <div css={() => dividerStyle(props.hideMargin)} />
  )
}

const dividerStyle = (hideMargin: boolean) => css`
  border-bottom: solid 1px ${dividerColor};
  margin: ${hideMargin ? "0" : "0 10px"} ;

  @media(min-width: ${breakpoints.desktop}) {
    margin: ${hideMargin ? "0" : "0 20px"} ;
  }
`

export default Divider