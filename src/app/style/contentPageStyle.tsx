import styled from "styled-components";
import { ColorMixer } from "../utils/utils";
import { CoreColorInput, DarkOverlay_80 } from "./styleConstants";
import { GridWrapper } from "./gridLayout";

export const Content = styled(GridWrapper)<CoreColorInput>`
  color: ${(props) =>
    ColorMixer({
      bottomLayer: props.color,
      topLayer: DarkOverlay_80,
      returnFormat: "rgba",
      opacity: 0.85,
    })};
  row-gap: 0px;
  h1 {
    font-size: 56px;
    font-weight: 500;
    margin-top: 128px;
    grid-column: 2 / span 10;
  }
  h2 {
    margin-top: 16px;
    font-size: 28px;
    font-weight: 300;
    grid-column: 2 / span 10;
  }
  h3 {
    margin-top: 32px;
    font-size: 32px;
    font-weight: 500;
    grid-column: 2 / span 10;
  }
  h4 {
    margin-top: 16px;
    opacity: 0.8;
    font-size: 20px;
    font-weight: 300;
    grid-column: 3 / span 8;
  }
  p {
    margin-top: 16px;
    line-height: 1.2;
    font-size: 24px;
    font-weight: 300;
    grid-column: 2 / span 10;
  }
`;

type GridColumnInput = {
  gridColumn?: string;
};
export const SmallColumn = styled.div<GridColumnInput>`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  line-height: 1.2;
  font-size: 24px;
  font-weight: 300;
  grid-column: ${(props) =>
    props.gridColumn ? props.gridColumn : " 1/ span 3"};
  :first-child {
    font-weight: 400;
    margin-top: 16px;
  }
  p {
    margin-top: 0px;
  }
  div {
    margin-bottom: 24px;
    margin-top: 0px;
  }
`;

export const FullWidthImageWrapper = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  margin: 32px auto;
  grid-column: 2 / span 10;
  img {
    width: 100%;
    height: 100%;
    position: relative !important;
    object-fit: cover; // Optional
  }
`;