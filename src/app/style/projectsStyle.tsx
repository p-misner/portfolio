"use client";
import styled from "styled-components";
import { GridWrapper } from "./gridLayout";
import {
  borderWidth,
  CoreColorInput,
  DarkOverlay_80,
  LightOverlay_80,
  LightOverlay_95,
} from "./styleConstants";
import { ArrayRGBA, ColorMixer } from "../utils/utils";
import Link from "next/link";

type ProjectStyleInput = {
  filled?: "true" | "false";
  color: ArrayRGBA;
};

export const ImageWrapper = styled.div`
  width: 100%;
  height: auto;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    position: relative !important;
    object-fit: cover; // Optional
  }
`;
export const CRImageWrapper = styled.div`
  width: 80%;
  height: auto;
  position: relative;
  margin: 0 auto;

  img {
    border-radius: 16px 16px 0px 0px;

    width: 100%;
    height: 100%;
    position: relative !important;
    object-fit: cover; // Optional
  }
`;

export const ProjectWrapper = styled.div<ProjectStyleInput>`
  background-color: ${(props) =>
    ColorMixer({
      bottomLayer: props.color,
      topLayer: LightOverlay_80,
      returnFormat: "rgba",
      opacity: 0.71,
    })};
  border: ${borderWidth} solid
    ${(props) =>
      ColorMixer({
        bottomLayer: props.color,
        topLayer: LightOverlay_80,
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
  backdrop-filter: blur(6.8px);
  -webkit-backdrop-filter: blur(6.8px);
  // min-height: 400px;
  grid-column: 2 / span 10;
  padding: 24px 24px 0px 24px;
  display: flex;
  flex-direction: column;
  column-gap: 20px;
  &:hover {
    background-color: ${(props) =>
      ColorMixer({
        bottomLayer: props.color,
        topLayer: [255, 255, 255, 0.7],
        returnFormat: "rgba",
        opacity: 0.7,
      })};
  }
`;

export const ProjectInfo = styled.div<CoreColorInput>`
  grid-column: 2 / span 3;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  column-gap: 32px;
  justify-content: flex-start;
  text-align: left;
  margin-bottom: 48px;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    row-gap: 16px;
  }
`;
export const SectionTitle = styled.h3<CoreColorInput>`
  font-size: 20px;
  grid-column: 2 / span 10;
  font-weight: 400;
  margin-bottom: 16px;
  color: ${(props) =>
    ColorMixer({
      bottomLayer: props.color,
      topLayer: DarkOverlay_80,
      returnFormat: "rgba",
    })};
`;
export const ProjectSubtitle = styled.h3`
  line-height: 1.2;
  font-size: 20px;
  font-weight: 300;
  margin-bottom: 8px;
`;
export const ProjectLink = styled(Link)<CoreColorInput>`
  cursor: pointer;
  font-size: 40px;
  font-weight: 500;
  letter-spacing: 2px;
  min-width: fit-content;
  color: ${(props) =>
    ColorMixer({
      bottomLayer: props.color,
      topLayer: DarkOverlay_80,
      returnFormat: "rgba",
    })};
  text-decoration: none;
`;
