"use client";
import styled from "styled-components";
import { GridWrapper } from "./gridLayout";
import { breakpoints, CoreColorInput, DarkOverlay_80 } from "./styleConstants";
import { ArrayRGBA, ColorMixer } from "../utils/utils";

export const HeroText = styled.h1<CoreColorInput>`
  color: ${(props) =>
    ColorMixer({
      bottomLayer: props.color,
      topLayer: DarkOverlay_80,
      returnFormat: "rgba",
    })};
  margin-top: 208px;
  grid-column: 2 / span 10;
  font-size: 96px;
  font-weight: 400;
  letter-spacing: 4px;
  text-shadow: -2px -2px 0 #fff, 2px -2px 0 #fff, -2px 2px 0 #fff,
    2px 2px 0 #fff;
  @media screen and (max-width: ${breakpoints.md}) {
    font-size: 72px;
  }
  @media screen and (max-width: ${breakpoints.sm}) {
    font-size: 48px;
  }
`;

export const HeroSubtitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 6 / span 5;
  row-gap: 24px;
  margin-top: 64px;
  margin-bottom: 240px;
`;

export const FindMeWrapper = styled.div`
  grid-column: 2 / span 10;

  display: flex;
  flex-direction: row;
  column-gap: 16px;
  align-items: center;
`;
export const LogoSVG = styled.svg<CoreColorInput>`
  cursor: pointer;
  width: 32px;
  path {
    fill: ${(props) =>
      ColorMixer({
        bottomLayer: props.color,
        topLayer: DarkOverlay_80,
        returnFormat: "rgba",
      })};
  }
  &:hover {
    path {
      fill: ${(props) =>
        ColorMixer({
          bottomLayer: props.color,
          topLayer: props.color,
          returnFormat: "rgba",
        })};
    }
  }
`;

export const HeroSubtitle = styled.p<CoreColorInput>`
  color: ${(props) =>
    ColorMixer({
      bottomLayer: props.color,
      topLayer: DarkOverlay_80,
      returnFormat: "rgba",
    })};
  font-size: 24px;
  line-height: 1.6;
  font-weight: 400;

  @media screen and (max-width: 768px) {
    grid-column: 2 / span 8;
  }
  // text-shadow: 0px 0px 10px black;
  text-shadow: -2px -2px 0 #fff, 2px -2px 0 #fff, -2px 2px 0 #fff,
    2px 2px 0 #fff;

  @media screen and (max-width: ${breakpoints.md}) {
    font-size: 20px;
    margin-top: 0px;
    margin-bottom: 140px;
  }
`;

export const SineWaveGridWrapper = styled.div`
  width: 100%;
  margin: 0px auto;
  max-width: ${breakpoints.lg};
  position: relative;
  z-index: 5;
  display: grid;
  grid-template-columns: 0.5fr repeat(10, 1fr) 0.5fr;
  column-gap: 10px;
  row-gap: 64px;
  min-height: 400px;
  // height: 100vh;
`;

export const SineSVG = styled.svg`
  position: fixed;
  bottom: 0px;
  // background-color: red;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  z-index: -2;
`;

type MovePathInput = {
  color?: ArrayRGBA;
  speed?: number;
  transform?: number;
  thickness?: number;
};
export const MovePath = styled.path<MovePathInput>`
  stroke-width: 2px;
  stroke: ${(props) => (props.color ? `rgba(${props.color})` : "black")};
  fill: none;
  animation-name: move;
  animation-duration: 240s;
  stroke-dasharray: 3 3;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  @keyframes move {
    from {
      transform: translateX(-150%);
    }
    50% {
      transform: translateX(0%);
    }
    to {
      transform: translateX(-150%);
    }
  }
  @media (prefers-reduced-motion) {
    animation-iteration-count: 0;
  }
`;

export const MoveLineGroup = styled.g`
  animation-name: move1;
  animation-duration: 240s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  opacity: 0.6;
  @keyframes move1 {
    from {
      transform: translateX(-150%);
    }
    50% {
      transform: translateX(0%);
    }
    to {
      transform: translateX(-150%);
    }
  }
  @media (prefers-reduced-motion) {
    animation-iteration-count: 0;
  }
`;
export const Line = styled.line<MovePathInput>`
  stroke-width: 8px;
  stroke: ${(props) => (props.color ? `rgba(${props.color})` : "black")};
`;

export const Axis = styled.path`
  stroke-width: 1px;
  stroke: black;
  fill: none;
`;
