import React from 'react'

const breakedText = (text: string) => {
  const textArray = text.split(/(\n)/).map((item, index) => (
    <React.Fragment key={index}>
      {item.match(/\n/) ? <br /> : item}
    </React.Fragment>
  ))

  return textArray;
}

export { breakedText }