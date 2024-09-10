"use client";
import styled from "styled-components";
import { CoreColorInput, DarkOverlay_80 } from "./styleConstants";
import { GridWrapper } from "./gridLayout";
import { ColorMixer } from "../utils/utils";

export const Header = styled(GridWrapper)`
  padding: 24px 0px;

  z-index: 100;
`;
export const NameHeader = styled.h3<CoreColorInput>`
  font-weight: 600;
  grid-column: 2 / span 5;
  font-size: 20px;
  font-weight: 400;
  color: ${(props) =>
    ColorMixer({
      bottomLayer: props.color,
      topLayer: DarkOverlay_80,
      returnFormat: "rgba",
    })};
`;

export const MenuHeader = styled.div<CoreColorInput>`
  color: ${(props) =>
    ColorMixer({
      bottomLayer: props.color,
      topLayer: DarkOverlay_80,
      returnFormat: "rgba",
    })};
  text-alight: right;
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
