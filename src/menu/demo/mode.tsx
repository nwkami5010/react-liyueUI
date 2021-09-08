import React, { useState } from 'react'
import  Menu  from '../menu'
// @ts-ignore
import {Button} from 'react-liyueUI';
import {MenuMode} from '../menu';


const { SubMenu } = Menu

export default () => {
  const [mode, setMode] = useState<MenuMode>('horizontal')
  const toggleMode = () => {
    if (mode === 'horizontal') {
      setMode('inline')
    } else {
      setMode('horizontal')
    }
  }
  return (
    <div>
      <div>
        <Button onClick={toggleMode} type="primary">
          切换
        </Button>
        <span style={{ marginLeft: '20px' }}>mode: {mode}</span>
      </div>
      <Menu mode={mode} defaultSelectedKey="1-0" defaultOpenKeys={['1']}>
        <Menu.Item>菜单1</Menu.Item>
        <SubMenu title="菜单2">
          <Menu.Item>菜单2-1</Menu.Item>
          <Menu.Item>菜单2-2</Menu.Item>
        </SubMenu>
        <Menu.Item>菜单3</Menu.Item>
        <Menu.Item>菜单4</Menu.Item>
      </Menu>
    </div>
  )

}
