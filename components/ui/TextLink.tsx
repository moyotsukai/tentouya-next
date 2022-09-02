import { css } from '@emotion/react'
import React from 'react'
import Link from 'next/link'
import { primaryColor } from '../../styles/colors'

type Props = {
  href: string
  children: React.ReactNode
}

const TextLink: React.FC<Props> = (props) => {
  if (props.href.startsWith("/")) {
    return (
      <Link href={props.href} passHref>
        <a css={linkStyle}>
          {props.children}
        </a>
      </Link>
    )
  } else {
    return (
      <Link href={props.href} passHref>
        <a target="_blank" rel="noopener noreferrer" css={linkStyle}>
          {props.children}
        </a>
      </Link>
    )
  }
}

const linkStyle = css`
  color: ${primaryColor};
  display: inline-block;
  &:hover {
    text-decoration: underline;
  }
`

export default TextLink