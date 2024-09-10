"use client";
import {
  BackgroundPageWrapper,
  BottomBit,
  GridWrapper,
  PageWrapper,
} from "./style/gridLayout";
import PageHeader from "./components/header";
import SineWave, { CanvasWave } from "./components/sineWave";
import {
  ProjectSubtitle,
  ProjectWrapper,
  SectionTitle,
} from "./style/projectsStyle";
import { ControlPanelWrapper } from "./style/controlsStyle";
import ColorPickerComponent, { Settings } from "./components/controls";
import { useState } from "react";
import { ArrayRGBA } from "./utils/utils";
import {
  CharlesRiver,
  FirstProject,
  GroIntelligenceProject,
  ReadySetExcel,
  UrbanismX,
} from "./components/projects";
import Playground from "./components/playground";

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
      <PageHeader color={colorPicked} />

      <BackgroundPageWrapper color={colorPicked}>
        <PageWrapper color={colorPicked}>
          <CanvasWave color={colorPicked} waveOptions={waveOptions} />

          <SineWave color={colorPicked} waveOptions={waveOptions} />
          <GridWrapper>
            <GroIntelligenceProject color={colorPicked} />
            <CharlesRiver color={colorPicked} />
            <UrbanismX color={colorPicked} />
            {/* <ReadySetExcel color={colorPicked} /> */}
          </GridWrapper>
        </PageWrapper>
      </BackgroundPageWrapper>
      <Playground color={colorPicked} />
      <BackgroundPageWrapper color={colorPicked}>
        <BottomBit color={colorPicked} />
      </BackgroundPageWrapper>
    </div>
  );
}
