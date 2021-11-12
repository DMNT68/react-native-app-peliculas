import React from 'react';

import {createContext, useState} from 'react';

interface ImageColors {
  primary: string;
  secondary: string;
}

interface ContextProps {
  colors: ImageColors;
  previewColors: ImageColors;
  setMainColors: (colors: ImageColors) => void;
  setPreviewsMainColors: (colors: ImageColors) => void;
}

export const GradientContext = createContext({} as ContextProps);
export const GradientProvider = ({children}: any) => {
  const [colors, setColors] = useState({
    primary: 'transparent',
    secondary: 'transparent',
  });

  const [previewColors, setpreviewColors] = useState({
    primary: 'transparent',
    secondary: 'transparent',
  });

  const setMainColors = (colors: ImageColors) => {
    setColors(colors);
  };
  const setPreviewsMainColors = (colors: ImageColors) => {
    setpreviewColors(colors);
  };

  return (
    <GradientContext.Provider
      value={{colors, previewColors, setMainColors, setPreviewsMainColors}}>
      {children}
    </GradientContext.Provider>
  );
};
