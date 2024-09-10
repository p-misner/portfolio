import { GridWrapper } from "../style/gridLayout";
import {
  FunProjectWrapper,
  PlaygroundTitle,
  PlaygroundWrapper,
  ProjectScroll,
  ScrollInstructions,
} from "../style/playgroundStyle";
import { CoreColorInput } from "../style/styleConstants";

export default function Playground({ color }: CoreColorInput) {
  return (
    <PlaygroundWrapper color={color}>
      <GridWrapper>
        <PlaygroundTitle color={color}>Playground</PlaygroundTitle>
        <ScrollInstructions color={color}>
          {" "}
          all the bits and bobs I’ve been playing around with
        </ScrollInstructions>
        <ProjectScroll color={color}>
          <FunProjectWrapper color={color} rotate={"-15deg"} />
          <FunProjectWrapper color={color} rotate={"23deg"} />
          <FunProjectWrapper color={color} rotate={"-15deg"} />
          <FunProjectWrapper color={color} rotate={"-15deg"} />
          <FunProjectWrapper color={color} rotate={"23deg"} />
          <FunProjectWrapper color={color} rotate={"-15deg"} />
        </ProjectScroll>
      </GridWrapper>
    </PlaygroundWrapper>
  );
}
