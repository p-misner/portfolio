import Image from "next/image";
import GroImage from "../../../public/GroDashboards.png";
import ApolloImg from "../../../public/ApolloSplash.png";
import UrbanismXImg from "../../../public/UrbanismXSplash.png";
import {
  CRImageWrapper,
  ImageWrapper,
  ProjectInfo,
  ProjectSubtitle,
  ProjectLink,
  ProjectWrapper,
} from "../style/projectsStyle";
import { CoreColorInput } from "../style/styleConstants";

export function GroIntelligenceProject({ color }: CoreColorInput) {
  return (
    <ProjectWrapper gridColumn="2 / span 10" color={color}>
      <ProjectInfo color={color}>
        <ProjectLink color={color} href="/grointelligence">
          {" "}
          Gro Intelligence →
        </ProjectLink>
        <ProjectSubtitle>
          Design for agriculture and dommodity Trading Models. Here are some
          more words describing what I did and some other things as well. Design
          for agriculture and dommodity Trading Models. Here are some more words
          describing what I did and some other things as wel.
        </ProjectSubtitle>
      </ProjectInfo>
      <ProjectLink color={color} href="/grointelligence">
        <ImageWrapper>
          <Image src={GroImage} alt="image of map" />
        </ImageWrapper>
      </ProjectLink>
    </ProjectWrapper>
  );
}
export function CharlesRiver({ color }: CoreColorInput) {
  return (
    <ProjectWrapper gridColumn="2 / span 10" color={color}>
      <ProjectInfo color={color}>
        <ProjectLink color={color} href="charlesriver">
          {" "}
          Charles River Labs →
        </ProjectLink>
        <ProjectSubtitle>
          Design for agriculture and dommodity Trading Models. Here are some
          more words describing what I did and some other things as well. Design
          for agriculture and dommodity Trading Models. Here are some more words
          describing what I did and some other things as wel.
        </ProjectSubtitle>
      </ProjectInfo>
      <ProjectLink color={color} href="charlesriver">
        <CRImageWrapper>
          <Image src={ApolloImg} alt="image of map" />
        </CRImageWrapper>
      </ProjectLink>
    </ProjectWrapper>
  );
}

export function UrbanismX({ color }: CoreColorInput) {
  return (
    <ProjectWrapper gridColumn="2 / span 10" color={color}>
      <ProjectInfo color={color}>
        <ProjectLink color={color} href="urbanismx">
          {" "}
          UrbanismX at Tufts
        </ProjectLink>
        <ProjectSubtitle>
          Design for agriculture and dommodity Trading Models. Here are some
          more words describing what I did and some other things as well. Design
          for agriculture and dommodity Trading Models. Here are some more words
          describing what I did and some other things as wel.
        </ProjectSubtitle>
      </ProjectInfo>
      <ProjectLink color={color} href="urbanismx">
        <CRImageWrapper>
          <Image src={UrbanismXImg} alt="image of map" />
        </CRImageWrapper>
      </ProjectLink>
    </ProjectWrapper>
  );
}
