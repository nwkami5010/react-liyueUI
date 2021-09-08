import React from 'react'
// @ts-ignore
import { Input } from 'react-liyueUI'
export default () => (
  <div>
    <Input placeholder="prefix" prefix="http://" />
    <Input placeholder="suffix" suffix=".com" />
  </div>
)
