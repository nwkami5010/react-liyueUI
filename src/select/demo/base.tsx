import React from 'react'
// @ts-ignore
import { Select } from 'react-liyueUI'


export default () => {
  const handleChange = (selectedValue: string, selectedValues: string[]) => {
    console.log(selectedValue, selectedValues)
  }

  const handleVisibleChange = (visible: boolean) => {
    console.log('visible', visible)
  }

  return (
    <Select
      placeholder="请选择"
      onChange={handleChange}
      onVisibleChange={handleVisibleChange}
    >
      <Select.Option value="item1" />
      <Select.Option value="item2" />
      <Select.Option value="item3" />
      <Select.Option value="disabled" disabled />
      <Select.Option value="item4" />
    </Select>
  )
}
