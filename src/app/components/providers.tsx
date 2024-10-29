"use client";

import { createContext, useState } from "react";
import { ArrayRGBA } from "../utils/utils";

export const ThemeContext = createContext<{
  colorPicked: any;
  setColorPicked: any;
  waveOptions: { a1: number; a2: number; nw1: number; nw2: number };
  setWaveOptions: any;
}>({
  colorPicked: [25, 149, 230, 1],
  setColorPicked: undefined,
  waveOptions: {
    a1: 0.25,
    a2: 0.5,
    nw1: 4,
    nw2: 1.2,
  },
  setWaveOptions: undefined,
});

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const defaultColor: ArrayRGBA = [25, 149, 230, 1];

  // const defaultColor: ArrayRGBA = [0, 0, 0, 1];
  const [colorPicked, setColorPicked] = useState<ArrayRGBA>(defaultColor);
  const [waveOptions, setWaveOptions] = useState({
    a1: 0.25,
    a2: 0.5,
    nw1: 4,
    nw2: 1.2,
  });
  return (
    <ThemeContext.Provider
      value={{ colorPicked, setColorPicked, waveOptions, setWaveOptions }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
