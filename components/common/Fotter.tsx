import React from 'react'
import { css } from '@emotion/react'

const Fotter: React.FC = () => {
  return (
    <footer css={footerStyle}>&copy; 2020-{new Date().getFullYear()} てんとうや</footer>
  )
}

const footerStyle = css`
  padding: 8px 0;
  font-size: 10pt;
  text-align: center;
  color: rgb(100, 100, 100);
  background-color: #fff;
  border-top: 1px solid #dcdcdc;
`

export default Fotter