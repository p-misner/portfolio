import { ArrayRGBA, ColorMixer } from "../utils/utils";

export const LightOverlay_97: ArrayRGBA = [255, 255, 255, 0.97];
export const LightOverlay_95: ArrayRGBA = [255, 255, 255, 0.95];
export const DarkOverlay_80: ArrayRGBA = [0, 0, 0, 0.8];

export const coreColor: ArrayRGBA = [6, 147, 227, 1];
export type CoreColorInput = {
  color: ArrayRGBA;
};
// export const baseColor = ColorMixer({
//   bottomLayer: coreColor,
//   topLayer: coreColor,
//   returnFormat: "rgba",
// });
// export const textColor = ColorMixer({
//   bottomLayer: coreColor,
//   topLayer: DarkOverlay_80,
//   returnFormat: "rgba",
// });
// export const lightBackground = ColorMixer({
//   bottomLayer: coreColor,
//   topLayer: LightOverlay_97,
//   returnFormat: "rgba",
// });

export const borderWidth = "2px";
