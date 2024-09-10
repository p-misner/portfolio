"use client";
import styled from "styled-components";
import { ArrayRGBA, ColorMixer } from "../utils/utils";
import {
  CoreColorInput,
  DarkOverlay_80,
  LightOverlay_95,
  LightOverlay_97,
} from "./styleConstants";
import { Space_Mono } from "next/font/google";

const spacemono = Space_Mono({
  weight: ["400", "700"],
  style: "normal",
  subsets: ["latin"],
});
export const PlaygroundWrapper = styled.div<CoreColorInput>`
  grid-column: 1 / span 12;
  height: 900px;
  background: ${(props) =>
    ColorMixer({
      bottomLayer: props.color,
      topLayer: props.color,
      returnFormat: "rgba",
      opacity: 1,
    })};

  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='rgba(255,255,255,1)' fill-opacity='0.4'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  z-index: 4;
  overflow: hidden;
`;

export const PlaygroundTitle = styled.h1<CoreColorInput>`
  color: ${(props) =>
    ColorMixer({
      bottomLayer: props.color,
      topLayer: LightOverlay_95,
      returnFormat: "rgba",
      opacity: 1,
    })};
  font-family: ${spacemono.style.fontFamily};
  font-size: 13vw;
  grid-column: 2 / span 10;
  z-index: 4;
`;
export const ScrollInstructions = styled.h3<CoreColorInput>`
  color: ${(props) =>
    ColorMixer({
      bottomLayer: props.color,
      topLayer: LightOverlay_95,
      returnFormat: "rgba",
      opacity: 1,
    })};
  font-family: ${spacemono.style.fontFamily};
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  grid-column: 2 / span 2;
`;

type FunProjInput = {
  color: ArrayRGBA;
  rotate?: string;
};
export const FunProjectWrapper = styled.div<FunProjInput>`
  width: 400px;
  min-width: 400px;
  height: 400px;
  border: 2px solid
    ${(props) =>
      ColorMixer({
        bottomLayer: props.color,
        topLayer: LightOverlay_95,
        returnFormat: "rgba",
      })};
  background-color: ${(props) =>
    ColorMixer({
      bottomLayer: props.color,
      topLayer: props.color,
      returnFormat: "rgba",
    })};
  transform-origin: center;
  transform: rotate(${(props) => (props.rotate ? props.rotate : "3deg")});
  margin-left: -150px;
`;

export const ProjectScroll = styled.div<CoreColorInput>`
  grid-column: 4 / span 9;
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: nowrap;
  justify-content: flex-start;
  padding: 64px 48px;
  overflow-x: scroll;
`;
