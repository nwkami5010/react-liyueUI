import React, { useState } from 'react';
// @ts-ignore
import Switch from '../Switch';

const Demo = () => {
  const [x, setX] = useState(false);
  return (
    <>
      x:{x.toString()}
      <br />
      <Switch defaultValue={x} onChange={(value: boolean) => setX(value)} />
    </>
  );
};

export default Demo;
