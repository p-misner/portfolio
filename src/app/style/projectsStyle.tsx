"use client";
import styled, { keyframes } from "styled-components";
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
  color: any;
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

export const ExpandImg = keyframes`
  from { transform: scale(1)}
  to {
    transform: scale(1.02);
  }
`;
export const ShrinkImg = keyframes`
  from { transform: scale(1.02)}
  to {
    transform: scale(1);
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
  padding: 32px 32px 0px 32px;
  display: flex;
  flex-direction: column;
  column-gap: 20px;
  img {
    animation-name: ${ShrinkImg};
    animation-duration: 1s;
  }
  span {
    visibility: hidden;
  }
  &:hover {
    img {
      animation-name: ${ExpandImg};
      animation-duration: 1s;
      animation-fill-mode: forwards;
    }
    span {
      visibility: visible;
    }
    background-color: ${(props) =>
      ColorMixer({
        bottomLayer: props.color,
        topLayer: [255, 255, 255, 0.7],
        returnFormat: "rgba",
        opacity: 0.7,
      })};
  }
  @media screen and (max-width: 1000px) {
    padding: 24px 24px 0px 24px;
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
export const ProjectSubtitle = styled.h3<CoreColorInput>`
  line-height: 1.2;
  font-size: 20px;
  font-weight: 300;
  margin-bottom: 8px;
  color: ${(props) =>
    ColorMixer({
      bottomLayer: props.color,
      topLayer: DarkOverlay_80,
      returnFormat: "rgba",
    })};
  @media screen and (max-width: 1000px) {
    font-size: 18px;
  }
`;
export const ProjectLink = styled(Link)<CoreColorInput>`
  cursor: pointer;
  text-decoration: none;
`;

export const ProjectTitle = styled.h1<CoreColorInput>`
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
  @media screen and (max-width: 1000px) {
    font-size: 32px;
  }
`;
