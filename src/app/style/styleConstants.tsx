import styled from "styled-components";
import { ArrayRGBA } from "../utils/utils";

export const LightOverlay_97: ArrayRGBA = [255, 255, 255, 0.97];
export const LightOverlay_99: ArrayRGBA = [255, 255, 255, 0.99];
export const LightOverlay_95: ArrayRGBA = [255, 255, 255, 0.94];
export const LightOverlay_80: ArrayRGBA = [255, 255, 255, 0.8];
export const DarkOverlay_80: ArrayRGBA = [0, 0, 0, 0.7];
export const DarkOverlay_50: ArrayRGBA = [0, 0, 0, 0.6];

// export const coreColor: ArrayRGBA = [6, 147, 227, 1];
export type CoreColorInput = {
  color: any;
};
export type ProjectPage = {
  projectpage: boolean;
  color: any;
};
export const borderWidth = "1px";

export const breakpoints = {
  xs: "0px",
  sm: "600px",
  md: "800px",
  lg: "1200px",
  xl: "1536px",
};
