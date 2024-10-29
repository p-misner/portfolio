"use client";
import { useContext, useState } from "react";
import ColorPickerComponent, { Settings } from "./components/controls";
import { ControlPanelWrapper } from "./style/controlsStyle";
import { ArrayRGBA } from "./utils/utils";
import PageHeader from "./components/header";
import {
  BackgroundPageWrapper,
  NotFoundButton,
  NotFoundMessage,
  NotFoundSubtitle,
  NotFoundWrapper,
  PageWrapper,
} from "./style/gridLayout";
import { CanvasWave } from "./components/sineWave";
import { ThemeContext } from "./components/providers";

export default function Custom404() {
  // const defaultColor: ArrayRGBA = [25, 149, 230, 1];
  // const [colorPicked, setColorPicked] = useState<ArrayRGBA>(defaultColor);
  // const [waveOptions, setWaveOptions] = useState({
  //   a1: 0.25,
  //   a2: 0.5,
  //   nw1: 4,
  //   nw2: 1.2,
  // });
  const theme = useContext(ThemeContext);

  return (
    <div>
      {/* <PageHeader /> */}
      <ControlPanelWrapper>
        <Settings />
        <ColorPickerComponent />
      </ControlPanelWrapper>
      <BackgroundPageWrapper color={theme.colorPicked}>
        <PageWrapper color={theme.colorPicked} projectpage={false}>
          <CanvasWave />
          <NotFoundWrapper>
            <NotFoundMessage color={theme.colorPicked}>
              {" "}
              We've lost signal!{" "}
            </NotFoundMessage>
            <NotFoundSubtitle color={theme.colorPicked}>
              {" "}
              <a href="/"> Let's get you back on the right wavelength→</a>
            </NotFoundSubtitle>
            {/* <NotFoundButton color={colorPicked}> Home → </NotFoundButton> */}
          </NotFoundWrapper>
        </PageWrapper>
      </BackgroundPageWrapper>
    </div>
  );
}
