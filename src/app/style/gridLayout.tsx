"use client";
import styled from "styled-components";
import {
  breakpoints,
  CoreColorInput,
  DarkOverlay_50,
  DarkOverlay_80,
  LightOverlay_95,
  LightOverlay_97,
  LightOverlay_99,
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
  color: ${(props) =>
    ColorMixer({
      bottomLayer: props.color,
      topLayer: DarkOverlay_50,
      returnFormat: "rgba",
    })};
  border-top-left-radius: 64px 48px;
  border-top-right-radius: 64px 48px;
  padding-bottom: 24px;
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
export const GridWrapper = styled.div`
  width: 100%;
  margin: 0px auto;
  max-width: ${breakpoints.lg};
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

export const NotFoundWrapper = styled.div`
  margin: 0 auto;
  height: 100vh;
  width: 100vw;
`;
export const NotFoundMessage = styled.h1<CoreColorInput>`
  text-align: center;
  padding-top: 196px;
  margin-bottom: 24px;
  font-size: 48px;
  font-weight: 500;
  padding-left: 100px;
  padding-right: 100px;
  color: ${(props) =>
    ColorMixer({
      bottomLayer: props.color,
      topLayer: DarkOverlay_50,
      returnFormat: "rgba",
    })};
  text-shadow: -2px -2px 0 #fff, 2px -2px 0 #fff, -2px 2px 0 #fff,
    2px 2px 0 #fff;
`;
export const NotFoundSubtitle = styled.h2<CoreColorInput>`
  text-align: center;
  font-size: 32px;
  padding-left: 100px;
  padding-right: 100px;

  text-shadow: -2px -2px 0 #fff, 2px -2px 0 #fff, -2px 2px 0 #fff,
    2px 2px 0 #fff;
  a {
    text-decoration: none;
    color: ${(props) =>
      ColorMixer({
        bottomLayer: props.color,
        topLayer: DarkOverlay_50,
        returnFormat: "rgba",
      })};
  }
  a:hover {
    text-decoration: underline;
  }
`;

export const NotFoundButton = styled.button<CoreColorInput>`
  padding: 8px 16px;
  text-align: center;
  margin: 0px auto;
  display: block;
  font-size: 20px;
  border-radius: 8px;
  color: ${(props) =>
    ColorMixer({
      bottomLayer: props.color,
      topLayer: DarkOverlay_50,
      returnFormat: "rgba",
    })};
  background: none;
  text-shadow: -2px -2px 0 #fff, 2px -2px 0 #fff, -2px 2px 0 #fff,
    2px 2px 0 #fff;

  &: hover {
    cursor: pointer;
    background: ${(props) =>
      ColorMixer({
        bottomLayer: props.color,
        topLayer: props.color,
        opacity: 0.5,
        returnFormat: "rgba",
      })};
  }
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
