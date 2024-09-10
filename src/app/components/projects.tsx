import Image from "next/image";
import GroImage from "../../../public/GroDashboards.png";
import ApolloImg from "../../../public/ApolloSplash.png";
import UrbanismXImg from "../../../public/UrbanismXSplash.png";
import {
  CRImageWrapper,
  ImageWrapper,
  ProjectInfo,
  ProjectSubtitle,
  ProjectTitle,
  ProjectWrapper,
} from "../style/projectsStyle";
import { CoreColorInput } from "../style/styleConstants";

export function GroIntelligenceProject({ color }: CoreColorInput) {
  return (
    <ProjectWrapper gridColumn="2 / span 10" color={color}>
      <ProjectInfo>
        <ProjectTitle> Gro Intelligence</ProjectTitle>
        <ProjectSubtitle>
          Design for agriculture and dommodity Trading Models. Here are some
          more words describing what I did and some other things as well. Design
          for agriculture and dommodity Trading Models. Here are some more words
          describing what I did and some other things as wel.
        </ProjectSubtitle>
      </ProjectInfo>
      <ImageWrapper>
        <Image
          src={GroImage}
          alt="image of map"
          // layout="fill"
          // objectFit="contain"
        />
      </ImageWrapper>
    </ProjectWrapper>
  );
}
export function CharlesRiver({ color }: CoreColorInput) {
  return (
    <ProjectWrapper gridColumn="2 / span 10" color={color}>
      <ProjectInfo>
        <ProjectTitle> Charles River Labs</ProjectTitle>
        <ProjectSubtitle>
          Design for agriculture and dommodity Trading Models. Here are some
          more words describing what I did and some other things as well. Design
          for agriculture and dommodity Trading Models. Here are some more words
          describing what I did and some other things as wel.
        </ProjectSubtitle>
      </ProjectInfo>
      <CRImageWrapper>
        <Image
          src={ApolloImg}
          alt="image of map"
          // layout="fill"
          // objectFit="contain"
        />
      </CRImageWrapper>
    </ProjectWrapper>
  );
}
export function ReadySetExcel({ color }: CoreColorInput) {
  return (
    <ProjectWrapper gridColumn="2 / span 10" color={color}>
      <Image src={GroImage} alt="image of map" height="100" />
      <div>
        <ProjectSubtitle>
          Designing for Agriculture and Commodity Trading
        </ProjectSubtitle>
        <ProjectTitle> UrbanismX at Tufts</ProjectTitle>
      </div>
    </ProjectWrapper>
  );
}
export function UrbanismX({ color }: CoreColorInput) {
  return (
    <ProjectWrapper gridColumn="2 / span 10" color={color}>
      <ProjectInfo>
        <ProjectTitle> UrbanismX at Tufts</ProjectTitle>
        <ProjectSubtitle>
          Design for agriculture and dommodity Trading Models. Here are some
          more words describing what I did and some other things as well. Design
          for agriculture and dommodity Trading Models. Here are some more words
          describing what I did and some other things as wel.
        </ProjectSubtitle>
      </ProjectInfo>
      <CRImageWrapper>
        <Image
          src={UrbanismXImg}
          alt="image of map"
          // layout="fill"
          // objectFit="contain"
        />
      </CRImageWrapper>
    </ProjectWrapper>
  );
}
