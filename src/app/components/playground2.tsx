import { useContext } from "react";
import { ThemeContext } from "./providers";
import styled from "styled-components";

import { CoreColorInput, LightOverlay_80 } from "../style/styleConstants";
import { ColorMixer } from "../utils/utils";
import { HeroSubtitle } from "../style/sineWaveStyle";

export default function Playground2() {
  const theme = useContext(ThemeContext);
  return (
    <PlaygroundWrapper>
      <PlaygroundColumns>
        <PlaygroundColumn>
          <PlaygroundItem color={theme?.colorPicked}>
            <h2> A Matter of Time</h2>
            <ImagePlaceholder />
            <ImagePlaceholder />
            <ImagePlaceholder />
          </PlaygroundItem>
          <PlaygroundItem color={theme?.colorPicked} />
          <PlaygroundItem color={theme?.colorPicked} />
          <PlaygroundItem color={theme?.colorPicked} />
        </PlaygroundColumn>
        <PlaygroundColumn>
          <PlaygroundItem color={theme?.colorPicked} />
          <PlaygroundItem color={theme?.colorPicked} />
          <PlaygroundItem color={theme?.colorPicked} />
          <PlaygroundItem color={theme?.colorPicked} />
        </PlaygroundColumn>
      </PlaygroundColumns>
    </PlaygroundWrapper>
  );
}

const PlaygroundWrapper = styled.div`
  /* height: 400px; */
  width: 100%;
  display: flex;
  flex-direction: column;
  grid-column: 2 / span 10;
`;

const PlaygroundColumns = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Create 3 equal columns */
  grid-gap: 16px; /* Set 24px gap between columns and rows */
`;

const PlaygroundColumn = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;
const PlaygroundItem = styled.div<CoreColorInput>`
  border-radius: 16px;
  max-width: 100%;
  min-height: 200px;
  backdrop-filter: blur(6.8px);
  -webkit-backdrop-filter: blur(6.8px);
  background-color: ${(props) =>
    ColorMixer({
      bottomLayer: props.color,
      topLayer: LightOverlay_80,
      returnFormat: "rgba",
      opacity: 0.71,
    })};
  padding: 32px;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

const ImagePlaceholder = styled.div<{ height?: number }>`
  width: 100%;
  height: ${(props) => (props.height ? `${props.height}px` : "180px")};
  background-color: gray;
`;
