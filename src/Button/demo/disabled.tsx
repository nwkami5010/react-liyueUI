import React from 'react'
import Button from '../button'
export default () => (

  <div id="components-button-demo-shape">
    <Button type="info" disabled>
      禁用
    </Button>
    <Button type="danger" disabled>
      禁用按钮
    </Button>
    <Button type="link" disabled>
      不可访问
    </Button>
  </div>

)
