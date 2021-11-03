import React from 'react'
import { css } from '@emotion/react'
import Link from 'next/link'
import Image from 'next/image'
import logoImg from '../../public/images/logo/tentouya_logo.png'
import { primaryShadowColor } from '../../styles/colors'

const Header: React.FC = () => {
  return (
    <header css={headerStyle}>
      <Link href="/">
        <a css={linkStyle}>
          <div css={imageContainer}>
            <Image src={logoImg} layout="responsive" css={imgStyle} />
          </div>
          <span css={textStyle}>てんとうや</span>
        </a>
      </Link>
    </header>
  )
}

const headerStyle = css`
  padding: 10px 20px;
  background-color: #fff;
  border-bottom: 1px solid #dcdcdc;
  box-shadow: 0 2px 5px 0 ${primaryShadowColor};
`
const linkStyle = css`
  padding: 5px;
  margin: 5px;
  border-radius: 6px;
  display: inline-block;

  &:hover {
    background-color: #f2f6ff;
    cursor: pointer;
  }
`
const imageContainer = css`
  width: 50px;
  height: 50px;
  display: inline-block;
  vertical-align: middle;
`
const imgStyle = css`
  border-radius: 25px;
`
const textStyle = css`
  font-size: 14pt;
  font-weight: 700;
  margin: 0 8px;
  color: #0b308f;
  display: inline-block;
  vertical-align: middle;
`

export default Header