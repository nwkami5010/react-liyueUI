---
---

## useUpdate

Demo:

```tsx
import React from 'react';
import { useUpdate } from 'react-liyueUI';

export default () => {
  const update = useUpdate();

  return (
    <>
      <div>Time: {Date.now()}</div>
      <button type="button" onClick={update} style={{ marginTop: 8 }}>
        update
      </button>
    </>
  );
};
```

```

More skills for writing demo: https://d.umijs.org/guide/basic#write-component-demo
```
