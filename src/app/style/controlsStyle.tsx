"use client";
import styled from "styled-components";
import { CoreColorInput, DarkOverlay_80 } from "./styleConstants";
import { ColorMixer } from "../utils/utils";

export const SettingsButton = styled.button<CoreColorInput>`
  border: 1px solid
    ${(props) =>
      ColorMixer({
        bottomLayer: props.color,
        topLayer: DarkOverlay_80,
        returnFormat: "rgba",
      })};
  width: 24px;
  height: 24px;
`;

export const ControlPanelWrapper = styled.div`
  position: fixed;
  z-index: 20;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
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
    hsl(60, 100%, 50%),
    hsl(120, 100%, 50%),
    hsl(180, 100%, 50%),
    hsl(240, 100%, 50%),
    hsl(300, 100%, 50%)
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
