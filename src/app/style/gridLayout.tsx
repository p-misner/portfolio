"use client";
import styled from "styled-components";
import { CoreColorInput, LightOverlay_95 } from "./styleConstants";
import { ColorMixer } from "../utils/utils";

export const PageWrapper = styled.div<CoreColorInput>`
  background-color: ${(props) =>
    ColorMixer({
      bottomLayer: props.color,
      topLayer: LightOverlay_95,
      returnFormat: "rgba",
    })};
  z-index: 1;
  position: relative;
`;
export const GridWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0px auto;
  position: relative;
  z-index: 100;
  display: grid;
  grid-template-columns: 0.5fr repeat(10, 1fr) 0.5fr;
  column-gap: 10px;
  row-gap: 15px;
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
  }
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
