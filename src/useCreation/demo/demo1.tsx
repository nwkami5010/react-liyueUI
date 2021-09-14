/**

 *
 * title: 确保实例不会被重复创建
 * desc: 点击 "Rerender" 按钮，触发组件的更新，但 Foo 的实例会保持不变
 */
import React, { useState } from 'react';
// @ts-ignore
 import { useCreation } from 'react-liyueUI';
import {Button} from 'react-liyueUI';

class Foo {
  constructor() {
    this.data = Math.random()
  }
  data: number
}
export default function () {
  const foo = useCreation(() => new Foo(), [])
  const [, setFlag] = useState({})
  return (
    <>
      <p>
        {foo.data}
      </p>
      <Button onClick={() => {setFlag({})}}>Rerender</Button>
    </>
  );
}
