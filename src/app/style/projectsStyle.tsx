"use client";
import styled from "styled-components";
import { GridWrapper } from "./gridLayout";
import {
  borderWidth,
  CoreColorInput,
  DarkOverlay_80,
  LightOverlay_95,
} from "./styleConstants";
import { ArrayRGBA, ColorMixer } from "../utils/utils";

type ProjectStyleInput = {
  filled?: "true" | "false";
  color: ArrayRGBA;
};

export const FullWidthProject = styled.div<ProjectStyleInput>`
  border: ${borderWidth} solid
    ${(props) =>
      ColorMixer({
        bottomLayer: props.color,
        topLayer: props.color,
        returnFormat: "rgba",
      })};
  color: ${(props) =>
    props.filled == "true"
      ? ColorMixer({
          bottomLayer: props.color,
          topLayer: LightOverlay_95,
          returnFormat: "rgba",
        })
      : ColorMixer({
          bottomLayer: props.color,
          topLayer: DarkOverlay_80,
          returnFormat: "rgba",
        })};
  border-radius: 16px;
  background-color: ${(props) =>
    props.filled == "true"
      ? ColorMixer({
          bottomLayer: props.color,
          topLayer: props.color,
          returnFormat: "rgba",
        })
      : ColorMixer({
          bottomLayer: props.color,
          topLayer: LightOverlay_95,
          returnFormat: "rgba",
        })};
  min-height: 350px;
  grid-column: 2 / span 10;
`;
export const TwoThirdProject = styled.div<ProjectStyleInput>`
  border: ${borderWidth} solid
    ${(props) =>
      ColorMixer({
        bottomLayer: props.color,
        topLayer: props.color,
        returnFormat: "rgba",
      })};
  color: ${(props) =>
    props.filled == "true"
      ? ColorMixer({
          bottomLayer: props.color,
          topLayer: LightOverlay_95,
          returnFormat: "rgba",
        })
      : ColorMixer({
          bottomLayer: props.color,
          topLayer: DarkOverlay_80,
          returnFormat: "rgba",
        })};
  border-radius: 16px;
  background-color: ${(props) =>
    props.filled == "true"
      ? ColorMixer({
          bottomLayer: props.color,
          topLayer: props.color,
          returnFormat: "rgba",
        })
      : ColorMixer({
          bottomLayer: props.color,
          topLayer: LightOverlay_95,
          returnFormat: "rgba",
        })};
  min-height: 350px;
  grid-column: 2 / span 6;
`;
