import { FullWidthWrapper } from "../style/gridLayout";
import {
  HeroSubtitle,
  HeroText,
  SineWaveGridWrapper,
} from "../style/sineWaveStyle";
import { CoreColorInput } from "../style/styleConstants";
import { ColorMixer } from "../utils/utils";

export default function SineWave({ color }: CoreColorInput) {
  return (
    <FullWidthWrapper>
      <SineWaveGridWrapper>
        <HeroText color={color}> designing with data </HeroText>
        <HeroSubtitle color={color}>
          a data visualization designer with a background in engineering, I love
          working with complex data and turning it into something beautiful into
          data driven designer
        </HeroSubtitle>
      </SineWaveGridWrapper>
    </FullWidthWrapper>
  );
}
