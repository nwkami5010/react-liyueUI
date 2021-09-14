
import { useRef, useState } from 'react';

import useCreation from '../useCreation';

const proxyMap = new WeakMap();

const rawMap = new WeakMap();

function  isObject(val: object): boolean {
  return typeof val === 'object' && val != null;
}

function observer<T extends object>(initialVal: T,cb: () => void): T {
  const existingProxy = proxyMap.get(initialVal);
// 添加缓存 防止重新构建proxy
  if(existingProxy) {
    return existingProxy;
  }

  if(rawMap.has(initialVal)) {
    return initialVal;
  }

  const proxy = new Proxy<T>(initialVal, {
    get(target,key,receiver) {
      const res = Reflect.get(target,key,receiver);
      return isObject(res) ? observer(res,cb) : Reflect.get(target,key);
    },
    set(target,key,val) {
      const ret = Reflect.set(target,key,val);
      cb();
      return ret;
    },
    deleteProperty(target, key) {
      const ret = Reflect.deleteProperty(target,key);
      cb();
      return ret;
    },
  });

  proxyMap.set(initialVal,proxy);
  rawMap.set(proxy,initialVal);

  return proxy;
}

function useReactive<S extends object>(initialState: S): S {
  const [,setFlag] = useState({});
  const stateRef = useRef<S>(initialState);

  const state = useCreation(() => {
    return observer(stateRef.current, () => {
      setFlag({});
    });
  },[]);

  return state;

}
export default useReactive;
