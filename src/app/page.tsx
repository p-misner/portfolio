"use client";
import { GridWrapper, PageWrapper } from "./style/gridLayout";
import PageHeader from "./components/header";
import SineWave from "./components/sineWave";
import { FullWidthProject, TwoThirdProject } from "./style/projectsStyle";
import { ControlPanelWrapper } from "./style/controlsStyle";
import ColorPickerComponent, { Settings } from "./components/controls";
import { useState } from "react";
import { ArrayRGBA, ColorMixer } from "./utils/utils";
import { DarkOverlay_80, LightOverlay_95 } from "./style/styleConstants";

//https://stackoverflow.com/questions/13932704/how-to-draw-sine-waves-with-svg-js

export default function Home() {
  const aa_coreColor: ArrayRGBA = [6, 147, 227, 1];

  const [colorPicked, setColorPicked] = useState<ArrayRGBA>([25, 230, 220, 1]);
  const [waveOptions, setWaveOptions] = useState({
    a1: 0.25,
    a2: 0.5,
    nw1: 4,
    nw2: 1.2,
  });
  return (
    <div>
      <ControlPanelWrapper>
        {/* <Settings color={colorPicked} /> */}
        <Settings
          waveOptions={waveOptions}
          setWaveOptions={setWaveOptions}
          color={colorPicked}
        />
        <ColorPickerComponent
          setColorPicked={setColorPicked}
          colorPicked={colorPicked}
        />
      </ControlPanelWrapper>
      <PageWrapper color={colorPicked}>
        <PageHeader color={colorPicked} />
        <SineWave color={colorPicked} waveOptions={waveOptions} />
        <GridWrapper>
          <FullWidthProject color={colorPicked}>aa</FullWidthProject>
          <TwoThirdProject color={colorPicked} filled="true">
            {" "}
            WORDS GO HERE
          </TwoThirdProject>
        </GridWrapper>
      </PageWrapper>
    </div>
  );
}
