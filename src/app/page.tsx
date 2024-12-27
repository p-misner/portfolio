"use client";
import {
  BackgroundPageWrapper,
  BottomBit,
  GridWrapper,
  PageWrapper,
} from "./style/gridLayout";
import SineWave, { CanvasWave } from "./components/sineWave";
import ColorPickerComponent, { Settings } from "./components/controls";
import { useContext, useState } from "react";
import {
  CharlesRiver,
  GroIntelligenceProject,
  UrbanismX,
} from "./components/projects";
import Playground from "./components/playground";
import About from "./components/about";
import { ThemeContext } from "./components/providers";

//https://stackoverflow.com/questions/13932704/how-to-draw-sine-waves-with-svg-js

export default function Home() {
  // const defaultColor: ArrayRGBA = [25, 149, 230, 1];
  // const [colorPicked, setColorPicked] = useState<ArrayRGBA>(defaultColor);
  const theme = useContext(ThemeContext);

  return (
    <div>
      <BackgroundPageWrapper color={theme?.colorPicked}>
        <PageWrapper projectpage={false} color={theme?.colorPicked}>
          {/* <ControlPanelWrapper>
            <Settings />
            <ColorPickerComponent />
          </ControlPanelWrapper> */}
          <Settings />
          <CanvasWave />
          <SineWave />
          <div id="work" style={{ paddingTop: "80px" }}></div>
          <GridWrapper>
            <GroIntelligenceProject />
            <CharlesRiver />
            <UrbanismX />
          </GridWrapper>
        </PageWrapper>
      </BackgroundPageWrapper>
      <Playground />
      <BackgroundPageWrapper color={theme?.colorPicked}>
        <BottomBit projectpage={false} color={theme?.colorPicked}>
          <About />
        </BottomBit>
      </BackgroundPageWrapper>
    </div>
  );
}
