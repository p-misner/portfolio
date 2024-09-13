"use client";

import styled from "styled-components";
import { breakpoints, CoreColorInput, DarkOverlay_80 } from "./styleConstants";
import { ColorMixer } from "../utils/utils";
import { GridWrapper } from "./gridLayout";

export const AboutGrid = styled.div<CoreColorInput>`
  width: 100%;
  margin: 0px auto;
  max-width: ${breakpoints.lg};
  position: relative;
  z-index: 5;
  display: grid;
  grid-template-columns: 0.5fr repeat(10, 1fr) 0.5fr;
  column-gap: 10px;

  padding-top: 24px;
  row-gap: 16px;
  padding-bottom: 24px;
  color: ${(props) =>
    ColorMixer({
      bottomLayer: props.color,
      topLayer: DarkOverlay_80,
      returnFormat: "rgba",
      opacity: 0.8,
    })};
`;

export const FindMeRow = styled.div``;
export const AboutHeader = styled.h1`
  margin-top: 16px;
  font-size: 24px;
  font-weight: 300;
  grid-column: 2 / span 10;
`;

export const Footer = styled.p<CoreColorInput>`
  margin-top: 16px;
  grid-column: 2 / span 10;
  font-size: 20px;
  text-align: center;
  font-weight: 300;
  color: ${(props) =>
    ColorMixer({
      bottomLayer: props.color,
      topLayer: DarkOverlay_80,
      returnFormat: "rgba",
      opacity: 0.8,
    })};
`;
