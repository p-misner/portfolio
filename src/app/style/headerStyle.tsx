"use client";
import styled from "styled-components";
import {
  breakpoints,
  CoreColorInput,
  DarkOverlay_80,
  LightOverlay_95,
} from "./styleConstants";
import { GridWrapper } from "./gridLayout";
import { ColorMixer } from "../utils/utils";

export const HeaderWrapper = styled.div<CoreColorInput>`
  position: fixed;
  width: 100%;
  background: ${(props) =>
    ColorMixer({
      bottomLayer: props.color,
      topLayer: LightOverlay_95,
      returnFormat: "rgba",
      opacity: 0.85,
    })};
  backdrop-filter: blur(12.8px);
  -webkit-backdrop-filter: blur(12.8px);
  z-index: 20;
  ::selection {
    background: ${(props) =>
      ColorMixer({
        bottomLayer: props.color,
        topLayer: props.color,
        opacity: 0.6,
        returnFormat: "rgba",
      })};
  }
`;
export const Header = styled.div`
  width: 100%;
  margin: 0px auto;
  max-width: ${breakpoints.lg};
  position: relative;
  z-index: 5;
  display: grid;
  grid-template-columns: 0.5fr repeat(10, 1fr) 0.5fr;
  column-gap: 10px;
  row-gap: 64px;

  padding: 24px 0px;
  z-index: 100;
`;
export const NameHeader = styled.h3<CoreColorInput>`
  font-weight: 600;
  grid-column: 2 / span 5;
  font-size: 20px;
  font-weight: 400;

  a {
    text-decoration: none;
    color: ${(props) =>
      ColorMixer({
        bottomLayer: props.color,
        topLayer: DarkOverlay_80,
        returnFormat: "rgba",
      })};
  }
`;

export const MenuHeader = styled.div<CoreColorInput>`
  color: ${(props) =>
    ColorMixer({
      bottomLayer: props.color,
      topLayer: DarkOverlay_80,
      returnFormat: "rgba",
    })};
  display: flex;
  grid-column-start: span 3;
  grid-column-end: 12;
  flex-direction: row;
  justify-content: flex-end;
  font-size: 20px;
  font-weight: 400;
  a {
    margin-left: 32px;
    color: ${(props) =>
      ColorMixer({
        bottomLayer: props.color,
        topLayer: DarkOverlay_80,
        returnFormat: "rgba",
      })};
    text-decoration: none;
  }
`;
