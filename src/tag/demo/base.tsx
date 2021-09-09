import React from 'react'
// @ts-ignore
import { Tag } from 'react-liyueUI'
export default () => {
  const handleClick = () => {
    console.log('close')
  }
  return (
    <>
      <Tag text="Tag1" closable onClose={handleClick} />
      <Tag text="Tag2" closable={false} />
    </>
  )
}
