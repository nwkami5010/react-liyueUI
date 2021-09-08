import React from 'react'
import  Menu  from '../menu'

const { SubMenu } = Menu

export default () => (
  <Menu mode="inline" defaultSelectedKey="1-0" defaultOpenKeys={['1']}>
    <Menu.Item>菜单1</Menu.Item>
    <SubMenu title="菜单2">
      <Menu.Item>菜单2-1</Menu.Item>
      <Menu.Item>菜单2-2</Menu.Item>
    </SubMenu>
    <Menu.Item>菜单3</Menu.Item>
    <Menu.Item>菜单4</Menu.Item>
  </Menu>
)
