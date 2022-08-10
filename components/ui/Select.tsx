import React, { Dispatch, useEffect, useRef, useState } from 'react'
import { css } from '@emotion/react'
import { motion } from 'framer-motion'
import Divider from './Divider'
import { dividerColor, elevatedShadowColor } from '../../styles/colors'
import ArrowIcon from '../icons/ArrowIcon'

type Props = {
  placeholder: string
  options: string[]
  selectedOption: string
  setSelectedOption: Dispatch<React.SetStateAction<string>>
}

const Select: React.FC<Props> = (props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const selectRef = useRef<HTMLButtonElement | null>(null)
  const optionsContainerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    document.addEventListener("mousedown", onOutsideClick)
    return () => {
      document.removeEventListener("mousedown", onOutsideClick)
    }
  }, [])

  const onOutsideClick = (e) => {
    if (selectRef.current?.contains(e.target)) { return }
    if (!optionsContainerRef.current?.contains(e.target)) {
      setIsOpen(false)
    }
  }

  const onSelectClick = () => {
    setIsOpen(!isOpen)
    if (isOpen) {
      props.setSelectedOption("")
    }
  }

  const variants = {
    open: {
      height: "auto",
      opacity: 1,
      y: 0
    },
    closed: {
      height: 0,
      opacity: 0,
      y: -10
    }
  }

  const onSelectOption = (option: string) => {
    if (!isOpen) { return }
    props.setSelectedOption(option)
    setIsOpen(false)
  }

  return (
    <div css={selectContainerStyle}>
      <motion.button
        onClick={onSelectClick}
        ref={selectRef}
        css={selectStyle}
      >
        <span css={selectContentStyle}>
          {isOpen
            ?
            <span>{props.placeholder}</span>
            :
            props.selectedOption
              ?
              <span>{props.selectedOption}</span>
              :
              <span>{props.placeholder}</span>
          }
          <div css={spacerStyle} />
          <ArrowIcon />
        </span>
      </motion.button>

      <motion.div
        initial={{
          height: 0,
          opacity: 0
        }}
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        transition={{
          type: "tween",
          duration: 0.2,
          ease: "easeOut"
        }}
        ref={optionsContainerRef}
        css={optionsContainerStyle}
      >
        {isOpen &&
          props.options.map((option, index) => (
            <React.Fragment key={index}>
              {index != 0 &&
                <Divider hideMargin={true} />
              }
              <button onClick={() => onSelectOption(option)} css={optionStyle}>
                {option}
              </button>
            </React.Fragment>
          ))
        }
      </motion.div>
    </div>
  )
}

const selectContainerStyle = css`
  position: relative;
  display: inline;
`
const selectStyle = css`
  min-width: 150px;
  min-height: 42px;
  border: solid 1px ${dividerColor};
  border-radius: 6px;
  padding: 10px;
  background-color: #fff;
  text-align: left;
  cursor: pointer;
  display: inline;
  font-size: 15px;
`
const selectContentStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
`
const spacerStyle = css`
  flex-grow: 1;
`
const optionsContainerStyle = css`
  position: absolute;
  display: inline;
  top: 40px;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 100;
  border-radius: 6px;
`
const optionStyle = css`
  width: 100%;
  min-height: 42px;
  border: none;
  padding: 10px;
  background-color: #fff;
  box-shadow: 0 3px 10px 0 ${elevatedShadowColor};
  text-align: left;
  cursor: pointer;
  font-size: 15px;

  &:hover {
    background-color: #f3f3f3;
  }
`

export default Select