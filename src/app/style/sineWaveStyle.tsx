"use client";
import styled from "styled-components";
import { GridWrapper } from "./gridLayout";
import { CoreColorInput, DarkOverlay_80 } from "./styleConstants";
import { ColorMixer } from "../utils/utils";

export const HeroText = styled.h1<CoreColorInput>`
  color: ${(props) =>
    ColorMixer({
      bottomLayer: props.color,
      topLayer: DarkOverlay_80,
      returnFormat: "rgba",
    })};
  margin-top: 128px;
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
  margin-bottom: 240px;
  @media screen and (max-width: 768px) {
    grid-column: 2 / span 8;
  }
`;

export const SineWaveGridWrapper = styled(GridWrapper)`
  min-height: 400px;
  // height: 100vh;
`;

export const SineCanvas = styled.canvas`
  grid-column: 1 / span 12;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: 0;
`;
