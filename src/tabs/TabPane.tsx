import React,{ FC } from 'react'

export interface Props {
  tab: React.ReactNode
  disabled?: boolean
}

const TabPane: FC<Props> = ({children}) => (
  <div className="l-tab-panel">{children}</div>
)

export default  TabPane
