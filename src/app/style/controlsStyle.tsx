"use client";
import styled from "styled-components";
import {
  CoreColorInput,
  DarkOverlay_80,
  LightOverlay_95,
  LightOverlay_97,
} from "./styleConstants";
import { ColorMixer } from "../utils/utils";

export const ControlPanelWrapper = styled.div`
  position: fixed;
  z-index: 20;
  display: flex;
  flex-direction: column;
  row-gap: 0px;
  top: 50%;
  left: 20px;
  transform: translate(0, -112px);
`;

export const HueWrapper = styled.div`
  height: 192px;
  width: 24px;
  margin: 10px 0;
`;

export const Hue = styled.div<CoreColorInput>`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  position: relative;
  border: 1px solid
    ${(props) =>
      ColorMixer({
        bottomLayer: props.color,
        topLayer: DarkOverlay_80,
        returnFormat: "rgba",
      })};
  background: linear-gradient(
    to bottom,
    hsl(60, 80%, 50%),
    hsl(120, 80%, 50%),
    hsl(180, 80%, 50%),
    hsl(240, 80%, 50%),
    hsl(300, 80%, 50%)
  );
  display: flex;
  align-items: center;

  & span {
    position: absolute;
    left: 4px;
    width: 12px;
    height: 12px;
    border-radius: 16px;
    background-color: ${(props) =>
      ColorMixer({
        bottomLayer: props.color,
        topLayer: props.color,
        returnFormat: "rgba",
      })};
    border: 2px solid
      ${(props) =>
        ColorMixer({
          bottomLayer: props.color,
          topLayer: DarkOverlay_80,
          returnFormat: "rgba",
        })};
  }
`;

export const ColoredInput = styled.input<CoreColorInput>`
  -webkit-appearance: none;
  appearance: none;
  background: none;
  cursor: pointer;

  /* chromium */
  &::-webkit-slider-runnable-track {
    background: ${(props) =>
      ColorMixer({
        bottomLayer: props.color,
        topLayer: props.color,
        returnFormat: "rgba",
      })};
    border: 1px solid
      ${(props) =>
        ColorMixer({
          bottomLayer: props.color,
          topLayer: DarkOverlay_80,
          returnFormat: "rgba",
        })};
    border-radius: 4px;
    height: 8px;
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none; /* Override default look */
    appearance: none;
    margin-top: -5px;
    height: 16px;
    width: 16px;
    aspect-ratio: 1;
    border-radius: 50%;
    background-color: ${(props) =>
      ColorMixer({
        bottomLayer: props.color,
        topLayer: props.color,
        returnFormat: "rgba",
      })};
    border: 2px solid
      ${(props) =>
        ColorMixer({
          bottomLayer: props.color,
          topLayer: DarkOverlay_80,
          returnFormat: "rgba",
        })};
  }
  &:focus::-webkit-slider-thumb {
    border: 2px solid
      ${(props) =>
        ColorMixer({
          bottomLayer: props.color,
          topLayer: LightOverlay_97,
          returnFormat: "rgba",
        })};
    outline: 6px solid
      ${(props) =>
        ColorMixer({
          bottomLayer: props.color,
          topLayer: props.color,
          returnFormat: "rgba",
        })};
  }

  /* Firefox */
  &::-moz-range-track {
    background: ${(props) =>
      ColorMixer({
        bottomLayer: props.color,
        topLayer: LightOverlay_95,
        returnFormat: "rgba",
      })};
    border: 1px solid
      ${(props) =>
        ColorMixer({
          bottomLayer: props.color,
          topLayer: props.color,
          returnFormat: "rgba",
        })};
    border-radius: 4px;
    height: 12px;
  }
  &::-moz-range-thumb {
    margin-top: -5px;
    height: 16px;
    width: 16px;
    aspect-ratio: 1;
    border-radius: 50%;
    background-color: ${(props) =>
      ColorMixer({
        bottomLayer: props.color,
        topLayer: props.color,
        returnFormat: "rgba",
      })};
    border: 2px solid
      ${(props) =>
        ColorMixer({
          bottomLayer: props.color,
          topLayer: DarkOverlay_80,
          returnFormat: "rgba",
        })};
  }
  &:focus::-moz-range-thumb {
    border: 2px solid
      ${(props) =>
        ColorMixer({
          bottomLayer: props.color,
          topLayer: LightOverlay_97,
          returnFormat: "rgba",
        })};
    outline: 6px solid rgba(0, 0, 0, 0.2);
  }
`;
export const SettingWrapper = styled.div`
  width: 24px;
  height: 24px;
  position: relative;
`;
export const SettingModal = styled.div<CoreColorInput>`
  width: 240px;
  background-color: ${(props) =>
    ColorMixer({
      bottomLayer: props.color,
      topLayer: LightOverlay_97,
      returnFormat: "rgba",
      opacity: 0.5,
    })};

  backdrop-filter: blur(6.8px);
  -webkit-backdrop-filter: blur(6.8px);

  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0px;
  left: 40px;
  border: 1px solid
    ${(props) =>
      props.color
        ? ColorMixer({
            bottomLayer: props.color,
            topLayer: DarkOverlay_80,
            returnFormat: "rgba",
          })
        : "black"};
  border-radius: 8px;
  padding: 16px;
  row-gap: 16px;
`;

export const SettingsButton = styled.button<CoreColorInput>`
  border-radius: 4px;
  border: 1px solid
    ${(props) =>
      ColorMixer({
        bottomLayer: props.color,
        topLayer: DarkOverlay_80,
        returnFormat: "rgba",
      })};
  width: 26px;
  height: 26px;
  background-color: ${(props) =>
    ColorMixer({
      bottomLayer: props.color,
      topLayer: LightOverlay_97,
      returnFormat: "rgba",
      opacity: 0.5,
    })};
  backdrop-filter: blur(6.8px);
  -webkit-backdrop-filter: blur(6.8px);
  cursor: pointer;
  img {
    margin-left: -4px;
    margin-top: 1px;
  }
  &:hover {
    background-color: ${(props) =>
      ColorMixer({
        bottomLayer: props.color,
        topLayer: props.color,
        returnFormat: "rgba",
      })};
  }
`;
