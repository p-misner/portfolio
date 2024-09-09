"use client";
import styled from "styled-components";
import { GridWrapper } from "./gridLayout";
import { CoreColorInput, DarkOverlay_80 } from "./styleConstants";
import { ArrayRGBA, ColorMixer } from "../utils/utils";

export const HeroText = styled.h1<CoreColorInput>`
  color: ${(props) =>
    ColorMixer({
      bottomLayer: props.color,
      topLayer: DarkOverlay_80,
      returnFormat: "rgba",
    })};
  margin-top: 208px;
  grid-column: 2 / span 11;
  font-size: 96px;
  font-weight: 350;
  letter-spacing: 4px;
`;

export const HeroSubtitle = styled.p<CoreColorInput>`
  color: ${(props) =>
    ColorMixer({
      bottomLayer: props.color,
      topLayer: DarkOverlay_80,
      returnFormat: "rgba",
    })};
  grid-column: 4 / span 4;
  font-size: 20px;
  line-height: 1.6;
  font-weight: 300;
  margin-top: 32px;
  margin-bottom: 240px;
  @media screen and (max-width: 768px) {
    grid-column: 2 / span 8;
  }
`;

export const SineWaveGridWrapper = styled(GridWrapper)`
  min-height: 400px;
  // height: 100vh;
`;

export const SineSVG = styled.svg`
  grid-column: 1 / span 12;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: -2;
`;

type MovePathInput = {
  color?: ArrayRGBA;
  speed?: number;
  transform?: number;
  dasharray?: string;
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
`;

export const MoveLineGroup = styled.g`
  animation-name: move1;
  animation-duration: 240s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
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
