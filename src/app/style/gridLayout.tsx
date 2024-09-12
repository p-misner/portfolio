"use client";
import styled from "styled-components";
import {
  breakpoints,
  CoreColorInput,
  LightOverlay_95,
  LightOverlay_97,
} from "./styleConstants";
import { ColorMixer } from "../utils/utils";

export const BackgroundPageWrapper = styled.div<CoreColorInput>`
  background-color: ${(props) =>
    ColorMixer({
      bottomLayer: props.color,
      topLayer: props.color,
      returnFormat: "rgba",
    })};
  background: ${(props) =>
    ColorMixer({
      bottomLayer: props.color,
      topLayer: props.color,
      returnFormat: "rgba",
      opacity: 1,
    })};

  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='rgba(255,255,255,1)' fill-opacity='0.4'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
`;

export const BottomBit = styled.div<CoreColorInput>`
  background-color: ${(props) =>
    ColorMixer({
      bottomLayer: props.color,
      topLayer: LightOverlay_95,
      returnFormat: "rgba",
    })};
  height: 900px;
  border-top-left-radius: 64px 48px;
  border-top-right-radius: 64px 48px;
`;
export const PageWrapper = styled.div<CoreColorInput>`
  background-color: ${(props) =>
    ColorMixer({
      bottomLayer: props.color,
      topLayer: LightOverlay_95,
      returnFormat: "rgba",
    })};
  z-index: 1;
  position: relative;
  border-bottom-left-radius: 64px 48px;
  border-bottom-right-radius: 64px 48px;
  padding-bottom: 100px;
`;
export const GridWrapper = styled.div`
  width: 100%;
  margin: 0px auto;
  max-width: ${breakpoints.lg}px;
  position: relative;
  z-index: 5;
  display: grid;
  grid-template-columns: 0.5fr repeat(10, 1fr) 0.5fr;
  column-gap: 10px;
  row-gap: 64px;
`;

export const FullWidthWrapper = styled.div`
  grid-column: 1 / span 12;
`;

// export const SingleColumn = styled.div`
//   opacity: 0.1;
//   height: 100vh;
//   border: 1px dashed ${baseColor};
//   border-top: 0px;
//   grid-column: 1 span 2;
//   border-bottom: 0px;
//   color: grey;
//   @media screen and (max-width: 768px) {
//     border-color: blue;
//   }
//   @media screen and (max-width: 480px) {
//     border-color: red;
//   }
// `;
