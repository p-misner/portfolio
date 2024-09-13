"use client";
import styled from "styled-components";
import { ArrayRGBA, ColorMixer } from "../utils/utils";
import {
  breakpoints,
  CoreColorInput,
  DarkOverlay_80,
  LightOverlay_95,
  LightOverlay_97,
} from "./styleConstants";
import { League_Spartan, Space_Mono } from "next/font/google";

const spacemono = Space_Mono({
  weight: ["400", "700"],
  style: "normal",
  subsets: ["latin"],
});
const leaguespartan = League_Spartan({ subsets: ["latin"] });
export const PlaygroundWrapper = styled.div<CoreColorInput>`
  position: relative;
  grid-column: 1 / span 12;
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
  ::selection {
    background: ${(props) =>
      ColorMixer({
        bottomLayer: props.color,
        topLayer: DarkOverlay_80,
        opacity: 0.3,
        returnFormat: "rgba",
      })};
  }
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
  @media screen and (max-width: ${breakpoints.md}) {
    grid-column: 2 / span 5;
  }
`;

type FunProjInput = {
  color: ArrayRGBA;
  rotate?: string;
};
export const FunProjectWrapper = styled.div<FunProjInput>`
  width: 352px;
  min-width: 352px;
  height: 352px;
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
  margin-left: -100px;
  z-index: 20;
  display: flex;
  flex-direction: column;
  padding: 24px;
  &:hover {
    z-index: 100;
  }
  &:first-child {
    z-index: 100;
    margin-left: 20vw;
  }
  &:last-child {
    margin-right: 20vw;
  }
  @media screen and (max-width: ${breakpoints.md}) {
    width: 282px;
    min-width: 282px;
    height: 282px;
  }
`;

export const SquareImageWrapper = styled.div`
  position: relative;
  flex-grow: 1;
  img {
    width: 100%;
    height: 100%;
    max-height: 296px;
    position: relative !important;
    object-fit: cover; // Optional
    @media screen and (max-width: ${breakpoints.md}) {
      max-height: 296px;
    }
  }
`;

export const FunProjectTitle = styled.a<CoreColorInput>`
  font-family: ${leaguespartan.style.fontFamily};
  font-weight: 300;
  cursor: pointer !important;
  margin-bottom: 8px;
  color: ${(props) =>
    ColorMixer({
      bottomLayer: props.color,
      topLayer: LightOverlay_95,
      returnFormat: "rgba",
      opacity: 1,
    })};
  font-size: 48px;
  letter-spacing: 1px;
  word-spacing: 4px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  @media screen and (max-width: ${breakpoints.md}) {
    font-size: 32px;
  }
`;
type ScrollInput = {
  top?: string;
  left?: string;
  color: ArrayRGBA;
};
export const ScrollAbsolute = styled.p<ScrollInput>`
  color: ${(props) =>
    ColorMixer({
      bottomLayer: props.color,
      topLayer: LightOverlay_95,
      returnFormat: "rgba",
      opacity: 1,
    })};
  font-weight: 700;
  font-size: 20px;
  position: absolute;
  top: ${(props) => (props.top ? props.top : "20px")};
  left: ${(props) => (props.left ? props.left : "20px")};
`;

export const ProjectScroll = styled.div<CoreColorInput>`
  cursor: grab;
  width: 100vw;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  display: relative;
  justify-content: flex-start;
  padding: 128px 0px 128px 0px;
  // margin-top: -128px;
  overflow-x: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
`;
