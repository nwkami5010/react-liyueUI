import { useEffect, useState } from 'react';

type Subscriber = () => void;

const subscriber = new Set<Subscriber>();

type ResponsiveConfig = Record<string, { min: number; max: number }>;

interface ResponsiveInfo {
  screen: string;
  size: {
    height: number;
    width: number;
  };
}

let info: ResponsiveInfo;

let responsiveConfig: ResponsiveConfig = {
  xs: {
    min: -Infinity,
    max: 576,
  },
  sm: {
    min: 576,
    max: 768,
    // }
    // md: {
  },
};
