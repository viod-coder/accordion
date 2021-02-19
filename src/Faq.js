import React, { useState } from 'react'
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa'

const Faq = ({ title, info }) => {
  const [visible, setVisibility] = useState(false)
  const clickHandle = () => {
    setVisibility(!visible)
  }
  let button = <FaPlusCircle className='icn' onClick={clickHandle} />
  if (visible) {
    button = <FaMinusCircle className='icn' onClick={clickHandle} />
  }
  return (
    <article>
      <header className='art-header'>
        <h4>{title}</h4>
        {button}
      </header>
      {visible ? <p>{info}</p> : null}
    </article>
  )
}

export default Faq
